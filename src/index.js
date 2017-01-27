import React from "react"
import ReactDOM from "react-dom"
import SimpleMotion from "./Components/SimpleMotion"
import SimpleTransitionMotion from "./Components/SimpleTransitionMotion"

import "./style/main.scss"

const App = () => {
	return (
		<div>
			<h1>React animations example DEMO</h1>
			<h2>React motion</h2>
			<SimpleMotion />
			<SimpleTransitionMotion />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("app"));
