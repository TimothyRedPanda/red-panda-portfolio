import Link from "next/link";
import Title from "../components/Title";
import listItems from "../data/contactList";

export default function Contact() {
	const contactTitle: string = "Contact";
	return (
		<main
			className="p-6 
items-center 
gap-2 
flex 
flex-col 
h-full 
w-full"
		>
			<Title text={contactTitle} />
			<ul className="flex-col flex gap-4 p-2">
				{listItems.length > 0 ? (
					listItems.map((item, index) => {
						const key = index + 1;
						return (
							<li key={key}>
								<Link
									className="hover:text-blue-400"
									href={item.href}
									target="_blank"
								>
									{item.text}
								</Link>
							</li>
						);
					})
				) : (
					<h2>Coming Soon</h2>
				)}
				<li>Email : timothy@chewedleashphotography.com</li>
			</ul>
		</main>
	);
}
