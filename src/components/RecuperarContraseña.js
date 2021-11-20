import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const iniState = {
  email: "",
  emailError: "",
};

const auth = getAuth();

class RecuperarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      emailError: "",
    };
  }

  forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        this.alertEnviado();
        return;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error " + errorCode + ": " + errorMessage);
      });
  };

  togglePasswordVisibility = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  validate = () => {
    let emailError = "";
    let passwordError = "";

    if (!this.state.email) {
      emailError = "Debe ingresar un email";
    } else {
      if (!this.state.email.includes("@")) {
        emailError = "Correo invalido, no contiene @";
      } else {
        if (!this.state.password) {
          passwordError = "Debe ingresar una contraseña";
        } else {
          if (this.state.password.length < 8) {
            passwordError = "La contraseña es muy corta";
          }
        }
      }
    }
    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }

    return true;
  };

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  alertEnviado() {
    alert("Ya se envió un correo para su recuperación");
    return;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    console.log(this.state);
    if (isValid) {
      console.log(this.state);
      signInWithEmailAndPassword(auth, this.state.email, this.state.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(`Current user: ${user}`);
          window.location.assign("/");
        })
        .catch((error) => {
          alert("Datos inválidos");
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
          <h1 className="form-title">Recuperar contraseña</h1>
          <div className="col">
            <FormGroup className=" label">
              <Label>Correo Electronico</Label>
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
            </FormGroup>
            <div className="label form-btn">
              <Button
                className="btn btn-light btn-lg rounded-pill no-shadow"
                type="submit"
                onClick={() => this.forgotPassword(this.state.email)}
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
