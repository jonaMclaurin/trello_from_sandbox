import React from "react";
import { ItemTypes } from "../Utils/Constants";
import { useDrag } from "react-dnd";

export const Knight = () => {
	const [{ isDragging }, drag] = useDrag({
		item: { type: ItemTypes.KNIGHT },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging()
		})
	});

	return (
		<p
			ref={drag}
			style={{
				opacity: isDragging ? 0 : 1.0,
				fontSize: 60,
				cursor: "move",
				borderRadius: "50%",
				margin: 0,
				padding: 0
			}}
		>
			♘
		</p>
	);
};
