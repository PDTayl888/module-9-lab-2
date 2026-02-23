// TextInput Component
export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

// StatsDisplay Component
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}

export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
  minWords?: number;
  maxWords?: number;
}

// CharacterCounter Component
export interface CharacterCounterProps {
  //wordCount: number;
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}
