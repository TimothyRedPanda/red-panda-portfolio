'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

export default function Navbar() {
    const pathName = usePathname();
    const hrefs = [
        {href: '/', text: 'Home'},
        {href: '/about', text: 'About'},
        {href: '/contact', text: 'Contact'}
    ];

    const aTags = hrefs.map((link, index) => (
        <Link href={link.href}
              className={pathName === link.href ?
                  "text-blue-400 hover:text-blue-200 underline transition-all ease-in-out"
                  : "text-blue-50 hover:text-blue-200 transition-all ease-in-out"
              } key={index}>
            {link.text}
        </Link>
    ));

    return (
        <nav id="header" className="flex
        h-fit
        flex-col
        gap-5
        p-2
        text-center
        bg-gray-700
        text-blue-50
        md:flex-row
        place-content-center
        shadow-headerShadow
        ">
            {aTags}
        </nav>
    );
}