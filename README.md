## Favourite recent updates

* Working practice code editor with console to output to.
* JavaScript Tips now in their own Supabase database.

## Getting Started

Open [Red Panda Studio](https://red-panda.studio) in your browser to see what the site is looking like currently.

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
I will continuously be adding tips and tricks and this is a place to express
myself through my coding adventures.
Thank you for taking a look, and I hope you stick around as I grow this page.
Feel
free to poke around in the codebase.
This is all about enjoying the developer journey.
Thanks again,

Timothy (Red Panda Studios)

## Favourite Features so far
I am so proud of having implemented a working code editor into the [Code Fun](https://www.red-panda.studio/practice) page of the project. Combining `Monoco React Editor` and `Piston API` for code parsing. I am also using `Axios` to handle my API post requests to `Piston`. Feel free to play around with it and have fun.

``` typescript
import axios from "axios";

const API = axios.create({
	baseURL: "https://emkc.org/api/v2/piston",
});

async function executeCode(sourceCode) {
	const response = await API.post("/execute", {
		language: "js",
		version: "18.15.0",
		files: [
			{
				content: sourceCode,
			},
		],
	});
	return response.data;
}

export default executeCode;


```
To have a look at the error handling and such like please see this locations in the repo -

* `src/app/components/CodeEditor` For the code editor itself logic.
* `src/app/components/Output` For the the console output logic.


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


