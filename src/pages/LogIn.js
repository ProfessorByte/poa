import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import "../css/LogIn.css"
import LogInComponent from "../components/LogInComponent";

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="contenedor ">
                <LogInComponent/>
            </div>
        );
    }
}

export default LogIn;
