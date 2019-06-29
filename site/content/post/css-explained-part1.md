---
title: "Add life to HTML using CSS - Part 1. The basics"
description: HTML without CSS is like a human body without the flesh - just a skeleton. CSS is beautiful. It's powerful. It's easy as well. So let's dive in and make ourselves comfortable!
lastmod: 2019-06-20T20:20:36+05:30
date: 2019-06-20T20:20:36+05:30
author: Arindam Dawn
draft: false
image: /img/css3.svg
tags: ["css"]
---

This is part 1 of a 3 article series on CSS. If you are unfamiliar with HTML, I would highly recommend you to checkout my articles on HTML. I have written 3 articles on introduction to HTML where I also created the HTML of Facebook Login page from scratch!
Here are the links - 

[HTML explained with live example ]({{< ref "/post/html-explained-part1.md" >}})

## Introduction to CSS
> “Good design is like a refrigerator—when it works, no one notices, but when it doesn’t, it sure stinks.” –Irene Au

CSS stands for **Cascading Style Sheets**. In my article on HTML, I HTML is like the foundation of your home. A home made of bricks, steel and cement is still a home but that's un-attractive and lifeless. How do you add life to your home - by painting the walls and decorating the interiors. It takes the look and feel of your home to a whole new level! In the same way, to add life to a HTML only webpage, we add CSS. In technical words,we apply styles to the page.

As promised earlier, we will complete designing the facebook login page that we built using HTML previously. In this way you will be learn the commonly used CSS syntax while building a professional looking webpage! That way it will be more fun I beleive.

## The title says 'Modern CSS' - Does that mean primitive CSS is unworthy?
Absolutely not! By modern CSS I meant the ability to design webpages quicker with some CSS superpowers that have been introduced lately. It's always useful to study CSS in deep and know various approaches in doing a task. Most of the basic tutorials on CSS take a deep dive into the concepts of CSS but it takes quite some time and practice to make professional looking webpages. When I first learnt web development, it took me few months to adapt myself with the CSS syntax and then learn some CSS frameworks like [Bootstrap](https://getbootstrap.com/) to design something good-looking. If you are starting to learn web design and development, now is a great time as by knowing just few modern concepts you can start building amazing websites. You would eventually learn the other stuffs with practice. 

## Let's understand some basics

* The most basic way to apply styles to a HTML page is by using the `style` HTML tag.
  We need to use this styles tag withing the `<head></head>` of the HTML like this

{{< file "html" "index.html">}}
{{< highlight "html" >}}
<!DOCTYPE html>
    <head>
        <style>
            <!-- All CSS styles will appear here -->
        </style>
    </head>
    <body>
    </body>
</html>
{{< /highlight >}}

Note how I have added the  `<style>` tag inside the `<head>` tag.

* The most common way to add styles to a webpage is by writing all the CSS styles in  separate file(s) and then link that file to the html page using a special HTML tag `<link>` in this way
  
{{< file "html" "index.html">}}
{{< highlight "html">}}
  <!DOCTYPE html>
    <head>
       <link href="styles.css" rel="stylesheet">
    </head>
    <body>
    </body>
</html>
{{< /highlight >}}

The `href` attribute tells the HTML where the CSS file (styles.css) is. A better way to organise files is to keep all CSS files in a CSS folder. You can give any name to the folder though. Keep the names simple and self explanatory. In that case the **href** value would be `css/styles.css`.

The `rel` attribute just tells the HTML that the file we are linking is a styles file. 

Now that you know how to add styles to a HTML file, let's practice writing some CSS and then in the next part of this post, we will continue styling the Facebook Login page we created using HTML.

## Let's write some CSS

* First we will try to give our webpage a background color. This is how we do it.
  
{{< file "css" "styles.css" >}}
{{< highlight "css" >}}
    body { background-color: blue; }
{{< /highlight >}}

We are styling the `<body>` tag of HTML. In CSS this is called the **selector**. Using a selector, we can style the content within these HTML tags. We applied a **background-color** property and gave it a value of **blue**. We can also provide hex, rgb values of color here. Since the entire content of the webpage lies within the `body` tag, the entire background of the website become blue. Try it yourself and see the colors change in the browser!

The property and value combined together is called a **css declaration**. We can provide multiple css declarations to a css selector like this.

{{< file "css" "styles.css" >}}
{{< highlight "css" >}}
    body { 
        background-color: blue;
        font-size: 18px;
        color: #000000; 
        }
{{< /highlight >}}

The **font-size** property will make all the fonts in the webpage to 18px and the **color** to black (as per the hex code). 
Most of the CSS properties are self-explanatory and with some practice you will get hold of them easily.

In the same way we can add styles to any HTML selector like `p`, `a`, `main`, `header`, `h1`, `h2`, `h3` etc. Try experimenting with them. When we start styling our webpage, you will get more familiar.

## CSS class selector

{{< file "html" "index.html" >}}
{{< highlight "html" >}}
<!DOCTYPE html>
<head>
<link rel="stylesheet" href="css/styles.css">
</head>

<body>
<p>This is paragraph 1</p>
<p>This is paragraph 2</p>
</body>
</html>
{{< /highlight >}}

So we have created two paragraphs in our HTML. Now say we want to make the paragraphs red in color. We can do that like this.

{{< file "css" "styles.css" >}}
{{< highlight "css" >}}
    p { 
        color: red; 
    }
{{< /highlight >}}

This wil make both the paragraphs red in color. However if we want to make only the first paragraph red or maybe the second paragraph red. How do we acheive that? There are multiple ways to do it but the easy way to do it is using **CSS class selector.**

Say we want to make the 1st paragrapgh red.

So we will add a **class** attribute to that paragraph like this

{{< file "html" "index.html" >}}
{{< highlight "html" >}}
<p class="red">This is paragraph 1</p>
<p>This is paragraph 2</p>
{{< /highlight >}}

Here we have created a class `red`. We can name it anything. A simple easy to understand name is a good practice to use. Now we will add the style to this name class selector like this.

{{< file "css" "styles.css" >}}
{{< highlight "css" >}}
    .red { 
        color: red; 
    }
{{< /highlight >}}

To add styles to a custom css selector, we need to add a period(.) before the selector name. Only while styling default HTML selectors, we can use the selector name directly.

Now we have created a CSS class selector called **red**. Now we can simply add this class to any HTML element and the styles will be applied automatically! So if we want to make the second paragraph red then we add the red class to the second paragraph like this


{{< file "html" "index.html" >}}
{{< highlight "html" >}}
<p>This is paragraph 1</p>
<p class="red">This is paragraph 2</p>
{{< /highlight >}}

See it's so simple! If we add the class to both the paragraph tags, both of them will become red. 

You have now learnt the basics of CSS. I would recommend you to play around with these and see if you can create some simple css selectors yourselves.

{{< figure src="https://media.giphy.com/media/xZqycRHIQkKNa/giphy-downsized.gif" caption="happy experimenting with CSS" alt="CSS gif image" class="tc">}}

## Recommended read

Now that you have known the CSS basics, I would highly recommend you to go through these easy to understand CSS lessons that will give your more superpowers. These are my favorites! Do check them out.

[CSS Lessons by W3 Schools](https://www.w3schools.com/css/default.asp)

[Introduction to CSS by Scrimba](https://scrimba.com/g/gintrotocss)