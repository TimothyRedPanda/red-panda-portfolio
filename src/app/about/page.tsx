import Paragraph from '../components/Paragraph'
import Title from '../components/Title'

export default function About() {

    const paragraphText: string = "Well, hello there. I'm Timothy (sorry to tell you my name is not Red Panda). This little old Next.JS\n" +
        "                project is not only for me to share my coding journey and what I am getting up to but also to help other\n" +
        "                developers thrive. I will be sharing tips, tricks, and other words of wisdom from this noggin. Thanks\n" +
        "                for taking a look and watching this space as I expand it. If you have any questions, then head over to\n" +
        "                contact"
    const aboutTitle: string = "About"

    return (
        <main className="p-5 justify-items-center align-top h-fit gap-4 grid">
            <Title text={aboutTitle}/>
            <Paragraph text={paragraphText}/>
        </main>
    );
}