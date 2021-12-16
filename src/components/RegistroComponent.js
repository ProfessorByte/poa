import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import "../css/RegistroUsuarios.css";
import { addUsers } from "../server/api";
const iniState = {
  password: "",
  passwordError: "",
  emailError: "",
  email: "",
  nombre: "",
  nombreError: "",
  confirmPassword: "",
};

class RegistroComponente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      showPassword1: false,
      email: "",
      emailError: "",
      nombre: "",
      nombreError: "",
      password: "",
      confirmPassword: "",
      confirmPasswordError: "",
      passwordError: "",
      error: "",
    };
  }
  togglePasswordVisibility = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };
  togglePasswordVisibility1 = () => {
    const { showPassword1 } = this.state;
    this.setState({ showPassword1: !showPassword1 });
  };
  validate = () => {
    let nombreError = "";
    let emailError = "";
    let passwordError = "";
    let confirmPasswordError = "";
    let regex =
      /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,63}$/i;
    if (!this.state.nombre) {
      nombreError = "Debe registrar un nombre";
    }
    if (this.state.nombre.length > 100) {
      nombreError = "Escoja un nombre mas corto";
    }
    if (!regex.test(this.state.email)) {
      emailError = "Debe registrar un email válido";
    }
    if (this.state.password.length < 8) {
      passwordError = "La contraseña es muy corta.";
    }
    if (!this.state.password) {
      passwordError = "Debe registrar una contraseña.";
    }
    if (!this.state.confirmPassword) {
      confirmPasswordError = "Debe verificar su contraseña.";
    }
    if (this.state.password !== this.state.confirmPassword) {
      confirmPasswordError = "Las contraseñas son distintas";
    }
    if (emailError || passwordError || nombreError || confirmPasswordError) {
      this.setState({
        emailError,
        passwordError,
        nombreError,
        confirmPasswordError,
      });
      return false;
    }

    return true;
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };
  handleChangeConfirmPassword = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handleChangeNombre = (event) => {
    this.setState({ nombre: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    console.log(this.state);
    if (isValid) {
      const auth = getAuth();
      let flag = false;
      createUserWithEmailAndPassword(
        auth,
        this.state.email,
        this.state.password
      )
        .then(async (userCredential) => {
          flag = true;
          const user = userCredential.user;
          await addUsers(this.state.nombre, user.uid);
          window.location.assign("/poa");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage, errorCode);
          if (
            errorCode === "auth/email-already-in-use" ||
            errorCode === "auth/email-already-exists"
          ) {
            this.setState({
              emailError: "El correo ya esta registrado, ingresa otro",
            });
          }
        });
      this.setState(iniState);
    }
  };
  /*
  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    console.log(this.state);
    if (isValid) {
      console.log(this.state);
      signInWithEmailAndPassword(auth, this.state.email, this.state.password, this.state.nombre, this.state.confirmPassword, this.state.contraseñas)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(`Current user: ${user}`);
          window.location.assign("/");
        })
        .catch((error) => {
        });
    }
  };
*/
  /*
   handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      alert("Contraseñas Distintas");
      //this.state.error = "Contraseñas Distintas";
    } else if (this.state.password.length < 6) {
      //this.state.error = "Contraseña demasiado corta";
      alert("Contraseña demasiado corta");
    } else {
      const auth = getAuth();
      let flag = false;
      createUserWithEmailAndPassword(
        auth,
        this.state.email,
        this.state.password
      )
        .then(async (userCredential) => {
          flag = true;
          const user = userCredential.user;
          await addUsers(this.state.nombre, user.uid);
          window.location.assign("/poa");
        })
        .catch((error) => {
          //this.state.error = "El correo ya esta registrado, ingresa otro";
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage, errorCode);
          if (
            errorCode === "auth/email-already-in-use" ||
            errorCode === "auth/email-already-exists"
          ) {
            alert("El correo ya esta registrado, ingresa otro");
          }
        });
        this.setState(iniState);
    }
  };
*/
  render() {
    const { showPassword } = this.state;
    const { showPassword1 } = this.state;
    return (
      <Form className="form-group formularior row" onSubmit={this.handleSubmit}>
        <h1 className="titulo">Comienza La Aventura</h1>
        <div className="content">
          <FormGroup className="label">
            <label>Nombre</label>
            <div
              className={
                this.state.nombreError
                  ? "rounded-pill wrong-input"
                  : "rounded-pill"
              }
            >
              <Input
                type="text"
                placeholder="Registre su nombre"
                className="rounded-pill"
                value={this.state.nombre}
                onChange={this.handleChangeNombre}
                id="llenadoNombre"
              />
            </div>
            <div className="mensaje-error">{this.state.nombreError}</div>
          </FormGroup>
          <FormGroup className="label">
            <Label>Correo electrónico</Label>
            <div
              className={
                this.state.emailError
                  ? "rounded-pill wrong-input"
                  : "rounded-pill"
              }
            >
              <Input
                type="text"
                placeholder="Registre su correo"
                className="rounded-pill"
                value={this.state.email}
                onChange={this.handleChangeEmail}
                id="llenadoCorreo"
              />
            </div>
            <div className="mensaje-error">{this.state.emailError}</div>
          </FormGroup>
          <FormGroup className="label">
            <label>Contraseña:</label>
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
                  placeholder="Registre su contraseña"
                  className="rounded-pill"
                  value={this.state.password}
                  onChange={this.handleChangePassword}
                  id="llenadoContra"
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
          <FormGroup className="label">
            <label>Confirmar contraseña:</label>
            <div className="input-password">
              <div
                className={
                  this.state.passwordError
                    ? "rounded-pill wrong-input"
                    : "rounded-pill"
                }
              >
                <Input
                  type={showPassword1 ? "text" : "password"}
                  placeholder="Verifique su contraseña"
                  className="rounded-pill"
                  value={this.state.confirmPassword}
                  onChange={this.handleChangeConfirmPassword}
                  id="llenadoConfir"
                />
              </div>
              <FontAwesomeIcon
                icon={faEye}
                size="2x"
                className={
                  showPassword1
                    ? "icon open-eye rounded-pill"
                    : "icon rounded-pill"
                }
                onClick={this.togglePasswordVisibility1}
              />
            </div>
            <div className="mensaje-error">
              {this.state.confirmPasswordError}
            </div>
          </FormGroup>
          <div className="registroboton form-btn">
            <Button
              type="submit"
              className="btn btn-light btn-lg rounded-pill"
              id="botonregistro"
            >
              Registrarse
            </Button>
            <h1>{this.state.error}</h1>
          </div>
        </div>
      </Form>
    );
  }
}
export default RegistroComponente;
