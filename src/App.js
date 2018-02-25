import React from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import { connect } from 'react-redux';

import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Login from "./components/login/Login";

const App = ({ authenticated, checked }) => (
	<Router>
		{checked &&
			<div>
				<PrivateRoute 
					exact
					path="/"
					component = {Home}
					authenticated = {authenticated}
				/>
				<Route path="/login" component = {Login} />			
			</div>
		}
	</Router>
);

const mapState = ({ session }) => ({
	checked: session.checked,
	authenticated: session.authenticated
});

export default connect(mapState)(App);