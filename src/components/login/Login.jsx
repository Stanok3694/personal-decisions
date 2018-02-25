import React, { Component } from "react";

import { Form, FormGroup, FormControl, Col, ControlLabel, Button } from "react-bootstrap";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Логин
                    </Col>
                    <Col sm={8}>
                        <FormControl type="email" placeholder="Email" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Пароль
                    </Col>
                    <Col sm={8}>
                        <FormControl type="password" placeholder="Password" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button type="submit">Войти</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default Login;