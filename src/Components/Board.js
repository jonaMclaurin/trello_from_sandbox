import React from "react";
import { Knight } from "./Knight";
import { Square } from "./Square";
import { moveKnight, canMoveKnight } from "../Utils/Game";

const handleSquareClick = (toX, toY) => {
	if (canMoveKnight(toX, toY)) {
		moveKnight(toX, toY);
	}
};

export const Board = ({ knightPosition }) => {
	const squares = [];
	for (let i = 0; i < 64; i++) {
		squares.push(renderSquare(i, knightPosition));
	}
	return (
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
	);
};

const renderSquare = (i, [knightX, knightY]) => {
	const x = i % 8;
	const y = Math.floor(i / 8);
	const isKnightHere = x === knightX && y === knightY;
	const black = (x + y) % 2 === 1;
	const piece = isKnightHere ? <Knight /> : null;

	return (
		<div
			onClick={() => handleSquareClick(x, y)}
			key={i}
			id={i}
			style={{
				width: "12.5%",
				height: "12.5%"
			}}
		>
			<Square black={black}>{piece}</Square>
		</div>
	);
};
