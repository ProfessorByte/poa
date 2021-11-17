import React from "react";
import "../css/ButtonsUser.css"
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";*/
import Jake from "../assets/images/jake.png"
import Bender from "../assets/images/bender.png"
import imagenAleatoria from "./CambioIconos";
/*import cambiar from "./CambioIconos"*/
const BotonIcono = () => {
  <link rel="stylesheet" href="css/font-awesome.min.css"></link>
  return (
    <div class="dropdown dropstart">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
     <img id="iconu" src={Jake} width="150px" alt=""></img> 
    </button>
  <div class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
  <a class="dropdown-item" href="#" onClick={imagenAleatoria} >Cambiar Icono</a>
    <a class="dropdown-item" href="#">Cerrar Sesion</a>
  </div>
</div>
  );
}
export default BotonIcono;

