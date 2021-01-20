import React, { useState, useEffect } from "react";
import { Board } from "./Components/Board";
import { observe } from "./Utils/Game";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = ({ knightPosition }) => {
	const [knightPos, setKnightPos] = useState([0, 0]);
	useEffect(() => {
		observe(setKnightPos);
	}, []);
	return (
		<DndProvider backend={HTML5Backend}>
			<Board knightPosition={knightPos} />
		</DndProvider>
	);
};

export default App;
