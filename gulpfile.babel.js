//utils
import gulp from "gulp";
import BrowserSync from "browser-sync";
import gutil from "gulp-util";

import cp from "child_process";
import postcss from "gulp-postcss";
import webpack from "webpack";
import webpackConfig from "./webpack.conf";
import svgstore from "gulp-svgstore";
import svgmin from "gulp-svgmin";
import inject from "gulp-inject";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";
import clean from "gulp-clean";
import sass from "gulp-sass";
import rename from "gulp-rename";
import workbox from "workbox-build";


const browserSync = BrowserSync.create();
const defaultArgs = ["-d", "../dist", "-s", "site"];
const browserslist = [
  "last 1 version",
  "> 1%",
  "maintained node versions",
  "not dead"
];

var hugoBin = `./bin/hugo.${process.platform === "win32" ? "exe" : process.platform}`;

if (process.env.HUGO_VERSION) {
  hugoBin = "hugo";
}


if (process.env.DEBUG) {
  defaultArgs.unshift("--debug");
}

gulp.task("hugo", (cb) => buildSite(cb));
gulp.task("hugo-preview", (cb) => buildSite(cb, function() { gulp.series("--buildDrafts", "--buildFuture") }));
gulp.task("build-preview", function() { gulp.series("sass", "js", "hugo-preview") });

gulp.task("browser-sync", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("sass", () => {
  const plugins = [autoprefixer({"overrideBrowserslist": browserslist}), cssnano()];
  return gulp.src("./design/scss/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(plugins))
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());  
});

gulp.task("js", (cb) => {
  const myConfig = Object.assign({}, webpackConfig);

  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true,
      progress: true
    }));
    browserSync.reload();
    cb();
  });
});

gulp.task("svg", () => {
  const svgs = gulp
    .src("site/static/img/icons-*.svg")
    .pipe(svgmin())
    .pipe(svgstore({inlineSvg: true}));

  function fileContents(filePath, file) {
    return file.contents.toString();
  }

  return gulp
    .src("site/layouts/partials/svg.html")
    .pipe(inject(svgs, {transform: fileContents}))
    .pipe(gulp.dest("site/layouts/partials/"));
});

// Clean
gulp.task("clean", function() {
  return gulp.src("dist", {read: false})
    .pipe(clean());
});

gulp.task("server", gulp.series("clean", "hugo", "sass", "js", "svg", (done) => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch("./design/js/**/*.js",  gulp.series("js"));
  gulp.watch("./design/scss/**/*.scss",  gulp.series("sass") );
  gulp.watch("./site/static/img/icons-*.svg",  gulp.series("svg") );
  gulp.watch("./site/**/*",  gulp.series("hugo") );

  done();
}));

gulp.task("generate-service-worker", (cb) => {
  workbox.generateSW({
    cacheId: "codecusp",
    globDirectory: "./dist",
    globPatterns: [
      "**/*.{css,js,eot,ttf,woff,woff2,otf}"
    ],
    swDest: "./dist/sw.js",
    modifyUrlPrefix: {
      "": "/"
    },
    clientsClaim: true,
    skipWaiting: true,
    ignoreUrlParametersMatching: [/./],
    offlineGoogleAnalytics: true,
    maximumFileSizeToCacheInBytes: 50 * 1024 * 1024,
    runtimeCaching: [
      {
        urlPattern: /(?:\/)$/,
        handler: "staleWhileRevalidate",
        options: {
          cacheName: "html",
          expiration: {
            maxAgeSeconds: 60 * 60 * 24 * 7,
          },
        },
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
        handler: "cacheFirst",
        options: {
          cacheName: "images",
          expiration: {
            maxEntries: 1000,
            maxAgeSeconds: 60 * 60 * 24 * 365,
          },
        },
      },
      {
        urlPattern: /\.(?:mp3|wav|m4a)$/,
        handler: "cacheFirst",
        options: {
          cacheName: "audio",
          expiration: {
            maxEntries: 1000,
            maxAgeSeconds: 60 * 60 * 24 * 365,
          },
        },
      },
      {
        urlPattern: /\.(?:m4v|mpg|avi)$/,
        handler: "cacheFirst",
        options: {
          cacheName: "videos",
          expiration: {
            maxEntries: 1000,
            maxAgeSeconds: 60 * 60 * 24 * 365,
          },
        },
      }
    ],
  });
  cb();
});

gulp.task("build", gulp.series("hugo", "sass", "js", "svg", "generate-service-worker", (done) => {
  done();
}));

function buildSite(cb, options) {
  const args = options ? defaultArgs.concat(options) : defaultArgs;

  return cp.spawn(hugoBin, args, { stdio: "inherit" }).on("close", (code) => {
    if (code === 0) {
      browserSync.reload("notify:false");
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
}
