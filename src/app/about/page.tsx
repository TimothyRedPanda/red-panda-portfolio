import Link from 'next/link'

export default function About() {
    return (
        <main className="p-5 place-content-center grid gap-1">
            <h1 className="underline font-bold"> About </h1>
            <p className="max-w-xl">
                Well, hello there. I'm Timothy (sorry to tell you my name is not Red Panda). This little old Next.JS
                project is not only for me to share my coding journey and what I am getting up to but also to help other
                developers thrive. I will be sharing tips, tricks, and other words of wisdom from this noggin. Thanks
                for taking a look and watching this space as I expand it. If you have any questions, then head over to
                <Link className="hover:text-blue-400 underline" href="../contact"> contact</Link>.
            </p>
        </main>
    );
}