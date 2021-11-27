import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth();
const iniState = {
  email: "",
  emailError: "",
  seEnvio: false,
  seEnvioMensaje: "",
};
class RecuperarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      emailError: "",
      seEnvio: false,
      seEnvioMensaje: "",
    };
  }

  validate = () => {
    let emailError = "";
    let regex =
      /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,63}$/i;
    if (!regex.test(this.state.email)) {
      emailError = "Debe ingresar un email válido";
    }
    if (emailError) {
      this.setState({ emailError });
      return false;
    }
    return true;
  };

  seEnvio = (seEnvio) => {
    let seEnvioMensaje;
    if (!seEnvio) {
      seEnvioMensaje = "Este correo no esta vinculado con ninguna cuenta.";
    } else {
      seEnvioMensaje = "Ya se envió un correo para su recuperación.";
    }
    this.setState({ seEnvioMensaje });
  };

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    console.log(this.state);
    let seEnvio = false;
    if (isValid) {
      console.log(this.state);
      sendPasswordResetEmail(auth, this.state.email)
        .then(() => {
          let seEnvio = true;
          this.seEnvio(seEnvio);
        })
        .catch((error) => {
          this.seEnvio(seEnvio);
        });
      //limpiar el form
      this.setState(iniState);
    }
  };

  render() {
    return (
      <>
        <Form
          className="form-group formulario row"
          onSubmit={this.handleSubmit}
        >
          <h1 className="form-title">Recuperar Contraseña</h1>
          <div className="col">
            <FormGroup className=" label">
              <p className="parrafoCorreo text-center ">
                Por favor, introduce tu email donde enviaremos las instrucciones
                para que reestablezcas tu contraseña.
              </p>
              <Label className="IntroduceCorreo">Introduce tu correo: </Label>
              <div
                className={
                  this.state.emailError
                    ? "rounded-pill wrong-input"
                    : "rounded-pill"
                }
              >
                <Input
                  type="text"
                  placeholder="Email"
                  className="rounded-pill"
                  value={this.state.email}
                  onChange={this.handleChangeEmail}
                />
              </div>
              <div className="mensaje-error">{this.state.emailError}</div>
              <div className="mensaje-error">{this.state.seEnvioMensaje}</div>
            </FormGroup>
            <div className="label form-btn">
              <Button
                className="btn btn-light btn-lg rounded-pill no-shadow"
                type="submit"
              >
                Recuperar Contraseña
              </Button>
            </div>
          </div>
        </Form>
      </>
    );
  }
}
export default RecuperarComponent;
