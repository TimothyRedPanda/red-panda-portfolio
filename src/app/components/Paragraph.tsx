export default function Paragraph(props: { text: string }) {
    return (
        <p className="max-w-xl p-2">
            {props.text}
        </p>
    )
}