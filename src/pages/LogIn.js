import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import LogInComponent from "../components/LogInComponent";

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <LogInComponent/>
        );
    }
}

export default LogIn;
