import React, { Component } from "react"
import _ from "lodash"
import { Motion, spring } from "react-motion"

const texts = [
	"SimpleMotion example",
	"Some longer text than default",
	"S",
	"SimpleMotion random text",
	"Some blablabla need some examplex",
	"Short",
]

class SimpleMotion extends Component {
	constructor(props) {
		super(props)

		this.state
			= {
			open: false,
			width: 0,
			text: texts[0],
		}
		this.handleToggle = this.handleToggle.bind(this)
		this.handleChangeText = this.handleChangeText.bind(this)
	}

	componentDidUpdate() {
		const elementWidth = document.querySelector(".SimpleMotion-text").clientWidth
		if (this.state.width !== elementWidth){
			this.setState({width: elementWidth})
		}
	}

	handleToggle() {
		this.setState({ open: !this.state.open})
	}

	handleChangeText() {
		const text = _.sample(texts)
		this.setState({text})
	}

	renderStuff() {
		const {
			open,
			width,
			text,
		} = this.state

		return (
			<Motion
				style={{
					x: spring(open ? width : 0),
					margin: spring(open ? 10 : 0),
					opacity: spring(open ? 1 : 0),
				}}
			>
				{({x, margin, opacity}) => (
					<div
						className="SimpleMotion-animated"
						style={{
							width: `${x}px`,
							margin: `0 ${margin}px`,
							opacity: `${opacity}`
						}}
					>
						<span
							className="SimpleMotion-text"
						>{text}</span>
					</div>
				)}

			</Motion>
		)
	}

	render() {
		return (
			<div>
				<h3>SimpleMotion Example</h3>
				<p>Just Motion (animated when state is changed)</p>
				<a href="https://github.com/dominikchrastek/react-animations-example/blob/master/src/Components/SimpleMotion.js">src</a>

				<div className="SimpleMotion">
					<button onClick={this.handleChangeText}>Change Text</button>
					<button onClick={this.handleToggle}>Toggle</button>
					{this.renderStuff()}
					<span className="SimpleMotion-span">afasd</span>
				</div>
			</div>
		)
	}
}

export default SimpleMotion
