import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const iniState = {
        email : "",
        password : "",
        emailError : "",
        passwordError : ""
}

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
        let passwordError="";

        if(!this.state.email){
            emailError="debe ingresar un email"
        }else{
            if(!this.state.email.includes("@")){
                emailError = "correo invalido, no contiene @"
            }

            
    
        }
        if(emailError){
            this.setState({emailError});
            return false;
        }

        
        return true;

    }

    handleChangeEmail = event => {
        this.setState({ email : event.target.value})
    }
    handleChangePassword = event => {
        this.setState({ password : event.target.value})
    }
    handleSubmit = event =>{
        event.preventDefault();
        const isValid = this.validate();
        console.log(this.state);
        if(isValid){
            console.log(this.state);
            //limpiar el form
            this.setState(iniState);
        }

    }

    render() {
        const { showPassword} = this.state;
        
        const ojo= {faEye};
        return (
            <Form className="form-group formulario row" onSubmit={this.handleSubmit}>
                <h1 className="form-title"> LogIn</h1>
                <div className="col">
                    <FormGroup className=" label">
                        <Label>Correo Electronico</Label>
                        <Input
                            type="text"
                            placeholder="Email"
                            className="rounded-pill"
                            onChange={this.handleChangeEmail}
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
                                onChange={this.handleChangePassword}
                            />
                            <FontAwesomeIcon icon={faEye} size="2x" className={(showPassword) ? "icon white-eye" : "icon"} onClick={this.togglePasswordVisibility} />
                        </div>
                        <div className="mensaje-error">
                            {this.state.passwordError}
                        </div>
                    </FormGroup>
                    <div className="label form-btn">
                        <Button type="submit" className="btn btn-light btn-lg rounded-pill" >
                            Ingresar
                        </Button>
                    </div>
                </div>
            </Form>
        );
    }
}

export default LogInComponent;
