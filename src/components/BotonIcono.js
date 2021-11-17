import React, {useState} from "react";
import "../css/ButtonsUser.css"
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";*/
import Jake from "../assets/images/jake.png"
import Bender from "../assets/images/bender.png"
import Palta from "../assets/images/palta.png"
import Platano from "../assets/images/platano.png"
/*import cambiar from "./CambioIconos"*/
const BotonIcono = () => {
  const [icono, setIcono] = useState(Bender)
  const imagenAleatoria=()=>{
    var url = new Array();
    url [0]= Bender;
    url [1]= Jake;
    url [2]= Palta;
    url [3]= Platano;
    var azar = Math.floor(Math.random() * url.length);
    return url[azar];
  }
  return (
    <div class="dropdown dropstart">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
     <img id="iconu" src={icono} width="150px" alt=""></img> 
    </button>
  <div class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
  <a class="dropdown-item" href="#" onClick={()=>{
    setIcono(imagenAleatoria());
  }} >Cambiar Icono</a>
    <a class="dropdown-item" href="#">Cerrar Sesion</a>
  </div>
</div>
  );
}
export default BotonIcono;

