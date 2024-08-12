import Editor from "@monaco-editor/react";

interface EditorComponentProps {
	value: string;
	setValue: (value: string) => void;
}

const EditorComponent: React.FC<EditorComponentProps> = ({
	value,
	setValue,
}) => {
	return (
		<Editor
			className="codeEditor"
			theme="vs-dark"
			defaultLanguage="javascript"
			value={value}
			onChange={(value) => setValue(value ? value : "")}
			options={{
				cursorBlinking: "smooth",
				acceptSuggestionOnEnter: "smart",
				minimap: {
					enabled: false,
				},
				padding: {
					top: 20,
				},
			}}
		/>
	);
};

export default EditorComponent;