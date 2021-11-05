import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
class LogInComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Form className="form-group formulario">
                <h1> LOGIN PAGE</h1>
                <h2>Bienvenido de Vuelta</h2>
                <FormGroup className="col-md-3">
                    <Label>EMAIL</Label>
                    <Input type="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup className="col-md-3">
                <Label>CONTRASEÑA</Label>
                    <Input type="password" placeholder="Contraseña"/>
                </FormGroup>

                <Button className="btn-lg btn- btn-light">Log In</Button>
                <div className="text-center pt-3">
                    O continua con tu cuenta social
                </div >
                <FacebookLoginButton className="mt-3 mb-3"/>
            </Form>
         );
    }
}
 
export default LogInComponent;