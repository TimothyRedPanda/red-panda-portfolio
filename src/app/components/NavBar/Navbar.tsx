"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Modal from "./Modal";
import { Button } from 'ui-redpanda';
import "ui-redpanda/dist/style.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const pathName = usePathname();

    const hrefs = [
        { href: "/", text: "Home" },
        { href: "/about", text: "About" },
        { href: "/contact", text: "Contact" },
        { href: "/practice", text: "Code Fun" },
        { href: "/glossary", text: "Glossary" },
        { href: "/redpandaui", text: "Red Panda UI" },
        { href: "/lotr", text: "Lord of the Rings" },
        { href: "/chat", text: "Panda Chat" },
    ];

    const aTags = hrefs.map((link, index) => {
        const key = index + 1;
        return (
            <Link
                key={key}
                href={link.href}
                className={`block transition-all ease-in-out mb-2 
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
        <nav className="flex justify-between items-center p-3 font-bold">
			<Button
				variant="outlined"
				size="small"
                onClick={() => setOpen(true)}
            >
                Open Menu
            </Button>
            <Modal isOpen={open} onClose={() => setOpen(false)}>
                <div className="w-full h-full flex flex-col items-center">
					<Button
						variant="outlined"
						size="small"
						onClick={() => setOpen(false)}
						className="self-end"
                    >
                        Close
                    </Button>
                    {aTags}
                </div>
            </Modal>
        </nav>
    );
};

export default Navbar;