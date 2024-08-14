"use client";
import { Button } from "ui-redpanda";
import "ui-redpanda/dist/style.css";
import PrismLoader from "../PrismLoader/PrismLoader";
import Link from "next/link";

const buttonCode = `<Button>Default</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="contained">Contained</Button>
<Button variant="disabled">Disabled</Button>`;

const importCode = `npm i ui-redpanda 
import { UI element name here. } from "ui-redpanda"
import "ui-redpanda/dist/style.css"`;

const ExampleUI = () => {
	return (
		<main className="w-dvw h-dvh gap-2 flex flex-col items-center mt-10">
			<Link href="https://www.npmjs.com/package/ui-redpanda" target="_blank">
				<h1 className="text-2xl underline text-slate-500 hover:text-slate-800">
					Red Panda UI
				</h1>
			</Link>
			<pre>
				<code className="language-bash">{importCode}</code>
			</pre>
			<section className="flex items-center gap-1 flex-col border-4 border-slate-300 p-4 shadow-questionShadow w-3/4 rounded-md wrapper">
				<section className="flex flex-col md:justify-around md:w-full md:flex-row gap-3">
					<Button>Default</Button>
					<Button variant="outlined">Outlined</Button>
					<Button variant="contained">Contained</Button>
					<Button variant="disabled">Disabled</Button>
				</section>
				<span className="divide-wrap self-center w-full m-8 relative h-[1.5px]">
					<span className="divider opacity-0 absolute w-px h-full" />
				</span>
				<pre className="w-full">
					<code className="language-jsx">{buttonCode}</code>
				</pre>
			</section>
			<PrismLoader />
		</main>
	);
};

export default ExampleUI;
