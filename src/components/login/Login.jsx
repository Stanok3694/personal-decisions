import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as sessionActions from "../../actions/sessionActions";

import { withRouter } from "react-router-dom";
import { Form, FormGroup, FormControl, Col, ControlLabel, Button } from "react-bootstrap";
import SubmitButton from "./SubmitButton";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                login: '',
                password: '',
            }
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(history) {
        const { user } = this.state;
        sessionActions.login(user, history);
    }

    onChange(e) {
        const { value, name } = e.target;
        const { user } = this.state;
        user[name] = value;
        this.setState({ user });
    }

    render() {
        return (
            <Form 
                horizontal
                onSubmit = {this.onSubmit}
            >
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Логин
                    </Col>
                    <Col sm={8}>
                        <FormControl
                            name = "login" 
                            placeholder="Логин"
                            onChange = {this.onChange}    
                        />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Пароль
                    </Col>
                    <Col sm={8}>
                        <FormControl 
                            name = "password"
                            type="password"
                            placeholder="Ваш пароль"
                            onChange = {this.onChange}
                        />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <SubmitButton
                            onSubmit = {this.onSubmit}
                        />
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
};

export default connect(null, mapDispatch)(Login);