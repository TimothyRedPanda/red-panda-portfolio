interface TitleProps {
	text: string;
}

export default function Title({ text }: TitleProps) {
	return <h1 className="underline font-bold">{text}</h1>;
}
