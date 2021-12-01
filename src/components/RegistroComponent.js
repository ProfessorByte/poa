import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "../css/RegistroUsuarios.css";
const iniState = {
  password: "",
  passwordError: "",
};
class RegistroComponente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      showPassword1:false,
      password: "",
      passwordError: "",
    };
  }
  togglePasswordVisibility = () => {
    const { showPassword,} = this.state;
    this.setState({ showPassword: !showPassword });
  };
  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };
render(){
  const{ showPassword, }=this.state;
return(
<Form className="form-group formularior row" onSubmit={this.handleSubmit} >
  <h1 className="titulo">Comienza La Aventura</h1>
  <div className="content">
    <FormGroup className="label">
      <label>Nombre</label>
      <Input
      type="text"
      placeholder="Registre su Nombre"
      className="rounder-pill"
      id="llenado"
      />
    </FormGroup>
    <FormGroup className="label">
      <label>Correo Electronico</label>
      <Input
      type="text"
      placeholder="Registre su Correo"
      className="rounder-pill"
      id="llenado"
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
      placeholder="Registre su Contraseña"
      className="rounder-pill1"
      value={this.state.password}
      onChange={this.handleChangePassword}
      id="llenado"
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
      <label>Confirmar Contraseña:</label>
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
      placeholder="Verifique Su Contraseña"
      className="rounder-pill"
      id="llenado"
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
    <div className="registroboton form-btn">
    <Button
    type="submit"
    className="btn btn-light btn-lg rounded-pill" id="botonregistro"
    >
    Registrarse
    </Button>
    </div>
  </div>
</Form>

 )
 }
}
export default RegistroComponente;