import { useState } from "react";
import type { CharacterCounterProps, TextStats } from "../../types";
import StatsDisplay from "../StatsDisplay/StatsDisplay.tsx";
import TextInput from "../TextInput/TextInput.tsx";

////// example
// const example = (): string => {;
//     return 'test'
//   };

const CharacterCounter = ({ wordCount, minWords, maxWords }: CharacterCounterProps) => {
	const getProgress = () => {
		if (!maxWords || maxWords === 0) return 0;
		return; /////////////////// not finished
	};

	const [text, setText] = useState<string>("");

	const words = text.trim().split(" ").length;
	const characters = text.length;
	const readingTime = parseFloat((words / 200).toFixed(2)); // 200 wpm

	const stats: TextStats = {
		characterCount: characters,
		wordCount: words,
		readingTime,
	};

	const progress = getProgress();

	return (
		<div className="counter">
			<TextInput
				onTextChange={setText}
				placeholder="Start typing your content here..."
			/>

			<StatsDisplay
				stats={stats}
				showReadingTime
			/>

			<p>
				{wordCount} / {maxWords} words
			</p>
		</div>
	);
};

export default CharacterCounter;