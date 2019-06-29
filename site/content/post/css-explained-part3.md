---
title: "Add life to HTML using CSS - Part 3. More on form layouts and fine tuning "
description: Learn how to organise a webpage quickly using CSS.
lastmod: 2019-06-26T20:10:56+05:30
date: 2019-06-26T20:10:56+05:30
author: Arindam Dawn
draft: false
image: /img/css3.svg
tags: ["css"]
---

This is final part of a 3 article series on CSS. If you are new to CSS and haven't checked the first part, I would encourage you to check this post. 
[CSS Basics]({{< ref "/post/css-explained-part1.md" >}})

> "Have no fear of perfection -- you’ll never reach it." -- Salvador Dali, artist

We have already completed the basic layout of the facebook login page clone we were building. However the login form does not look that nice. So let's jump into action and style the form.

First we will give the form a max-width and center-align the form.

{{< file "css" "styles.css" >}}
{{< highlight css >}}

form {
    max-width: 300px;
    margin: 0 auto;
}

{{< /highlight >}}

The input text boxes and buttons should take the full-width of the form. This is how we will do that.

{{< file "css" "styles.css" >}}
{{< highlight css >}}

form input, form button{
    width: 100%;
}

{{< /highlight >}}

You might notice the width of the input boxes and the button is different. The input boxes goes beyond the width of the form. To prevent this, we use the css **box-sizing** property and set it to **border-box**. This prevents padding and margin to affect an element's width.

{{< file "css" "styles.css" >}}
{{< highlight css >}}

form input, form button{
    width: 100%;
    border-sizing: border-box;
}

{{< /highlight >}}

Let's improve the input boxes and buttons and give some spacing around them.

{{< file "css" "styles.css" >}}
{{< highlight css >}}

form input {
    margin: 5px 0;
    padding: 8px;
    border: 1px solid #e1e1e1;
    height: 35px;
    font-size: 14px;
}

form button {
    background-color: #4267b2;
    color: white;
    padding: 14px;
    margin: 5px 0;
    font-weight: bold;
}

{{< /highlight >}}

We will now style the form heading

{{< file "css" "styles.css" >}}
{{< highlight css >}}

.login-form h1 {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 18px;
    margin: 10px 0;
    font-weight: 100;
}

{{< /highlight >}}

Fonts play a significant role in the overall look of the website. It is a very important part of design. Do check the [CSS font properties in W3 schools](https://www.w3schools.com/css/css_font.asp). 

Instead of setting font-family (the name of the font we will be using) to every element, we can set it globally so that all elements of the webpage will inherit the same font.

{{< file "css" "styles.css" >}}
{{< highlight css >}}

body, ul, li, a, h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
    font-family: Helvetica, Arial, sans-serif;
}

{{< /highlight >}}

Looks good now! Next we will style the forgotten account link and the Create and Account button. Let's add a class to the create account button.

{{< file "html" "index.html" >}}
{{< highlight html >}}

<button class="create-account">Create New Account</button>

{{< /highlight >}}


{{< file "css" "styles.css" >}}
{{< highlight css >}}

.login-form a{
    color: #385898;
    font-size: 12px;
    margin: 10px 0;
    text-decoration: none;
    display: block;
}

{{< /highlight >}}

The 'or' text has a tricky layout with two segment lines. There are many ways to achieve this. Let's try an easy way.

We will wrap the text within `span` tags inside a `p` tag. We will then add a border-bottom to the paragraph tag and adjust its line height property then make background of the `span` tag white. This is a simple hack to place text inside a line.

{{< file "html" "index.html" >}}
{{< highlight html >}}

<p><span>or</span></p>

{{< /highlight >}}


{{< file "css" "styles.css" >}}
{{< highlight css >}}

form p{ 
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #e1e1e1;
    line-height: 0.1em;
    margin: 16px 0 20px;
} 
form p span { background:#fff; padding:0 10px; }

{{< /highlight >}}

You can explore other ways to achieve this layout as a practice.

Next, let's finish off the webpage by adjusting the font-size of the footer as per the reference.

{{< file "css" "styles.css" >}}
{{< highlight css >}}

footer ul li {
    padding-right: 15px;
    padding-bottom: 5px;
    font-size: 12px;
}

footer p {
    font-size: 12px;
    margin-top: 10px;
}

{{< /highlight >}}

{{< figure src="/img/fb-login-page-complete.png" caption="The completed page" alt="facebook login page" class="tc">}}


{{< figure src="https://media.giphy.com/media/MSW8ZhWQqLBIs/giphy.gif" caption="You are slowly becoming a HTML CSS boss!" class="tc">}}

Here is the complete HTML and CSS code

{{< gist codecusp 30b380785ca083b53f414b7dd64a9a01 >}}

Now that you are familiar with the basics of HTML and CSS and created your 1st webpage, you are ready to rock the web! Simply enjoy the journey and you'll learn in the process. 
I'll be sharing other concepts related to web development in general in my future posts.

Keep rocking!

## Recommended Reading

[w3schools css guide](https://www.w3schools.com/css/default.asp)
[Introduction to css - Scrimba](https://scrimba.com/g/gintrotocss)