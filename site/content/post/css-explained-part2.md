---
title: "Add life to HTML using CSS - Part 2. Adding basic styles to a webpage and brief intro to CSS Flexbox"
description: Learn how to organise a webpage quickly using CSS.   
lastmod: 2019-06-25T12:17:48+05:30
date: 2019-06-25T12:17:48+05:30
author: Arindam Dawn
draft: false
image: /img/css3.svg
tags: ["css"]
---

This is part 2 of a 3 article series on CSS. If you are new to CSS and haven't checked the first part, I would encourage you to check this post. 
[CSS Basics]({{< ref "/post/css-explained-part1.md" >}})

If you are unfamiliar with HTML, I would highly recommend you to checkout my articles on HTML. I have written 3 articles on introduction to HTML where I also created the HTML of Facebook Login page from scratch! [Check that out]({{< ref "/post/html-explained-part1.md" >}})

{{< figure src="/img/facebook-login.png" caption="Our reference webpage" alt="facebook login page" class="tc">}}.

## Let's write some CSS!

If you remember while creating the HTML of this webpage we made several sections based on the layout of the webpage.

{{< figure src="/img/facebook-login-sectioned.png" caption="The segmented blocks" alt="sectioned-login-page" class="tc">}}

We created the `<header></header>`, `<main></main>` and `<footer></footer>` blocks in the html file. Let's create a css file and link it to the html file.

{{< file "html" "index.html" >}}
{{< highlight html >}}
<!DOCTYPE html>
<head>
    <link rel="stylesheet" href="css/styles.css">
</head>
</html>

{{< /highlight >}}

## Removing the default margin and padding

Before writing styles for our webpage, we need to clear out any default margin and padding added by the browser. To test that simply add a border to the `body` selector like this.

{{< file "css" "styles.css" >}}
{{< highlight css >}}

body {
    border: 1px solid red;
}

{{< /highlight >}}

The above line of code adds a **solid** border of **1 pixel** with **red** color. You can change the values and try out the border property yourself. 

Now double-click the index.html file to open it in browser. You will notice that there is a gap between the border and the browser window. Open the chrome inspect tool by right clicking and selecting inspect. The shortcut key is `CTRL`+`SHIFT`+`I` for windows and `⌘`+`SHIFT`+`I` for mac. You can check the html and the associated styles (CSS) for that webpage. Playaround with the inspect tool, explore it a lot. It will be your most important tool while creating web pages. You will notice that if you click on `<body>` element you will notice in the styles, a margin has been added by default by user agent stylesheet (These are added by the browser). Now let's get rid of them. First remove the border from body and add these styles to the body.

{{< file "css" "styles.css" >}}
{{< highlight css >}}

<!-- Removing user agent default styles -->
body, ul, li, a, h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
}

{{< /highlight >}}

This removes any default padding and margin from the HTML elements added by the browser. Now let's add some colors!

We will also remove the default styles applied to the buttons by the browser by resetting them.

{{< file "css" "styles.css" >}}
{{< highlight css >}}

<!-- Resetting button styles -->
button {
    border: 0;
}

{{< /highlight >}}

You will also notice that the content of the page is in the center of the page. So we will create a class called container and apply some styles to it. 

{{< file "css" "styles.css" >}}
{{< highlight css >}}

.container {
    max-width: 960px;
    margin: 0 auto;
}

{{< /highlight >}}

