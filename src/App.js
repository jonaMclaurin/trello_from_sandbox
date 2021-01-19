import React, { useState, useEffect } from "react";
import { Board } from "./Components/Board";
import { observe } from "./Utils/Game";

const App = ({ knightPosition }) => {
	const [knightPos, setKnightPos] = useState([0, 0]);
	useEffect(() => {
		observe((newPos) => setKnightPos(newPos));
	});
	return <Board knightPosition={knightPos} />;
};

export default App;
