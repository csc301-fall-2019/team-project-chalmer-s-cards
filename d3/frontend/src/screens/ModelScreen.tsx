import React from "react";
import { withRouter, RouteProps } from "react-router-dom";
import "../styles/App.css";

interface ModelScreenProps {}

interface ModelScreenState {}

class ModelScreen extends React.Component<{} & RouteProps, {}> {
	public render() {
		return (
			<div className="App">
				<header className="App-header">Models</header>
			</div>
		);
	}
}

export default ModelScreen as React.ComponentType<any>;
