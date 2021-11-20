import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../server/firebaseConfig";

const iniState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

class LogInComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  }

  togglePasswordVisibility = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  validate = () => {
    let emailError = "";
    let passwordError = "";

    if (!this.state.email) {
      emailError = "Debe ingresar un email.";
    } else {
      if (!this.state.email.includes("@")) {
        emailError = "Correo inválido, no contiene @.";
      } else {
        if (!this.state.password) {
          passwordError = "Debe ingresar una contraseña.";
        } else {
          if (this.state.password.length < 8) {
            passwordError = "La contraseña es muy corta.";
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
  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };
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
          alert("Datos inválidos.");
        });
      //limpiar el form
      this.setState(iniState);
    }
  };

  render() {
    const { showPassword } = this.state;

    return (
      <Form className="form-group formulario row" onSubmit={this.handleSubmit}>
        <h1 className="form-title"> Iniciar sesión</h1>
        <div className="col">
          <FormGroup className=" label">
            <Label>Correo electrónico:</Label>
            <div
              className={
                this.state.emailError
                  ? "rounded-pill wrong-input"
                  : "rounded-pill"
              }
            >
              <Input
                type="text"
                placeholder="Correo electrónico"
                className="rounded-pill"
                value={this.state.email}
                onChange={this.handleChangeEmail}
              />
            </div>
            <div className="mensaje-error">{this.state.emailError}</div>
          </FormGroup>

          <FormGroup className=" label">
            <Label> Contraseña:</Label>
            <div className="input-password">
              <div
                className={
                  this.state.passwordError
                    ? "rounded-pill wrong-input"
                    : "rounded-pill"
                }
              >
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  className="rounded-pill"
                  value={this.state.password}
                  onChange={this.handleChangePassword}
                />
              </div>
              <FontAwesomeIcon
                icon={faEye}
                size="2x"
                className={
                  showPassword
                    ? "icon open-eye rounded-pill"
                    : "icon rounded-pill"
                }
                onClick={this.togglePasswordVisibility}
              />
            </div>
            <div className="mensaje-error">{this.state.passwordError}</div>
          </FormGroup>
          <a href="/recuperar">Recuperar Contraseña</a>
          <div className="label form-btn">
            <Button
              type="submit"
              className="btn btn-light btn-lg rounded-pill no-shadow"
            >
              Ingresar
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}

export default LogInComponent;
