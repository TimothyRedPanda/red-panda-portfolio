import Link from 'next/link'

export default function Contact() {
    const listItems = [
        {
            text: "LinkedIn: timothybridgecode",
            href: "https://www.linkedin.com/in/timothybridgecode/"
        },

        {
            text: "GitHub: TimothyRedPanda",
            href: "https://github.com/TimothyRedPanda",
        }
    ]

    return (
        <main className="p-5 place-content-center grid gap-4">
            <h1 className="underline font-bold"> Contact </h1>
            <ul className="flex-col flex gap-4">
                {listItems.length > 0 ? listItems.map((item, index) => (
                    <li key={index}>
                        <Link className="hover:text-blue-400" href={item.href} target="_blank">{item.text}</Link>
                    </li>
                )) : <h2>No list found</h2>}
            </ul>
        </main>
    )
}