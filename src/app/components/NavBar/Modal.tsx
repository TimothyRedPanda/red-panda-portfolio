import type { ReactNode } from "react";
import { Button } from "ui-redpanda";
import "ui-redpanda/dist/style.css";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-center">
			<div className="bg-white relative h-fit rounded-lg shadow-lg p-4 w-11/12 md:w-1/4 flex flex-col">
				<Button onClick={onClose}>
					<span className="text-5xl absolute top-0 left-2">&times;</span>
				</Button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
