const Paragraph = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return <p className="max-w-xl p-2">{children}</p>;
};
export default Paragraph;
