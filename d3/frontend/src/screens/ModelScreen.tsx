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
					<h1>{info.name}</h1>
				</div>
				<div className="row">
					<div className="col-8"></div>
					<iframe
						className="video"
						min-height="100vh"
						src={info.videoSrc}
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
					<div className="col-4">
						<p className="model-page-text">{info.description}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ModelScreen as React.ComponentType<any>;
