"use client";
import { Button, Label, Switch, Input } from "ui-redpanda";
import "ui-redpanda/dist/style.css";
import PrismLoader from "../PrismLoader/PrismLoader";
import Link from "next/link";

const code = `npm i ui-redpanda@latest 
import { /* UI component name here */ } from "ui-redpanda"
import "ui-redpanda/dist/style.css"
// Examples of button variants:
<Button>Default</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="contained">Contained</Button>
<Button variant="disabled">Disabled</Button>
// Examples of label and switch variants as well as use of the optional className prop:
<Label className="justify-self-end" size="large" label="Live switch:"/> 
<Switch className="justify-self-start" variant="live"/>
<Label className="justify-self-end" size="large" label="Disabled switch:"/>
<Switch className="justify-self-start" variant="disabled"/>
// Examples of input types:
<Input className="sm:justify-self-center" type="text" sanitized />
<Input className="sm:justify-self-center" type="radio" />
<Input className="sm:justify-self-center" type="checkbox" />`;

const ExampleUI = () => {
	return (
		<main className="w-dvw h-dvh gap-2 flex flex-col items-center mt-10">
			<Link href="https://www.npmjs.com/package/ui-redpanda" target="_blank">
				<h1 className="text-2xl underline text-slate-500 hover:text-slate-800">
					Red Panda UI
				</h1>
			</Link>
			<section className="flex flex-col border-slate-300 p-4 shadow-questionShadow w-3/4 rounded-md wrapper">
				<section className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center justify-items-center w-full h-fit p-4">
					<Button>Default</Button>
					<Button variant="outlined">Outlined</Button>
					<Button variant="contained">Contained</Button>
					<Button variant="disabled">Disabled</Button>
				</section>
				<section className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center justify-items-center w-full h-fit p-4">
					<Label
						className="sm:justify-self-end"
						size="large"
						label="Live switch:"
					/>
					<Switch className="sm:justify-self-start " variant="live" />
					<Label
						className="sm:justify-self-end"
						size="large"
						label="Disabled switch:"
					/>
					<Switch className="sm:justify-self-start " variant="disabled" />
				</section>
				<section className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center justify-items-center w-full h-fit p-4">
					<Input className="sm:justify-self-center" type="text" sanitized />
					<Input className="sm:justify-self-center" type="radio" />
					<Input className="sm:justify-self-center" type="checkbox" />
				</section>
				<span className="divide-wrap self-center w-full m-8 relative h-[1.5px]">
					<span className="divider opacity-0 absolute w-px h-full" />
				</span>
				<pre className="w-full">
					<code className="language-jsx">{code}</code>
				</pre>
			</section>
			<PrismLoader />
		</main>
	);
};

export default ExampleUI;
