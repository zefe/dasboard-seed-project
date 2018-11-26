import React, {Component, Fragment} from "react";
import {hot} from "react-hot-loader";
import Header from "../components/Layout/Header";
import SideDrawer from "../components/SideDrawer/SideDrawer";

import './App.css';
import BackDrop from "../components/BackDrop/BackDrop";
class App extends Component {
	state = {
		sideDrawerOpen: false,
	};

	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return {sideDrawerOpen: !prevState.sideDrawerOpen};
		})
	};

	backdropClickHandler = () => {
		this.setState({sideDrawerOpen: false});
	}

	render() {
		let backdrop;

		if (this.state.sideDrawerOpen) {
			backdrop = <BackDrop click={this.backdropClickHandler} />;
		}
		return (
			<div className="wrapper">
				<Header drawerClickHandler={this.drawerToggleClickHandler} />
				<SideDrawer show={this.state.sideDrawerOpen} />
				{backdrop}
				<main style={{marginTop: '64px'}}>
					<p>Welcome to Dashboard</p>
				</main>
			</div>
		);
	}
}

export default hot(module)(App);
