// import { useState } from 'react'
import "./App.css";
import CharacterCounter from "./components/CharacterCounter/CharacterCounter.tsx";

function App() {
	// const [count, setCount] = useState(0)

	return (
		<div style={{
        display: "inline-block",
        gap: "10px",
        padding: "15px",
        background: "black",
        borderRadius: "12px",
        fontFamily: "sans-serif",
      }}>
			{<CharacterCounter
				minWords={25}
				maxWords={100}
			/>}
		</div>
	);
}

export default App;