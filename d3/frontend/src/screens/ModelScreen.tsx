import React from "react";
import { RouteProps, Redirect } from "react-router-dom";
import "../styles/App.css";
import "../styles/TextButton.css";
import MODEL_INFORMATION from "../constants/ModelInfo";

interface ModelScreenProps {
	match: any;
}

interface ModelScreenState {
	touched: boolean;
	redirect: boolean;
}

class ModelScreen extends React.Component<
	ModelScreenProps & RouteProps,
	ModelScreenState
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
		const modelName = this.props.match.params.modelName;
		const info = MODEL_INFORMATION[modelName];
		const logoClasses = this.state.touched
			? "logo-model-page touched"
			: "logo-model-page";

		if (this.state.redirect) {
			return <Redirect push to="/" />;
		}

		return (
			<div className="container-fluid bg-dark App-background">
				<div className="jumbotron bg-light jumbotron-style">
					<div className="row">
						<div className="col-xs-offset-2 col-xs-8">
							<h1 className="jumbotron-text">{info.name}</h1>
						</div>
						<div className="col-xs-2">
							<img
								className={logoClasses}
								onMouseDown={this.toggleTouched}
								onMouseUp={this.handleMouseUp}
								onClick={this.onClick}
								alt="/chalmers_logo.png"
								src="/chalmers_logo.png"
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12 text-center">
						<iframe
							className="video"
							src={info.videoSrc}
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<p className="model-page-text">{info.description}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ModelScreen as React.ComponentType<any>;
