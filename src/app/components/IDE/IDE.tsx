"use client";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-error_marker";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-twilight";
import AceEditor from "react-ace";

export default function Ide(props: {
	code: (value: string) => void;
}) {
	return (
		<AceEditor
			mode="python"
			defaultValue=""
			theme="twilight"
			style={{ borderRadius: "0.5rem" }}
			onChange={props.code}
			width={"100%"}
			height={"200px"}
			fontSize={"1.5rem"}
			lineHeight={"2rem"}
			enableSnippets={true}
			enableLiveAutocompletion={true}
		/>
	);
}
