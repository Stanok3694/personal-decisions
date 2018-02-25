import React, { Component } from "react";
import { Link, Switch, Route, withRouter, } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, Button, } from "react-bootstrap";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as sessionActions from "../actions/sessionActions";
import { Workers, Profile, Create, } from './workers';
import Dashboard from './Dashboard';

const Home = ({ actions: { logout } }) => {
    return (
        <div>
            {/* menu frame: */}
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Главная</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavDropdown title="Рабочие">
                        <NavItem href="/workers">
                            Список рабочих
                        </NavItem>
                        <NavItem href="/createWorker">
                            Создать рабочего
                        </NavItem>
                    </NavDropdown>
                    {/* {
                        withRouter(({ history }) => (
                            <button
                                onClick = {() => logout(history)}
                            >
                                Выйти
                            </button>
                        ))()
                    } */}
                </Nav>
            </Navbar>
            {/* content frame: */}
            <div>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/workers" component={Workers} />
                    <Route path="/createWorker" component={Create} />
                    <Route path="/worker/:workerId" component={Profile} />
                </Switch>
            </div>
        </div>
    );
}

const mapState = (state) => ({
    user: state.session.user,
    authenticated: state.session.authenticated
});

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
};

export default connect(mapState, mapDispatch)(Home);