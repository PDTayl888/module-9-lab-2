// import { useState } from 'react'
import "./App.css";
import CharacterCounter from "./components/CharacterCounter/CharacterCounter.tsx";

function App() {
	// const [count, setCount] = useState(0)

	return (
		<>
			{<CharacterCounter
				minWords={25}
				maxWords={100}
			/>}
		</>
	);
}

export default App;