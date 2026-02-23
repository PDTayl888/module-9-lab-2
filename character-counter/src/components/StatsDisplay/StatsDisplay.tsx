import type { StatsDisplayProps } from "../../types";

const StatsDisplay = ({ stats, showReadingTime = true }: StatsDisplayProps) => {
	return (
		<div className="stats">
			<p>Characters: {stats.characterCount}</p>
			<p>Words: {stats.wordCount}</p>
			{showReadingTime && <p>Reading Time: {stats.readingTime} minutes</p>}
		</div>
	);
};

export default StatsDisplay;