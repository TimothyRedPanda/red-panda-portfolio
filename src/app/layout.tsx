import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

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
			<body className="h-screen w-screen grid gap-0 overflow-hidden text-slate-900 bg-slate-100">
				<Navbar />
				<main className="overflow-x-hidden overflow-y-scroll">{children}</main>
			</body>
		</html>
	);
}
