import Link from 'next/link'
import Title from '../components/Title'

type contactLink = {
    text: string,
    href: string
}[];

export default function Contact() {
    const listItems: contactLink = [
        {
            text: "LinkedIn: timothybridgecode",
            href: "https://www.linkedin.com/in/timothybridgecode/"
        },

        {
            text: "GitHub: TimothyRedPanda",
            href: "https://github.com/TimothyRedPanda",
        },
    ]

    const contactTitle : string = "Contact"

    return (
        <main className="p-6 items-center gap-2 flex flex-col h-full w-full">
            <Title text={contactTitle}/>
            <ul className="flex-col flex gap-4 p-2">
                {listItems.length > 0 ? listItems.map((item, index) => (
                    <li key={index}>
                        <Link className="hover:text-blue-400" href={item.href} target="_blank">{item.text}</Link>
                    </li>
                )) : <h2>Coming Soon</h2>}
                <li>Email : timothy@chewedleashphotography.com</li>
            </ul>
        </main>
    )
}