import React from "react";
import { Link, RouteProps } from "react-router-dom";
import "./styles/App.css";

class App extends React.Component<{} & RouteProps, {}> {
	public render() {
		return (
			<div className="App">
				<header className="App-header">Chalmer's Vision</header>
				{/* <Link className="App-header" to="/model">
					Go to models
				</Link> */}
			</div>
		);
	}
}

export default App as React.ComponentType<any>;
