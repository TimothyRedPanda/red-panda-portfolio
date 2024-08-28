export const FormatContent = (content: string) => {
	let insideCodeBlock = false;
	let codeBlockLanguage = "";
	let codeBlockContent = "";

	return content.split("\n").map((line: string, index: number) => {
		const uniqueKey = `${line}-${index}`;

		// Check for the start or end of a code block
		if (line.startsWith("```")) {
			if (insideCodeBlock) {
				// End of code block
				insideCodeBlock = false;
				const formattedCodeBlock = (
					<pre key={uniqueKey}>
						<code className={`language-${codeBlockLanguage}`}>
							{codeBlockContent}
						</code>
					</pre>
				);
				codeBlockContent = "";
				codeBlockLanguage = "";
				return formattedCodeBlock;
			}
			// Start of code block
			insideCodeBlock = true;
			codeBlockLanguage = line.replace(/```/g, "").trim();
			return null; // Don't render the start line
		}

		if (insideCodeBlock) {
			// Accumulate code block content
			codeBlockContent += `${line}\n`;
			return null; // Don't render code lines immediately
		}

		if (line.startsWith("##") || line.startsWith("###")) {
			return (
				<h2 className="text-orange-300" key={uniqueKey}>
					{line.replace(/##+/, "").trim()}
				</h2>
			);
		}

		if (line.includes("**")) {
			const parts = line
				.split(/(\*\*.*?\*\*)/g)
				.map((part: string, i: number) => {
					const partKey = `${part}-${i}`;
					if (part.startsWith("**") && part.endsWith("**")) {
						return <strong key={partKey}>{part.replace(/\*\*/g, "")}</strong>;
					}
					return part;
				});
			return <p key={uniqueKey}>{parts}</p>;
		}

		if (line.includes("***")) {
			const parts = line
				.split(/(\*\*\*.*?\*\*\*)/g)
				.map((part: string, i: number) => {
					const partKey = `${part}-${i}`;
					if (part.startsWith("***") && part.endsWith("***")) {
						return <em key={partKey}>{part.replace(/\*\*\*/g, "")}</em>;
					}
					return part;
				});
			return <p key={uniqueKey}>{parts}</p>;
		}

		return <p key={uniqueKey}>{line}</p>;
	});
};
