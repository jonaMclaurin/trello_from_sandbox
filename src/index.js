import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";

const root = document.getElementById("root");

//observe((knightPosition)=> ReactDOM.render(<App knightPosition={knightPosition}/>, root))

ReactDOM.render(<App knightPosition={[2, 0]} />, root);
