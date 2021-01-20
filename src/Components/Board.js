import React, { useState, useEffect } from "react";
import { Knight } from "./Knight";
import { Square } from "./Square";
import { BoardSquare } from "./BoardSquare";
import { moveKnight, canMoveKnight, observe } from "../Utils/Game";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const handleSquareClick = (toX, toY) => {
	if (canMoveKnight(toX, toY)) {
		moveKnight(toX, toY);
	}
};

export const Board = ({ knightPosition }) => {
	const [knightPos, setKnightPos] = useState([0, 0]);
	useEffect(() => {
		observe(setKnightPos);
	}, []);

	const squares = [];
	for (let i = 0; i < 64; i++) {
		squares.push(renderSquare(i, knightPos));
	}
	return (
		<DndProvider backend={HTML5Backend}>
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexWrap: "wrap"
				}}
			>
				{squares}
			</div>
		</DndProvider>
	);
};

const renderSquare = (i, knightPosition) => {
	const x = i % 8;
	const y = Math.floor(i / 8);
	return (
		<div
			key={i}
			style={{
				width: "12.5%",
				height: "12.5%"
			}}
		>
			<BoardSquare x={x} y={y}>
				{renderPiece(x, y, knightPosition)}
			</BoardSquare>
		</div>
	);
};

const renderPiece = (x, y, [knightX, knightY]) => {
	if (x === knightX && y === knightY) {
		return <Knight />;
	}
};
