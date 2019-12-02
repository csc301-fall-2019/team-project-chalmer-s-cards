import React from "react";
import { withRouter, RouteProps } from "react-router-dom";
import "../styles/App.css";
import MODEL_INFORMATION from "../constants/ModelInfo";

interface ModelScreenProps {
	match: any;
}

interface ModelScreenState {}

class ModelScreen extends React.Component<ModelScreenProps & RouteProps, {}> {
	public render() {
		const modelName = this.props.match.params.modelName;
		const info = MODEL_INFORMATION[modelName];
		return (
			<div className="container-fluid bg-dark App-background">
				<div className="jumbotron bg-light jumbotron-style">
					<div className="row">
						<div className="col-xs-offset-2 col-xs-8">
							<h1>{info.name}</h1>
						</div>
						<div className="col-xs-2">
							<img
								className="logo-model-page"
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
