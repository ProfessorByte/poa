import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import Imagen from "../assets/images/start.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

class LogInComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        showPassword : false,
        email : "",
        password : "",
        emailError : "",
        passwordError : ""
    }

    togglePasswordVisibility =() =>{
        const {showPassword} = this.state;
        this.setState({ showPassword : !showPassword});
    }

    validate =() =>{
        let emailError="";
    }

    emailChange(e){
        this.setState({
            email : e.target.value
        });
    }

    passwordChange(e){
        this.setState({
            password: e.target.value
        });
    }

    render() {
        const { showPassword} = this.state;
        const isValid = this.validate();
        console.log(this.state);
        if(isValid){
            console.log(this.state);
        }
        const ojo= {faEye};
        return (
            <Form className="form-group formulario row">
                <h1 className="form-title"> LogIn</h1>
                <div className="col">
                    <FormGroup className=" label">
                        <Label>Correo Electronico</Label>
                        <Input
                            type="email"
                            placeholder="Email"
                            className="rounded-pill"
                        />
                        <div className="mensaje-error">
                            {this.state.emailError}
                        </div>
                    </FormGroup>
                    <FormGroup className=" label">
                        <Label> Contraseña :</Label>
                        <div className="input-password">
                            <Input
                                type= {(showPassword) ? "text" : "password"}
                                placeholder="Contraseña"
                                className="rounded-pill"
                            />
                            <FontAwesomeIcon icon={faEye} size="2x" className={(showPassword) ? "icon white-eye" : "icon"} onClick={this.togglePasswordVisibility} />
                        </div>
                        <div className="mensaje-error">
                            {this.state.passwordError}
                        </div>
                    </FormGroup>
                    <div className="label form-btn">
                        <Button className="btn btn-light btn-lg rounded-pill">
                            Ingresar
                        </Button>
                    </div>
                </div>
            </Form>
        );
    }
}

export default LogInComponent;
