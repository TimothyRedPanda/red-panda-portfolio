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
		const key = index + 1;
		return (
			<Link
				key={key}
				href={link.href}
				className={
					pathName === link.href
						? "text-slate-900 hover:text-slate-500 underline transition-all ease-in-out"
						: "text-slate-300 hover:text-slate-900 transition-all ease-in-out"
				}
			>
				{link.text}
			</Link>
		);
	});

	return (
		<nav className="flex h-fit w-full font-bold flex-col gap-1 text-1xl justify-evenly md:flex-row items-center p-2 text-center place-content-center">
			<span
				className={
					!open
						? "hidden"
						: "flex w-full gap-2 flex-col md:flex-row justify-evenly"
				}
			>
				{aTags}
			</span>
			<button
				type="button"
				onClick={() => {
					setOpen(!open);
				}}
				className={
					open
						? "opacity-20 rounded-lg w-fit h-full justify-self-end text-base text-slate-950"
						: "opacity-75 underline"
				}
			>
				{!open ? "open" : "close"}
			</button>
		</nav>
	);
}
