---
title: "Become a HTML5 rockstar! - 2 - The structure"
description: Master HTML in a day without any prior knowledge. This is the 2nd part of a 3 article post series.
lastmod: 2019-06-14T10:38:03+05:30
date: 2019-06-14T10:48:27+05:30
author: Arindam Dawn
draft: false
image: /img/html-5.svg
tags: ["html"]
---
Welcome to the 2nd part of the HTML basics series. Now it's time to understand the building blocks of your home and their roles.

If you haven't checked the 1st part of this post, I would highly encourage you to click on the link below and read that first.

[Read the first part of this post]({{< ref "/post/html-explained-part1.md" >}})

## Can I create a website without HTML?

Well yes! But it would be like a human without the skeleton! There will be no colors, no funky animations. Just plain text! And you would definitely hate it.

## What does HTML stand for?

HTML stands for Hyper Text Markup Language. Now this may sound creepy. To make it simple, HTML consists of several lego blocks. Each of the lego block is named **Markup/Tag**. These blocks when combined together form the HTML or the skeleton of the website.

## Why should I learn HTML?

- It's very very simple.
- If you want to build websites, then HTML is your best friend. The better you know him, the better your website will be.
- **HTML powers the internet**. So a good grasp of it will come very handy later.

##What are the things needed to get started with HTML?

- Download any good code editor. I personally use [VsCode](https://code.visualstudio.com) and would recommend that. It's simple and free! You can use any code editor of your choice or even start with notepad as well!
- A browser to test your website. I personally use [Chrome](https://www.google.com/chrome/). It's the most popular browser today. 
- If you wan't to play around but don't have a computer or code editor right now, you can start writing HTML here itself. At the end of this post, you can test whatever you have learnt. No code editor required.

**Let's get into action now**

Okay. Enough said about HTML. Let's build something real instead of an imaginary home!
As promised no **Hello World** examples.

Together we will build a page of a very popular website we almost use daily. You guessed that right. It's Facebook!

{{< figure src="/img/facebook-login.png" caption="This is what we will create" alt="facebook login page" class="tc">}}.

Let's go...

We will divide the facebook login page into several blocks. Something like this below

{{< figure src="/img/facebook-login-sectioned.png" caption="The login page divided into sections" alt="sectioned-login-page" class="tc">}}

As you can see the login page has been divided into sections. It is very similar to how are homes are divided into sections such as kitchen, balcony, dining hall, bathroom etc. Every home more or less has these sections. Similarly every website can be divided into these sections.

We shall understand the role of each section

- **Header** block is where things like logo, navigation links are kept. In HTML, we start any block using an opening tag written like <> and end a block with a closing tag written like </>. So the opening and closing header tags look like `<header></header>`

- **Main** block is where the main content of the website lives. We will keep all the main content within `<main></main>` tags.

- **Login** is a optional block to keep the login form. You can also keep the login form in the main block directly without creating a login section block. It is a good practice to create sub-sections to keep things organized and also help search engines understand our website better (Will explain this on a future lesson). As of now think that you can create only one room in your home but it's more convenient if you have a separate study room and keep all your study materials there. Hope that helps! To create any sub-section block, will be using the `<section></section>` tags.

- **Footer** block is where you keep information like contact information, copyright and legal information, links to your website pages, social media links etc. You will again find this block in most of the websites. We wil keep all the footer information within `<footer></footer>` tags.

Now that you have understood the basic blocks of the webpage, let's write HTML!

We will create a file and name it **index.html** (You can name it anything like home.html as well). Generally the homepage is named as index.html as convention. The .html file extension means it is an html file. You can play around with the HTML code yourself at the end of this post. We will start by writing the base code for HTML (It's the same always for all websites!)

{{< file "html" "index.html" >}}
{{< highlight html >}}
<!DOCTYPE html>
<head></head>
<body>
    
</body>    
</html>

{{< /highlight >}}


**Explanation**

Every html begins with an html and ends with an html tag. That's simple! (Note the '/' in a closing tag)

> The !DOCTYPE is added in the opening html tag to tell the browser that we are using the latest version of HTML i.e HTML5! That's it.

The **`<head></head>`** tags as I mentioned in my previous post, is like the brain of HTML. It communicates with the browser and conveys important information such as which files are linked to the html file. Will dicuss on that later. As of now just know that it has a **`<title></title>`** tag which contains the name of the page that shows in the browser tab.


Now let's create the blocks we discussed earlier and in the next part of this article we shall complete the entire HTML structure of the page.


{{< file "html" "index.html" >}}
{{< highlight html >}}

<!DOCTYPE html>
<head>
    <title>Facebook Login</title>
</head>
<body>
    <header></header>
    <main>
        <section></section>
    </main>
    <footer></footer>
</body>
</html>

{{< /highlight >}}

We have now gathered all the lego blocks and arranged them in a proper order. Let me explain the structure to you.

- The **`<title></title>`** tag is always kept inside the **`<head></head>`** tags.
- All the website content that we see lives inside the **`<body></body>`** tags.
- We have create blocks that we earlier discussed and placed in the way we saw in the image.
- The **`<header></header>`** block stays at the top and we will fill it with the logo and navigation content. There is always a single header block in a webpage.
- The **`<main></main>`** block will contain the main content of the website. There is again only one main block in a webpage.
- The **`<section></section>`** block will contain the Login form. There can be multiple section blocks in a webpage based on the type of information it contains. We wil be having only one for this project.
- The **`<footer></footer>`** block wil contain the footer information. In the facebook login page we can see the list of languages are placed in the footer. Again there is only one footer block in a webpage.

<img src="https://media.giphy.com/media/ZrlYxeVZ0zqkU/giphy-downsized.gif">

Kudos! you have now understood how we breakdown a webpage and structure it into html blocks. We shall get the entire HTML structure with the content ready in the next article.

[Click here to go to the next part.]({{< ref "/post/html-explained-part3.md" >}})


