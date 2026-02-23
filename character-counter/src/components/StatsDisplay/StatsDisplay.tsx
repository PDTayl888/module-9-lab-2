import type { StatsDisplayProps } from "../../types";

const StatsDisplay = ({ stats, showReadingTime = false, minWords, maxWords }: StatsDisplayProps) => {

    const isOutsideMinMax = stats.wordCount < minWords || stats.wordCount > maxWords;

	return (
		<div className="stats">
			<p>Characters: {stats.characterCount}</p>
			<p style={{ color: isOutsideMinMax ? 'red' : 'white'}}>Words: {stats.wordCount}</p>
			{showReadingTime && <p>Reading Time: {stats.readingTime} minutes</p>}
		</div>
	);
};

export default StatsDisplay;