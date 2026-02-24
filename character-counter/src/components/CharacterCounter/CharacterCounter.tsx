import { useState } from "react";
import type { CharacterCounterProps, TextStats } from "../../types";
import StatsDisplay from "../StatsDisplay/StatsDisplay.tsx";
import TextInput from "../TextInput/TextInput.tsx";


const CharacterCounter = ({
  minWords,
  maxWords,
  targetReadingTime = 0.25,
}: CharacterCounterProps) => {
  const [text, setText] = useState<string>("");

  const words = text
    .trim()
    .split(" ")
    .filter((x) => x.length > 0).length;
  const characters = text.length;
  const readingTime = parseFloat((words / 200).toFixed(2));

  const stats: TextStats = {
    characterCount: characters,
    wordCount: words,
    readingTime,
  };

  const isTargetMet = targetReadingTime < stats.readingTime;

  return (
    <div className="counter">
      <TextInput
        onTextChange={setText}
        placeholder="Start typing your content here..."
      />

      <StatsDisplay
        stats={stats}
        showReadingTime={stats.wordCount > 0}
        minWords={minWords}
        maxWords={maxWords}
        wq
      />

      <p style={{ borderRadius: "12px", background: "black", color: "white" }}>
        min {minWords} / max {maxWords}
      </p>
      <p
        style={{
          borderRadius: "12px",
          background: "black",
          color: isTargetMet ? "white" : "red",
        }}
      >
        TargetReading Time: {targetReadingTime} minutes
      </p>
    </div>
  );
};

export default CharacterCounter;
