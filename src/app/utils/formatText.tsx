import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { memo, type ReactNode } from "react";

// Custom components for markdown elements with Tailwind CSS classes
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
				style={darcula}
				language={match[1]}
				PreTag="div"
				{...props}
			>
				{String(children).replace(/\n$/, "")}
			</SyntaxHighlighter>
		) : (
			<code
				className={` text-pastel-orange p-1 rounded ${className}`}
				{...props}
			>
				{children}
			</code>
		);
	},
	h1: ({ children }: { children?: ReactNode }) => (
		<h1 className="text-4xl font-bold text-pastel-orange">{children}</h1>
	),
	h2: ({ children }: { children?: ReactNode }) => (
		<h2 className="text-3xl font-semibold text-pastel-orange">{children}</h2>
	),
	h3: ({ children }: { children?: ReactNode }) => (
		<h3 className="text-2xl font-semibold text-pastel-orange">{children}</h3>
	),
	h4: ({ children }: { children?: ReactNode }) => (
		<h4 className="text-xl font-semibold text-pastel-orange">{children}</h4>
	),
	h5: ({ children }: { children?: ReactNode }) => (
		<h5 className="text-lg font-semibold text-pastel-orange">{children}</h5>
	),
	h6: ({ children }: { children?: ReactNode }) => (
		<h6 className="text-base font-semibold text-pastel-orange">{children}</h6>
	),
	p: ({ children }: { children?: ReactNode }) => (
		<p className="text-base text-pastel-gray">{children}</p>
	),
	a: ({ children, href }: { children?: ReactNode; href?: string }) => (
		<a
			target="_blank"
			rel="noreferrer"
			className="text-pastel-blue hover:underline"
			href={href}
		>
			{children}
		</a>
	),
	strong: ({ children }: { children?: ReactNode }) => (
		<strong className="font-bold text-pastel-orange">{children}</strong>
	),
	ul: ({ children }: { children?: ReactNode }) => (
		<ul className="list-disc list-inside text-pastel-pink">{children}</ul>
	),
	li: ({ children }: { children?: ReactNode }) => (
		<li className="text-base text-pastel-pink">{children}</li>
	),
	blockquote: ({ children }: { children?: ReactNode }) => (
		<blockquote className="border-l-4 border-pastel-pink pl-4 italic text-pastel-gray">
			{children}
		</blockquote>
	),
	// Add more custom components as needed
};

export const FormatContent = memo(({ content }: { content: string }) => {
	return (
		<ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
			{content}
		</ReactMarkdown>
	);
});
