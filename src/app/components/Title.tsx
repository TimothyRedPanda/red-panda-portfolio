interface TitleProps {
	text: string;
}

const Title = ({ text }: TitleProps) => {
	return <h1 className="underline font-bold">{text}</h1>;
};

export default Title;
