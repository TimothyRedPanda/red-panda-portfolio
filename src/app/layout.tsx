import type { Metadata } from "next";
import Navbar from "./components/NavBar/Navbar";
import "./globals.css";
import FrogFriend from "./components/FrogFriend/FrogFriend";

export const metadata: Metadata = {
	title: "Let's learn!",
	description: "Helping fellow developers in their learning journeys.",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<body className="h-dvh w-dvw grid gap-0 overflow-hidden text-slate-900 bg-slate-100">
				<Navbar />
				<main className="overflow-x-hidden overflow-y-scroll pb-10">
					{children}
					<FrogFriend />
				</main>
			</body>
		</html>
	);
};

export default RootLayout;
