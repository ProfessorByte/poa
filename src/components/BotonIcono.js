import React from "react";
import "../css/ButtonsUser.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const BotonIcono = () => {
  <link rel="stylesheet" href="css/font-awesome.min.css"></link>
  return (
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <FontAwesomeIcon icon={faUser} size="2.5x" />
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Portugal</a>
    <a class="dropdown-item" href="#">Darse de baja</a>
    <a class="dropdown-item" href="#">Cerrar Sesion </a>
  </div>
</div>
  );
}
export default BotonIcono;