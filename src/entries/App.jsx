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

	render() {
		let sideDrawer;
		let backdrop;

		if (this.state.sideDrawerOpen) {
			sideDrawer = <SideDrawer />;
			backdrop = <BackDrop />;
		}
		return (
			<div style={{height: '100%'}}>
				<Header drawerClickHandler={this.drawerToggleClickHandler} />
				{sideDrawer}
				{backdrop}
				<main style={{marginTop: '64px'}}>
					<p>Welcome to Dashboard</p>
				</main>
			</div>
		);
	}
}

export default hot(module)(App);
