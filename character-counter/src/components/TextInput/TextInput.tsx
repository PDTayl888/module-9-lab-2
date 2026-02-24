import { useState } from "react";
import type { TextInputProps } from "../../types";

const TextInput = ({
  onTextChange,
  placeholder = "Type here...",
  initialValue = "",
}: TextInputProps) => {
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
      rows={6}
      style={{
        display: "inline-block",
        gap: "10px",
        padding: "15px",
        background: "white",
        borderRadius: "12px",
        fontFamily: "sans-serif",
      }}
    />
  );
};

export default TextInput;
