"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const pathName = usePathname();

	const hrefs = [
		{ href: "/", text: "Home" },
		{ href: "/about", text: "About" },
		{ href: "/contact", text: "Contact" },
	];

	const aTags = hrefs.map((link, index) => {
		let hidden;
		!open ? hidden = "hidden" : "inline"
		const key = index + 1;
		return (
			<Link
				key={key}
				href={link.href}
				className={
					pathName === link.href
						? `text-slate-900 hover:text-slate-500 underline transition-all ease-in-out ${hidden}`
						: `text-slate-300 hover:text-slate-900 transition-all ease-in-out ${hidden}`}
			>
				{link.text}
			</Link>
		);
	});

	return (
		<nav className="flex flex-col md:flex-row justify-center items-center gap-5 p-3 font-bold">
				{aTags}
			<button
				type="button"
				onClick={() => {
					setOpen(!open);
				}}
				className={
					open
						? "opacity-20 rounded-lg w-fit p-3 text-base text-slate-950"
						: "opacity-75 underline p-3"
				}
			>
				{!open ? "open" : "close"}
			</button>
		</nav>
	);
}