This creates a container class. All the content within this class will be contained within an area that can have maximum width of 960px. If we had used only width instead of width, the content would always occupy a width of 960px. If we viewed the webpage on devices less than 960px screen width, then there would be horizontal scrollbar which is annoying. So max-width takes just adds an upper limit to the width of the content. 
The `margin: 0 auto` ensures the content is aligned to the center of the page horizontally. Check out the margin syntax and properties [here](https://www.w3schools.com/css/css_border.asp).

Let's modify the `<header>` block to add keep all the content inside a container like this 

{{< file "html" "index.html" >}}
{{< highlight html >}}
<header>
    <div class="container">
        <img src="./img/logo-white.png" width="100" alt="Facebook Logo">
        <button>Create New Account</button>
    </div>
</header>
{{< /highlight >}}

In similar fashion we need to add the move the content of the `<main>` and `<footer>` blocks inside the same **container** class. You can check the entire code at the bottom of this post if you face any issues.

## Let's style the header

The page header has a blue background. The color code is `#3b5998`.(You can simply right click on any website and click inspect to find out the color they are using). 

{{< file "css" "styles.css" >}}
{{< highlight css >}}

header {
    background-color: #3b5998;
}

{{< /highlight >}}

The button in the header has a green color background and the text is white in color. The hex code for that color is `#42b72a`. The hex code for white is `#ffffff` (We can simply write white as well but it's better to use hex codes). Let's add some styles to the button.

{{< file "css" "styles.css" >}}
{{< highlight css >}}

header {
    background-color: #3b5998;
}

header button {
    background-color: #42b72a;
    color: #ffffff;
}

{{< /highlight >}}

Since we are styling the button which is within the header, we first write the parent selector (header) and then add the child selector (button). I would recommend you to checkout the [W3SchoolsCSS styling rules](https://www.w3schools.com/css/default.asp). They are pretty easy. 

One of the important things to understand in CSS in the CSS Box Model. It shows the relationship between margin, padding and border with the content. Check it out [here](https://www.w3schools.com/css/css_boxmodel.asp). You will never have any confusion regarding margin, padding and borders ever.

As we can see from the reference image, the header content has some top and bottom padding. So let's update our header styles.

{{< file "css" "styles.css" >}}
{{< highlight css >}}

header {
    background-color: #3b5998;
    padding: 20px 0;
}

{{< /highlight >}}

Experiment a lot with these values unless you are satisfed with the desired results and match it with the reference webpage.

Now let's resize the logo. Ww can remove the `width` attribute from the `img` tag and instead manage the width using css. So the updated `header` html will be

{{< file "html" "index.html" >}}
{{< highlight html >}}
<header>
    <div class="container">
        <img src="./img/logo-white.png" alt="Facebook Logo">
        <button>Create New Account</button>
    </div>
</header>
{{< /highlight >}}

In the css file we will add a style to the logo which is inside the `header`.

{{< file "css" "styles.css" >}}
{{< highlight css >}}

header img{
    width: 160px;
    margin-top: 20px;
}

{{< /highlight >}}

Now we need to align the logo and the button properly. There are several ways to do that but I would like to introduce to you a modern and very useful alignment concept - The flexbox. Flexbox is a fancy term for aligning HTML items in a single direction - horizontal or vertical. With CSS Flexbox, you can very easily align items in a number of ways either horizontally or vertically and even chamge their order using just CSS. Let's align the header items using flexbox. For that we will update the `header` block a bit and keep the items to be aligned inside a `div` block where we can apply flexbox styles.

{{< file "html" "index.html" >}}
{{< highlight html >}}
<header>
    <div class="container">
    <div class="contents">
        <img src="./img/logo-white.png" alt="Facebook Logo">
        <button>Create New Account</button>
    </div>
    </div>
</header>
{{< /highlight >}}

We will apply `display: flex` property to the `.contents` class in our styles file.

{{< file "css" "styles.css" >}}
{{< highlight css >}}

header .contents {
    display: flex;
}

{{< /highlight >}}

Adding this flex property automatically stacks its child items horizontally. We also need to center align the items vertically. Using primitive CSS techniques, it would be quite a tedious task but using flexbox it becomes very easy. We just need to add a property `align-items: center`.

{{< file "css" "styles.css" >}}
{{< highlight css >}}

header .contents {
    display: flex;
    align-items: center
}

{{< /highlight >}}

The `header` styling is now complete! 

The `main` block has a grey background with hex code `#e9ebee` so let's quickly apply that. 

{{< file "css" "styles.css" >}}
{{< highlight css >}}

main {
    background: #e9ebee;
}

{{< /highlight >}}

We shall also apply some top and bottom padding to the main block. 

{{< file "css" "styles.css" >}}
{{< highlight css >}}

main {
    background: #e9ebee;
    padding: 50px 0;
}

{{< /highlight >}}

> Quick tip: Always feel free to refer the [w3schools docs](https://www.w3schools.com/css/default.asp) to know the details about the CSS properties. That will give you a clear picture of individual CSS properties.

Next, we'll do some basic styling to the login form

{{< file "css" "styles.css" >}}
{{< highlight css >}}

.login-form {
    margin: 0 auto;
    background: #ffffff;
    width: 600px;
    text-align: center;
    padding: 40px 0;
}

{{< /highlight >}}

We will complete the login form in the next post.

Let's move on to the footer and do some basic styling

The footer has two lists. Let's target the 1st list containing the languages. The `ul` elements or the unordered list items by default have a bullet symbol (•). We don't want them to appear in any of the lists in the webpage. So we will apply a global style to the unordered lists.

{{< file "css" "styles.css" >}}
{{< highlight css >}}

ul {
    list-style: none;
}

{{< /highlight >}}

This will remove all the • symbols from all list items in the page. 

Let's add a class to the 1st list to make it more easy to understand. 

{{< file "html" "index.html" >}}
{{< highlight html >}}
<footer>
    <ul class="languages">
        <li><a href="#">English (UK)</a></li>
        <li><a href="#">বাংলা</a></li>
        <li><a href="#">हिन्दी</a></li>
        <li><a href="#"> اردو</a></li>
        <li><a href="#">नेपाली</a></li>
        <li><a href="#">ଓଡ଼ିଆ</a></li>
        <li><a href="#">Español</a></li>
        <li><a href="#">Português (Brasil)</a></li>
        <li><a href="#">Français (France)</a></li>
        <li><a href="#">Deutsch</a></li>
        <li><a href="#">Italiano</a></li>
        <button><i>+</i></button>
    </ul>
</footer>
{{< /highlight >}}

Now let's stack the list items horizontally using flexbox.

{{< file "css" "styles.css" >}}
{{< highlight css >}}

.languages {
    display: flex;
}

{{< /highlight >}}

In the same way let's add a class name `tags` to the second footer list and apply flexbox layout to it.

{{< file "html" "index.html" >}}
{{< highlight html >}}
<footer>
    <div class="tags">
    <ul>
        <li><a href="#">Sign up</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">Facebook Lite</a></li>
        <li><a href="#">Watch</a></li>
        <li><a href="#">People</a></li>
        <li><a href="#">Profiles</a></li>
        <li><a href="#">Pages</a></li>
        <li><a href="#">Page Categories</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Places</a></li>
        <li><a href="#">Games</a></li>
        <li><a href="#">Locations</a></li>
        <li><a href="#">Marketplace</a></li>
        <li><a href="#">Groups</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Local</a></li>
        <li><a href="#">Fundraisers</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Create Ad</a></li>
        <li><a href="#">Create Page</a></li>
        <li><a href="#">Developers</a></li>
    </ul>
    </div>
</footer>
{{< /highlight >}}

Now let's stack the list items horizontally using flexbox.

{{< file "css" "styles.css" >}}
{{< highlight css >}}

.tags {
    display: flex;
}

{{< /highlight >}}

We shall also add some white space around the footer by adding some padding.

{{< file "css" "styles.css" >}}
{{< highlight css >}}

footer {
    padding: 100px 0 20px 0;
}

{{< /highlight >}}

Next we will give some spacing around all the links in the footer and adjust the font-size, font-style and color.

{{< file "css" "styles.css" >}}
{{< highlight css >}}

footer ul li {
    padding-right: 15px;
    padding-bottom: 5px;
    font-size: 14px;
}

footer ul li a{
    color: #385898;
    text-decoration: none;
}

{{< /highlight >}}

{{< figure src="/img/fb-login-page.png" caption="What we have achieved till now" alt="facebook login page" class="tc">}}

The big picture is done. Just left with few details.

If you have followed and achieved the same result, you have done a great job! 
We shall finish off with the login form styling and some fine tuning in the next post.

Here's the complete HTML and CSS code till now. 

{{< gist codecusp 30b380785ca083b53f414b7dd64a9a01 >}}

Here's a quote for you.

> "Designers are meant to be loved, not to be understood." -- Margaret Oscar, designer

Keep practicing, keep tinkering and enjoy the process of building web pages 😊

## Recommended Reading

[w3schools css guide](https://www.w3schools.com/css/default.asp)
[Introduction to css - Scrimba](https://scrimba.com/g/gintrotocss)