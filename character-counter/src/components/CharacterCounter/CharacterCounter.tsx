import { useState } from "react";
import type { CharacterCounterProps, TextStats } from "../../types";
import StatsDisplay from "../StatsDisplay/StatsDisplay.tsx";
import TextInput from "../TextInput/TextInput.tsx";

////// example
// const example = (): string => {;
//     return 'test'
//   };

const CharacterCounter = ({ minWords, maxWords }: CharacterCounterProps) => {
  const getProgress = () => {
    if (!maxWords || maxWords === 0) return 0;
    return; /////////////////// not finished
  };

  const [text, setText] = useState<string>("");

  const words = text
    .trim()
    .split(" ")
    .filter((x) => x.length > 0).length;
  const characters = text.length;
  const readingTime = parseFloat((words / 200).toFixed(2)); // 200 wpm

  const stats: TextStats = {
    characterCount: characters,
    wordCount: words,
    readingTime,
  };

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
      />

      <p>
        {minWords} / {maxWords} words
      </p>
    </div>
  );
};

export default CharacterCounter;
