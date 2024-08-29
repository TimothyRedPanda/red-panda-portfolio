import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { memo, type ReactNode } from "react";

const components: Components = {
	code: ({
		inline,
		className,
		children,
		...props
	}: {
		inline?: boolean;
		className?: string;
		children?: ReactNode;
	}) => {
		const match = /language-(\w+)/.exec(className || "");
		return !inline && match ? (
			<SyntaxHighlighter
				style={dark}
				language={match[1]}
				PreTag="div"
				{...props}
			>
				{String(children).replace(/\n$/, "")}
			</SyntaxHighlighter>
		) : (
			<code className={className} {...props}>
				{children}
			</code>
		);
	},
};

export const FormatContent = memo(({ content }: { content: string }) => {
	return (
		<ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
			{content}
		</ReactMarkdown>
	);
});
