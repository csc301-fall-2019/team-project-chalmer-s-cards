import React from "react";
import { Link, RouteProps } from "react-router-dom";
import TextButton from "./components/TextButton";
import "./styles/App.css";

class App extends React.Component<{} & RouteProps, {}> {
	public render() {
		return (
			<div className="container-fluid bg-dark App-background">
				<div className="jumbotron bg-light jumbotron-style">
					<h1>Chalmer's Vision</h1>
					<p>A foray into computer vision for greater purpose.</p>
				</div>
				<div className="row text">
					<div className="col-lg-12">
						<p className="text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius
							morbi enim nunc faucibus a pellentesque sit amet. A iaculis at
							erat pellentesque adipiscing commodo elit at imperdiet. Nam
							aliquam sem et tortor. At imperdiet dui accumsan sit amet nulla
							facilisi morbi. Elit sed vulputate mi sit amet mauris. A lacus
							vestibulum sed arcu non odio euismod. Nibh nisl condimentum id
							venenatis a condimentum vitae sapien pellentesque. Diam volutpat
							commodo sed egestas egestas fringilla. Etiam dignissim diam quis
							enim lobortis. Imperdiet sed euismod nisi porta lorem. Vulputate
							sapien nec sagittis aliquam. Laoreet sit amet cursus sit.{" "}
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<h2 className="text">Our Models</h2>
					</div>

					<div className="col-lg-12">
						<p className="text">
							Throughout the process of developing our model, we went through
							various iterations, each with its strengths and weaknesses.
						</p>
					</div>
				</div>

				<div className="row button-row">
					<div className="col-sm-4">
						<TextButton text="Model 1" modelName="model1" />
					</div>
					<div className="col-sm-4">
						<TextButton text="Model 2" modelName="model2" />
					</div>
					<div className="col-sm-4">
						<TextButton text="Model 3" modelName="model3" />
					</div>
				</div>
			</div>
		);
	}
}

export default App as React.ComponentType<any>;
