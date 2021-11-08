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
                <h1 className="form-title"> LogIn</h1>
                <div className="col">

                    <FormGroup className=" label">
                        <Label>Correo Electronico</Label>
                        <Input type="email" placeholder="Email" className="rounded-pill"/>
                    </FormGroup>
                    <FormGroup className=" label">
                        <Label> Contraseña</Label>
                        <Input type="password" placeholder="Contraseña" className="rounded-pill"/>
                    </FormGroup>
                    <div className="label">
                        <Button className="btn btn-info btn-lg rounded-pill">
                            Ingresar
                        </Button>
                    </div>
                    <div className="text-center pt-3 label">
                        O continua con tu cuenta social
                    </div>
                    <div className="">
                        <FacebookLoginButton className="mt-3 mb-3" />
                    </div>
                </div>

            </Form>
        );
    }
}

export default LogInComponent;
