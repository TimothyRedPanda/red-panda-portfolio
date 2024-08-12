import listItems from "../../data/contactList.json";
import Link from "next/link";

const ContactLogic = () => {
	return (
		<ul className="flex-col flex gap-4 p-2">
			{listItems.length > 0 ? (
				listItems.map((item, index) => {
					const key = index + 1;
					return (
						<li key={key}>
							<Link
								className="hover:text-slate-400"
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
	);
};
export default ContactLogic;
