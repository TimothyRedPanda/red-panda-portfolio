## Getting Started

```bash
git clone https://github.com/TimothyRedPanda/red-panda-portfolio
# then
cd red-panda-portfolio
# then
npm install
# or
yarn
# or
yarn install
# or
pnmp install
# or
bun install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see what the site is looking like currently.

## Tech Stack

* TypeScript
* Next.js
* React 18
* Husky (Pre-commits)
* Snyk (Code and package vulnerability scanning)

## So what is this project?

Welcome to Red Panda Studio's portfolio/learning platform.

This is a place for me (Timothy) to create a Next.js website
that I can be proud of and help other developers thrive.
I will continuously add tips, tricks, and a place to express
myself through my coding adventures.
Thank you for taking a look, and I hope you stick around and grow this page.
Feel
free to look at the codebase, fork it or whatever takes your fancy.
This is all about enjoying this developer's journey.
Thanks again,

Timothy (Red Panda Studios)

## Feel free to fork the project and have a play.

 `src/app/data` - Currently this is where I am keeping my data objects. I have questions/tips in here and my links for the contact section. The data for the questions is an array of objects in the following format (each field is required). If the array is empty the page will render `Coming Soon`. The questions logic is being handled in `src/app/components/QuestionsLogic`

 ``` typescript
 [
    {
     title: "let",
     description: "Any details on what a let is etc.",
     example: 'let name = "Timothy";' 
     output: 'If the example uses console.log() or something similar this will show the output'
    }
 ]
 // The example property will be rendered on the page as a code block using PrismJS, for example:
 ```
 ``` javascript
 let name = "Timothy";
 ```

 Everything should be labelled relatively straight forwardly, but feel free to ask if you have any questions. In `src/app/components/PrismLoader.tsx` is the logic for handling the syntax highlighting. If you were interested:
 ``` typescript
// This is declaring the page as client side - and is needed for useEffect.
"use client";

// Here I am bringing in useEffect from React and the PrismJS theme and language 
// support
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";

// Finally this is the logic for syntax highlighting with PrismJs.
export default function PrismLoader() {
	useEffect(() => {
		Prism.highlightAll();
	}, []);
	return <div className="hidden" />;
}
 ```

## Places to visit!

* Deployed version: [Red Panda Studio](https://www.red-panda.studio)

## About Me
Well, funnily enough my name is not actually `Red Panda` but they are my favourite animal.
I'm Timothy from Cheltenham, and after being a pet photographer for nine years, I wanted to take a running jump into new
challenges and therefore
found myself in the world of web and software development.
I completed the intensive bootcamp at School of Code and haven't looked back.
I am loving the journey and really found something that makes me incredibly happy to be a part of.
Let's do this thing!
Want to talk code
or just have a look
at what this little old developer is doing day to day then:

Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/timothybridgecode/) and send us a message.
Always up for making new connections.


