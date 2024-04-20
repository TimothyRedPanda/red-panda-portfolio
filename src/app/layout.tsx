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
					<Link href="/">
						<RedPandaLogo />
					</Link>
					<Link className="link" href="/">
						Home
					</Link>
				</nav>
				{children}
				<footer className="footer" />
			</body>
		</html>
	);
}
