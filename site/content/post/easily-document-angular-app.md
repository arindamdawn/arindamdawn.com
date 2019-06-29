---
title: Document your Angular app instantly - Your team will love it
date: 2019-06-17T18:58:41.000Z
description: >-
  When working in a big project involving multiple developers, good
  documentation plays a key role. Let's learn how we can rapidly document an
  Angular app.
tags: ["angular"]
---

> “Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler

Imagine joining a team building a decently large and sophisticated Angular app. The team is great and have worked hard for months  to build it. You feel proud to be a part of the team and your inner geekiness makes you dive into the existing codebase and start contributing and show your programming prowess! edHowever you come to know that there is no document being maintained. You are fine with that. You have already built lots of personal angular projects and never need any documentation.
However you come to know that there is no document being maintained. You are fine with that. You have already built lots of personal angular projects and never need any documentation.

Then after spending some time (quite a few hours) gazing the screen you wonder 
"What is happening? It will take me months to understand the worflow. What is the purpose of this variable? What is the role of that function?"

> “Indeed, the ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code. ...Therefore, making it easy to read makes it easier to write.” 
> 
> ― Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship


This kind of reaction is common. Unless your organization is a giant corporate or a popular startup, you would rarely find a centralised documentation being prepared and maintained. The reason being - It's difficult to setup and maintain documents and often its **boring!**.

Even I had the tendency to skip the documentation process and dive straight into the code editor. Recently I came across a great library that left me amazed! It is called [Compodoc](https://compodoc.app/). 

Using **Compodoc**, I was able to generate a documentation for my angular app in few seconds! 
And it's more powerful that you can imagine. I will show you the process of creating documentation for an angular documentation on the fly. The document will also help any developer understand the app architecture and the role of each modules easily.

## Steps

* We will create a new Angular App using the Angular-Cli. Refer (here)[https://angular.io/guide/setup-local] in case you want reference in setting up an Angular project.

* Install compodoc package from npm - 
  
{{< file "terminal" "command line" >}}
{{< highlight terminal >}}

npm install -g @compodoc/compodoc

{{< /highlight >}}

* Define a task in your package.json file like this

{{< file "json" "package.json">}}
{{< highlight json >}}
"scripts": {
  "compodoc": ""compodoc": "npx compodoc -p src/tsconfig.app.json -s -o""
}
{{< /highlight >}}

* Now run the following command
  
{{< file "terminal" "command line" >}}
{{< highlight "terminal">}}
npm run compodoc
{{< /highlight >}}

That's it!

This is automatically generate the documentation and start a local server on port 8080. 

This how the documentation overview looks like

{{< figure src="/img/compodoc-overview.png" caption="Compodoc Overview" alt="compodoc overview image" class="tc">}}

It shows a map of your entire app with very useful information. 

## How to document individual files?

If you want to add comments to your code, use this JSDoc format so that compodoc can read them and present them in the documentation for that file.

{{< highlight "html">}}
/**
 * Supported comment
 */
{{< /highlight >}}

You can add comments to your functions like this

{{< file "typescript" "example.service.ts" >}}
{{< highlight "typescript" >}}
/**
 * @param {string} target  The target to process
 * @returns The processed target number
 */
function processTarget(target:string):number;
{{< /highlight >}}

<!--adsense-->

Compodoc will format and document it. This is extremely helpful when someone else does a code review or even you needed to refer to any particular file after months. Just a quick glace at the document will help you understand the functionality!

A `Documentation` folder is created in the root directory of your project when you run the compodoc document. This is where you app documentation lies. You can even host this in a server so that you can share it with anyone in your team.

{{< figure src="https://media.giphy.com/media/3rgXBrLlRs4ZlpnVDO/giphy-downsized.gif" caption="You and your team rock!" alt="team gif image" class="tc" >}}

## Recommended Read

I would highly encourage you to read more about compodoc and checkout a live angular app demo with compodoc integrated to understand it better.

* [Compodoc Website](https://compodoc.app)
* [Sample Angular App using compodoc](https://github.com/compodoc/compodoc-demo-todomvc-angular)
* [Live Demo](https://compodoc.github.io/compodoc-demo-todomvc-angular/) 

If you have any queries/suggestions, post in the comments below! I shall be happy to help and learn from you 😊

