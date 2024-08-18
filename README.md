# Red Panda Studio - Portfolio & Learning Platform

Welcome to **Red Panda Studio**! This is my personal portfolio and learning platform where I (Timothy) share my journey as a web developer. I'm excited to build, learn, and help other developers thrive through this Next.js project. 

## 🚀 Favourite Recent Updates

- **Working Practice Code Editor**: Fully functional with a console for output. Experiment with code directly on the site!
- **JavaScript Tips Database**: All JavaScript tips are now stored in their own dedicated Supabase database for easy access and management.

## 🛠 Getting Started

Curious to see what I've been working on? Visit [Red Panda Studio](https://red-panda.studio) in your browser to explore the latest version of the site.

## 🧑‍💻 Tech Stack

The project is built with the following technologies:

- **TypeScript**: For type safety and enhanced developer experience.
- **Next.js**: The React framework for production-grade applications.
- **React 18**: Leveraging the latest features in React.
- **Husky**: To ensure pre-commit checks and maintain code quality.
- **Snyk**: For scanning code and dependencies for vulnerabilities.

## 💡 What is this Project?

**Red Panda Studio** is more than just a portfolio—it's my playground for experimenting with new ideas, sharing tips and tricks, and documenting my coding adventures. My aim is to create a Next.js site that I can be proud of while helping other developers grow along the way.

Thank you for visiting! I hope you enjoy exploring the site, and I welcome you to dive into the codebase. This project is all about embracing and enjoying the developer journey.

## 🎉 Favourite Features So Far

One of the features I'm most proud of is the **Code Editor** on the [Code Fun](https://www.red-panda.studio/practice) page. It combines the `Monaco React Editor` with the `Piston API` for code parsing, allowing users to write and execute code directly on the site. I’m using `isomorphic-fetch` for handling API post requests to `Piston`. 

Here's a snippet of how the code execution works:

```typescript
import fetch from "isomorphic-fetch";

export interface ExecutionResult {
	run: {
		output: string;
		stderr?: string;
	};
}

const API_URL = "https://emkc.org/api/v2/piston";

const isValidUrl = (urlString: string): boolean => {
	const urlPattern = new RegExp(
		"^((https?:\\/\\/)?|(\\d{1,3}\\.){3}\\d{1,3})" + 
		"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|(\\d{1,3}\\.){3}\\d{1,3})" + 
		"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + 
		"(\\?[;&a-z\\d%_.~+=-]*)?" + 
		"(\\#[-a-z\\d_]*)?$",
		"i"
	);
	return !!urlString.match(urlPattern);
};

const executeCode = async (sourceCode: string): Promise<ExecutionResult> => {
	const endpoint = "/execute";
	if (!isValidUrl(API_URL + endpoint)) {
		throw new Error("Invalid URL");
	}

	const url = API_URL + endpoint;
	const body = {
		language: "js",
		version: "18.15.0",
		files: [
			{
				content: sourceCode,
			},
		],
	};

	const response = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
	});

	if (!response.ok) {
		throw new Error(`API request failed with status ${response.status}`);
	}

	const data = await response.json();
	return data as ExecutionResult;
};

export default executeCode;
```

## Error Handling and Additional Logic

For error handling and additional logic, you can explore these parts of the codebase:

- **Code Editor Logic**: [`src/app/components/CodeEditor/*`](src/app/components/CodeEditor/)
- **Console Output Logic**: [`src/app/components/Output/Output.tsx`](src/app/components/Output/Output.tsx)

The codebase is well-organized and labeled, but if you have any questions, feel free to reach out.

If you're interested in syntax highlighting, check out the logic in [`src/app/components/PrismLoader/PrismLoader.tsx`](src/app/components/PrismLoader/PrismLoader.tsx):

```typescript
"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";

export default function PrismLoader() {
	useEffect(() => {
		Prism.highlightAll();
	}, []);
	return <div className="hidden" />;
}
```

## 🌐 Places to Visit!

- **Deployed Version**: [Red Panda Studio](https://www.red-panda.studio) - Check out the live site!

## 👋 About Me

Hi there! I'm Timothy from Cheltenham. While my name isn't actually `Red Panda`, they're my favorite animal. After nine years as a pet photographer, I decided to leap into the world of web and software development. I completed an intensive bootcamp at the School of Code and haven't looked back since.

I love the coding journey I'm on, and I'm passionate about growing as a developer. If you’d like to chat about code or see what I’m up to, feel free to connect with me.

- **Connect with me on [LinkedIn](https://www.linkedin.com/in/timothybridgecode/)** - I’m always open to making new connections!
