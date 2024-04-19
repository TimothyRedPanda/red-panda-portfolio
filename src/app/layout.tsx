import type { Metadata } from "next";
import "./globals.scss";
import RedPandaLogo from "@/components/red-panda-logo";
import CustomLink from "@/components/link/Link";
import React from "react";

export const metadata: Metadata = {
  title: "Red Panda Studio",
  description: "The Portfolio of Timothy Bridge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body>
      <nav className="main-nav">
        <RedPandaLogo className="red-panda-logo"/>
          <CustomLink href="/" text="Home"/>
          <CustomLink href="/typescript" text="typescript"/>
          <CustomLink href="/types" text="types"/>
      </nav>
          {children}
      </body>
      </html>
  );
}
