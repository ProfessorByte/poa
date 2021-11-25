import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
class RegistroComponente extends React.Component {

render(){
return(
<Form className="form-group formulario row">
  <h1 className="titulo">Registrarse</h1>
  <div className="contenedors">
    <FormGroup className="label">
      <label>Nickname</label>
      <Input
      type="text"
      placeholder="Registre su Nombre o Nickname"
      className="rounder-pill"
      />
    </FormGroup>
    <FormGroup className="label">
      <label>Correo Electronico</label>
      <Input
      type="text"
      placeholder="Registre su Correo"
      className="rounder-pill"
      />
    </FormGroup>
    <FormGroup className="label">
      <label>Contraseña</label>
      <Input
      type="text"
      placeholder="Registre su Contraseña"
      className="rounder-pill"
      />
    </FormGroup>
    <FormGroup className="label">
      <label>Confirmar Contraseña</label>
      <Input
      type="text"
      placeholder="Repita la Contraseña Registrada"
      className="rounder-pill"
      />
    </FormGroup>
    <Button
    type="submit"
    className="btn btn-light btn-lg rounded-pill"
    >
    Registrarse
    </Button>
  </div>
</Form>

 )
 }
}
export default RegistroComponente;