import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../css/RegistroUsuarios.css";
import { createNewUser } from "../server/api";

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
      passwordError: "",
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
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  handleChangeNombre = (event) => {
    this.setState({ nombre: event.target.value });
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
          </FormGroup>
          <div className="registroboton form-btn">
            <Button
              type="submit"
              className="btn btn-light btn-lg rounded-pill"
              id="botonregistro"
              onClick={createNewUser(
                this.state.email,
                this.state.password,
                this.state.nombre
              ), <Link to="/poa" />}
            >
              Registrarse
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}
export default RegistroComponente;
