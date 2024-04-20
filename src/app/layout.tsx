import type {Metadata} from "next";
import Link from "next/link";
import "./globals.css";
import RedPandaLogo from "./components/RedPandaLogo/RedPandaLogo";
import React from "react";

export const metadata: Metadata = {
    title: "Red Panda Studio",
    description: "The Portfolio and musings of Timothy Bridge",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <nav className="navBar"><Link href="/"><RedPandaLogo/></Link></nav>
        {children}
        </body>
        </html>
    );
}
