import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import Header from "../components/HeaderComponent";
import "../css/LogIn.css";
import LogInComponent from "../components/LogInComponent";

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>

                <div className="contenedor-log-in ">
                    <LogInComponent />
                </div>
            </div>
        );
    }
}

export default LogIn;
