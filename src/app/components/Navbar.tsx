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
		<nav
			id="header"
			className="flex h-fit w-full flex-col gap-5 justify-evenly p-2 text-center bg-slate-100 md:flex-row place-content-center shadow-headerShadow"
		>
			{aTags}
		</nav>
	);
}
