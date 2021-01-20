import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Board } from "./Components/Board";

import "./index.css";

const root = document.getElementById("root");

//observe((knightPosition)=> ReactDOM.render(<App knightPosition={knightPosition}/>, root))

ReactDOM.render(<Board knightPosition={[2, 0]} />, root);
