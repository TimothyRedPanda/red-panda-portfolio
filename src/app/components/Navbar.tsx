"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
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
		<nav className="flex h-fit w-full font-bold flex-row gap-5 justify-evenly items-center p-4 text-center place-content-center">
			{aTags}
		</nav>
	);
}
