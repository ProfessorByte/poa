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
                <FormGroup className="col-md-5 label">
                    <Label>EMAIL</Label>
                    <Input type="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup className="col-md-5 label">
                <Label> CONTRASEÑA</Label>
                    <Input type="password" placeholder="Contraseña"/>
                </FormGroup>

                <Button className="eightbit-btn eightbit-btn--proceed col-md-3 col-3">Log In</Button>
                <div className="text-center pt-3">
                    O continua con tu cuenta social
                </div >
                <div className="col-md-6 col-5">
                <FacebookLoginButton className="mt-3 mb-3"/>
                </div>
                
            </Form>
         );
    }
}
 
export default LogInComponent;