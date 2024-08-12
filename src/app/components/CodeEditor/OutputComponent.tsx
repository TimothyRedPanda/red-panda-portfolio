import Output from "../Output/Output";

interface OutputComponentProps {
	editorValue: string;
}

const OutputComponent: React.FC<OutputComponentProps> = ({ editorValue }) => {
	return <Output editorValue={editorValue} />;
};

export default OutputComponent;