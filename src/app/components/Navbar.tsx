"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
	const [open, setOpen] = useState(true);
	const pathName = usePathname();

	const hrefs = [
		{ href: "/", text: "Home" },
		{ href: "/about", text: "About" },
		{ href: "/contact", text: "Contact" },
		{ href: "/practice", text: "Code Fun" },
		{ href: "/redpandaui", text: "Red Panda UI" },
	];

	const hidden = !open;

	const aTags = hrefs.map((link, index) => {
		const key = index + 1;
		return (
			<Link
				key={key}
				href={link.href}
				className={`transition-all ease-in-out 
					${hidden ? "hidden" : ""} 
					${
						pathName === link.href
							? "text-slate-900 hover:text-slate-500 underline"
							: "text-slate-300 hover:text-slate-900"
					}`}
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
				className={`rounded-lg w-fit p-3 text-base text-slate-950 ${!open ? "opacity-75 underline p-3" : "opacity - 20"}`}
			>
				{!open ? "open" : "close"}
			</button>
		</nav>
	);
};
export default Navbar;
