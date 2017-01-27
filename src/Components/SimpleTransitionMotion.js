import React, { Component } from "react"
import { TransitionMotion, spring } from "react-motion"

class SimpleTransitionMotion extends Component {
	constructor(props) {
		super(props)

		this.state
			= {
			open: true,
			width: 0,
		}

		this.handleToggle = this.handleToggle.bind(this)
		this.setWidth = this.setWidth.bind(this)
	}

	componentDidUpdate() {
		this.setWidth()
	}
	componentDidMount() {
		this.setWidth()
	}

	setWidth() {
		if ( document.querySelector(".Transition-text") !== null) {
			const elementWidth = document.querySelector(".Transition-text").clientWidth
			if (this.state.width !== elementWidth){
				this.setState({width: elementWidth})
			}
		}
	}

	willEnter() {
		return {
			opacity: 0,
			width: 0,
		}
	}

	willLeave() {
		return {
			opacity: spring(0),
			width: spring(0),
		}
	}

	handleToggle() {
		this.setState({open: !this.state.open})
	}

	renderStuff() {
		return (
			<div>
				<TransitionMotion
					styles={
						this.state.open
							? [{ key: "child", data: {}, style: {
									opacity: spring(1),
									width: spring(this.state.width)
								}}]
							: []
					}
					willEnter={this.willEnter}
					willLeave={this.willLeave}
				>
					{(items) => {
						return (
							<div>
								{items.map(item => {
									return (
										<div
											className="Transition-animated"
											key={item.key}
											style={{ opacity: item.style.opacity, width: item.style.width}}
										>
											<span className="Transition-text">
												Some awesome text!
												</span>
										</div>
									)
								})}
							</div>
						)
					}}
				</TransitionMotion>
			</div>
		)
	}

	render() {
		return (
			<div>
				<h3>SimpleTransitionMotion Example</h3>
				<p>Animating mount/unmount</p>
				<a href="https://github.com/dominikchrastek/react-animations-example/blob/master/src/Components/SimpleTransitionMotion.js">src</a>
				<div className="SimpleMotion">
					<button onClick={this.handleToggle}>
						{this.state.open
							? "Unmount it"
							: "Mount it!"
						}
					</button>
					{this.renderStuff()}
					<span className="SimpleMotion-span">afasd</span>
				</div>
			</div>
		)
	}
}

export default SimpleTransitionMotion
