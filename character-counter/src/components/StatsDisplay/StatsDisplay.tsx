import type { StatsDisplayProps } from "../../types";

const StatsDisplay = ({
  stats,
  showReadingTime = false,
  minWords = 0,
  maxWords = Infinity,
}: StatsDisplayProps) => {
  const isOutsideMinMax =
    stats.wordCount < minWords || stats.wordCount > maxWords;

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        padding: "15px",
        background: "black",
        borderRadius: "12px",
        fontFamily: "sans-serif",
      }}
    >
      <p style={{ background: "black", color: "white" }}>
        Characters: {stats.characterCount}
      </p>
      <p style={{ color: isOutsideMinMax ? "red" : "white" }}>
        Words: {stats.wordCount}
      </p>
      {showReadingTime && (
        <p style={{ background: "black", color: "white" }}>
          Reading Time: {stats.readingTime} minutes
        </p>
      )}
    </div>
  );
};

export default StatsDisplay;
