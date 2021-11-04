import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Form className="login-form">
                <h1> LOGIN PAGE</h1>
                <h2>Bienvenido de Vuelta</h2>
                <FormGroup>
                    <Label>EMAIL</Label>
                    <Input type="email" placeholder="Email"/>
                </FormGroup>

                <Button className="btn-lg btn-dark btn-block">Log IN</Button>
            </Form>
        );
    }
}

export default LogIn;
