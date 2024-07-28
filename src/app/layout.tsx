import type {Metadata} from "next";
import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.scss";

export const metadata: Metadata = {
    title: "Let's learn React!",
    description: "Helping fellow learners of React.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <main className="wrapper">
            <Navbar/>
            {children}
            <Footer/>
        </main>
        </body>
        </html>
    );
}
