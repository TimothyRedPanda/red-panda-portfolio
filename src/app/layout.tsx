import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
			<body className="h-screen grid overflow-hidden text-slate-900 bg-slate-100">
				<Navbar />
				<main className="h-full overflow-x-hidden overflow-y-scroll w-full">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
