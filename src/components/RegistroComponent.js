import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../css/RegistroUsuarios.css";
import { addUsers } from "../server/api";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const iniState = {
  password: "",
  passwordError: "",
};

class RegistroComponente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      showPassword1: false,
      email: "",
      nombre: "",
      password: "",
      confirmPassword: "",
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
  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      alert("Contraseñas Distintas");
      //this.state.error = "Contraseñas Distintas";
    } else if (this.state.password.length < 6) {
      //this.state.error = "Contraseña demaciado corta";
      alert("Contraseña demaciado corta");
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
          alert("El correo ya esta registrado, ingresa otro");
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage, errorCode);
        });
    }
  };
  render() {
    const { showPassword } = this.state;
    const { showPassword1 } = this.state;
    return (
      <Form className="form-group formularior row" onSubmit={this.handleSubmit}>
        <h1 className="titulo">Comienza La Aventura</h1>
        <div className="content">
          <FormGroup className="label">
            <label>Nombre</label>
            <Input
              type="text"
              placeholder="Registre su nombre"
              className="rounder-pill"
              onChange={this.handleChangeNombre}
              id="llenadoNombre"
              required
            />
          </FormGroup>
          <FormGroup className="label">
            <label>Correo electronico</label>
            <Input
              type="text"
              placeholder="Registre su correo"
              className="rounder-pill"
              onChange={this.handleChangeEmail}
              id="llenadoCorreo"
              required
            />
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
                  className="rounder-pill"
                  value={this.state.password}
                  onChange={this.handleChangePassword}
                  id="llenadoContra"
                  required
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
          </FormGroup>
          <FormGroup className="label">
            <label>Confirmar contraseña:</label>
            <div className="input-password">
              <div
                className={
                  this.state.passwordError
                    ? "rounded-pill wrong-input"
                    : "rounded-pill1"
                }
              >
                <Input
                  type={showPassword1 ? "text" : "password"}
                  placeholder="Verifique su contraseña"
                  className="rounder-pill1"
                  value={this.state.confirmPassword}
                  onChange={this.handleChangeConfirmPassword}
                  id="llenadoConfir"
                  required
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
