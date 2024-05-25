import type { Metadata } from "next";
import Link from "next/link";
import RedPandaLogo from "./components/RedPandaLogo/RedPandaLogo";
import "./globals.scss";

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
				<nav className="navBar">
					<div className="logo">
						<RedPandaLogo />
					</div>
					<Link className="link" href="/python/">
						Python
					</Link>
					<Link className="link" href="/typescript/">
						Typescript
					</Link>
					<Link className="link" href="/pandared/">
						Panda Red UI
					</Link>
				</nav>
				{children}
				<footer className="footer" />
			</body>
		</html>
	);
}
