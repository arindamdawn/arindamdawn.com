
// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

const hamburgerIcon = document.getElementById("hamburger-icon");
hamburgerIcon.onclick = (function() {
  hamburgerIcon.classList.toggle("trigger");
});
