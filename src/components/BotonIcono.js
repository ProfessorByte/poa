import React, {useState} from "react";
import "../css/ButtonsUser.css"
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";*/
import Abeja from "../assets/Avatars_poa/abejitas.PNG"
import Ballena from "../assets/Avatars_poa/BallenaTumblr.PNG"
import Lampara from "../assets/Avatars_poa/Lampara.PNG"
import Librito from "../assets/Avatars_poa/librito.PNG"
import Mariposa from "../assets/Avatars_poa/MariposaTraicionera.PNG"
import Mochila from "../assets/Avatars_poa/mochilaRosas.PNG"
import Poscion from "../assets/Avatars_poa/posicion magica.PNG"
import Prt from "../assets/Avatars_poa/prt.PNG"
import Submarino from "../assets/Avatars_poa/submarino.PNG"
import TocaDiscos from "../assets/Avatars_poa/TocaDiscos.PNG"
import Torre from "../assets/Avatars_poa/Torre.PNG"
import Rafael from "../assets/Avatars_poa/Tortuguita.PNG"
/*import cambiar from "./CambioIconos"*/
const BotonIcono = () => {
  const [icono, setIcono] = useState(Abeja)
  const imagenAleatoria=()=>{
    var url = new Array();
    url [0]= Abeja;
    url [1]= Ballena;
    url [2]= Lampara;
    url [3]= Librito;
    url [4]= Mariposa;
    url [5]= Mochila;
    url [6]= Poscion;
    url [7]= Prt;
    url [8]= Submarino;
    url [9]= TocaDiscos;
    url [10]= Torre;
    url [11]= Rafael;
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

