import { Button } from "ui-redpanda";
import "ui-redpanda/dist/style.css";

interface RandomizeButtonProps {
	onClick: () => void;
}

const RandomizeButton: React.FC<RandomizeButtonProps> = ({ onClick }) => {
	return <Button onClick={onClick}>Randomise Starter Code</Button>;
};

export default RandomizeButton;