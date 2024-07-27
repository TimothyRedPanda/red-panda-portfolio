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
                  "text-blue-400 transition-all ease-in-out"
                  : "text-blue-50 transition-all ease-in-out"
              } key={index}>
            {link.text}
        </Link>
    ));

    return (
        <nav id="header" className="flex
        flex-col
        gap-5
        p-2
        place-content-center
        bg-gray-700
        text-blue-50
        md:flex-row
        shadow-headerShadow
        ">
            {aTags}
        </nav>
    );
}