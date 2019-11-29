import React from "react";
import { Redirect } from "react-router-dom";
import "../styles/TextButton.css";

interface TextButtonProps {
	text: String;
	modelName: String;
}

interface TextButtonState {
	touched: boolean;
	redirect: boolean;
}

export default class TextButton extends React.Component<
	TextButtonProps,
	TextButtonState
> {
	state = {
		touched: false,
		redirect: false
	};

	private toggleTouched = () => {
		this.setState(prevState => ({
			touched: !prevState.touched
		}));
	};

	private onClick = () => {
		this.setState({ redirect: true });
	};

	private handleMouseUp = () => {
		// Handle smooth animation when clicking without holding
		setTimeout(() => {
			this.setState({ touched: false });
		}, 150);
	};

	public render() {
		const { touched } = this.state;
		const className = touched ? "btn touched bg-light" : "btn bg-light";

		if (this.state.redirect) {
			return <Redirect push to="/model" />;
		}
		return (
			<button
				className={className}
				onMouseDown={this.toggleTouched}
				onMouseUp={this.handleMouseUp}
				onClick={this.onClick}
			>
				<text className="button-text">{this.props.text}</text>
			</button>
		);
	}
}
