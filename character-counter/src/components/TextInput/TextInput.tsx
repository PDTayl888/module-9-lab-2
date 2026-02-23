import { useState } from "react";
import type { TextInputProps } from "../../types";

const TextInput = ({ onTextChange, placeholder = "Type here...", initialValue = "" }: TextInputProps) => {
	const [value, setValue] = useState(initialValue);

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newText = e.target.value;
		setValue(newText);
		onTextChange(newText);
	};

	return (
		<textarea
			value={value}
			onChange={handleChange}
			placeholder={placeholder}
			className="text-input"
			rows={6}
		/>
	);
};

export default TextInput;