---
title: "Become a HTML5 rockstar! - 3. Adding the content!"
description: Master HTML in a day without any prior knowledge. This is the final part of a 3 article post series.
lastmod: 2019-06-15T15:32:17+05:30
date: 2019-06-15T15:32:17+05:30
author: Arindam Dawn
draft: false
image: /img/html-5.svg
tags: ["html"]
---

This is the final part of the HTML basics series. We will add content to the HTML structure we built earlier.

If you haven't checked the 1st part of this post, I would highly encourage you to click on the link below and read that first.

[Read the first part of this post]({{< ref "/post/html-explained-part1.md" >}})

[Read the second part of this post]({{< ref "/post/html-explained-part2.md" >}})

{{< figure src="/img/facebook-login.png" caption="The webpage we will be creating" alt="facebook login page" class="tc">}}.

## Let's get the header ready

What do we see in the header of the page? A facebook logo and a rectangular box (which we call **Button** in HTML). The button says 'Create a new account'. So let's code!

There are few ways in which we can add an image to our webpage.

- By linking it to an image file we have in our project.
- By linking it to an external URL that contains the image. Such as a google image.

We will use the 1st option in this case. For images we use the **`<img>`** tag in HTML. Now this is a special tag and we don't need to close it. First we will create a **img** folder and store the facebook logo image in that folder. 

{{< file "html" "index.html" >}}
{{< highlight html >}}
<header>
    <img 
        src="img/logo-white.png" 
        width="100" 
        alt="Facebook Logo">
</header>
{{< /highlight >}}

The **src** is a property or attribute of the **img** tag that contains the path to the image file. You can read more about the img tag and its properties [here](https://www.w3schools.com/tags/tag_img.asp). 

The **width** property limits the width of the image to the specified value in pixels. We will later see how we can manage that using css as well. The **alt** tag contains information about the image which shows incase the image is unable to load.

Now we will add the Create an account button using the **```<button></button>```tag.

{{< file "html" "index.html" >}}
{{< highlight html >}}
<header>
    <img 
        src="img/logo-white.png" 
        width="100" 
        alt="Facebook Logo">

    <button>Create an Account</button>
</header>
{{< /highlight >}}


We are done with the header block now. Don't worry about the look and feel. We will improve later. 

## Let's build the main block now.

THe main block has a login form. We will use the HTML **```<form></form>```** tag to create a form. As we can see the login form has the following elements:

- Title of the form
- Input field to enter email or phone number
- Password input field
- Login Button
- Forgotten account link
- a text 
- Create Account button

This is how we create it in html

{{< file "html" "index.html" >}}
{{< highlight html >}}
<main>
    <section>
        <h1>Login to Facebook</h1>
        <form>
            <input 
            type="text" 
            placeholder="Email address or phone number">
            <input 
            type="password" 
            placeholder="Password">
            <button 
            type="submit">Login</button>
            <a href="#">Forgotten Account?</a>
        <hr>
        <span>or</span>
        <hr>
        </form>
        <button>Create an Account</button>
    </section>
</main>
{{< /highlight >}}


Let's try to understand the code above.

The **`<h1>`** tag inside the **`<section>`** tag contains the title of the form. In HTML, we can create titles or headings in a page using various heading tags. There are 6 types of heading tags h1,h2,h3,h4,h5,h6 with h1 being the biggest and h6 the smallest. 

> It is a good practice to use only 1 **`<h1>`** tag in a single page.

Inside the **`<form>`** tag we have used **`<input>`** tags. These are used to create input fields where a user can type in some values. There are different types of input fields such as text, email, number, phone etc. You can read more about them [here](https://www.w3schools.com/tags/tag_input.asp).

The **placeholder** attribute or property is used to show a placeholder (kind of hint to the user) in the fields.

Then we have a button element with a type property **submit**. This means we tells the form to submit the values we have entered in the form. 

Next we have added a new tag. The **`<a>`** tag. This is one the most powerful tags of HTML. This tag gives us the ability to create clickable links to different pages within the website or anywhere in the internet. This is one of the primary reason behind the creation of HTML. It enables us to easily navigate to anywhere we want to go!

In our project, clicking on the link will not navigate us anywhere as we don't have a forgot password page as of now. So we have given it a false value  **#** to stay in the same page. You can learn more about the **`<a>`** tag [here](https://www.w3schools.com/tags/tag_a.asp)

We have used a **`<p>`** tag which is known as the paragraph tag to store the 'or' text. 
The paragraph tag is used for paragraphs 

Then we have the same 'Create an Account' Button that we used earlier in the **`<header></header>`**

> Note how easy HTML tags are. The names of the tags are self-explanatory. Just a little bit of research and practice with them and you will master them with ease.


## Now let's complete our HTML by adding the footer content

If you carefully look at the reference image, you will see the footer in the Facebook login page contains links to different Languages and some tags. So let's divide them into two sections separated by a **`<hr>`** or horizontal rule tag. It adds a dividing line. 
The two sections are comprised of list of texts placed horizontally. Let's create them.

{{< file "html" "index.html" >}}
{{< highlight html >}}
<footer>
    <ul>
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
    <hr>
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
    <p>Facebook © 2019</p>
</footer>
{{< /highlight >}}

There are two ways to create lists in HTML

- Using **`<ul></ul>`** tags. This creates a list of unordered items. The items are kept within **`<li></li>`** tags.
- Using **`<ol></ol>`** tags. This creates a list of ordered items.

Learn more about lists [here](https://www.w3schools.com/html/html_lists.asp)

At the end we have used a **`<p></p>`** tag to display the copyright text.

And with that you have successfully created the HTML layout of a popular website that we use almost everyday. 

<img src="https://media.giphy.com/media/MP9NinBGGGiVq/giphy-downsized.gif" class="w-100">

## But the site looks quite ugly!!!

Well we haven't discussed anything about styling a webpage yet. We will do that next using **CSS**. Meanwhile I would request you to check out random websites and try to structure them into small blocks like we did. Let me know your questions/suggestions in the comments section below.


## Suggested Reading

I would higly recommend checking these links regarding HTML to get a deeper understanding.
These are very well curated and very easy to understand
[Introduction to HTML](https://scrimba.com/g/ghtml)

[HTML5 Tutorial](https://www.w3schools.com/html/default.asp)
