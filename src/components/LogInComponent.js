import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import Imagen from '../assets/images/start.jpg';
class LogInComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Form className="form-group formulario row">
                <h1> LOGIN PAGE</h1>
                <h2>Bienvenido de Vuelta</h2>
                <div className="col">
                    <FormGroup className=" label">
                        <Label>EMAIL</Label>
                        <Input type="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup className=" label">
                        <Label> CONTRASEÑA</Label>
                        <Input type="password" placeholder="Contraseña" />
                    </FormGroup>
                    <div className="label">
                        <Button className="eightbit-btn eightbit-btn--proceed ">
                            Log In
                        </Button>
                    </div>
                    <div className="text-center pt-3 label">
                        O continua con tu cuenta social
                    </div>
                    <div className="">
                        <FacebookLoginButton className="mt-3 mb-3" />
                    </div>
                </div>
                <div className="col">
                    <img src={Imagen} alt="error"></img>
                </div>
            </Form>
        );
    }
}

export default LogInComponent;
