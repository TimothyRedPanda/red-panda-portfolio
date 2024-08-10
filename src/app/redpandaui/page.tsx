"use client";
import { Button } from "ui-redpanda";
import "ui-redpanda/dist/style.css";
import PrismLoader from "../components/PrismLoader";
import Link from "next/link";
import { useState } from "react";

const buttonCode = `// Examples of how these Buttons are being used on this very page.
//onClick and className are optional props.

import { Button } from "ui-redpanda";
import "ui-redpanda/dist/style.css";

const ExampleUI = () => {	

return (
<main className="w-dvw h-dvh flex flex-col items-center mt-10">
	<section className="flex items-center flex-col md:flex-row gap-1 border-4 p-5 shadow-questionShadow">
		<h1>Example Buttons:</h1>
		<Button>Default</Button>
		<Button className="outlined">Outlined</Button>
		<Button className="contained">Contained</Button>
		<Button className="disabled">Disabled</Button>
		<Button onClick={() => setClicked(clicked + 1)}>
			Clicked: {clicked}
		</Button>
	</section>
</main>
);		
};`;

const ExampleUI = () => {
	const [clicked, setClicked] = useState(0);
	return (
		<main className="w-dvw h-dvh gap-4 flex flex-col items-center mt-10">
			<pre>
				<code className="language-bash">npm i ui-redpanda</code>
			</pre>
			<Link href="https://www.npmjs.com/package/ui-redpanda" target="_blank">
				<h1 className="text-2xl underline text-slate-500 hover:text-slate-800">
					Red Panda UI
				</h1>
			</Link>
			<section className="flex items-center flex-col md:flex-row gap-4 border-4 p-5 shadow-questionShadow w-3/4">
				<h1>Example Buttons:</h1>
				<Button>Default</Button>
				<Button className="outlined">Outlined</Button>
				<Button className="contained">Contained</Button>
				<Button className="disabled">Disabled</Button>
				<Button onClick={() => setClicked(clicked + 1)}>
					Clicked: {clicked}
				</Button>
			</section>
			<br />
			<pre className="w-3/4">
				<code className="language-jsx">{buttonCode}</code>
			</pre>
			<PrismLoader />
		</main>
	);
};

export default ExampleUI;
