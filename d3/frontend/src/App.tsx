import React from "react";
import { Link, RouteProps } from "react-router-dom";
import TextButton from "./components/TextButton";
import "./styles/App.css";

class App extends React.Component<{} & RouteProps, {}> {
	public render() {
		return (
			<div className="container-fluid bg-dark App-background">
				<div className="jumbotron bg-light jumbotron-style">
					<div className="row">
						<div className="col-xs-offset-2 col-xs-8">
							<h1>Chalmer's Vision</h1>
							<p>Computer vision for greater purpose.</p>
						</div>
						<div className="col-xs-2">
							<img
								className="logo"
								alt="/chalmers_logo.png"
								src="/chalmers_logo.png"
							/>
						</div>
					</div>
				</div>
				<div className="row text">
					<div className="col-lg-12">
						<p className="text">
							Chalmer’s Vision is a project facilitated by Zachary Donsky as one
							of two ways to improve the functioning of shelters. Part of a
							shelters requirements is to always track the occupancy of the
							building to keep the number of people within fire code
							specifications. When a shelter reaches full capacity, clients who
							unfortunately seek refuge in these shelters need to be deferred to
							another. This project looks to aid this process by providing a
							simple solution; a counter that streamlines the process of
							counting the flow of people in a building. This information is
							then readily available to other shelters so clients can go to
							vacant shelters quickly.{" "}
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
						<TextButton text="OpenCV Face Detection" modelName="model1" />
					</div>
					<div className="col-sm-4">
						<TextButton
							text="OpenCV+MobileNet Object Detection"
							modelName="model2"
						/>
					</div>
					<div className="col-sm-4">
						<TextButton
							text="OpenCV+TensorFlow Object Detection Model"
							modelName="model3"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App as React.ComponentType<any>;
