import React from "react";
import "../css/Repositorio.css"
import ButtonsOfRepo from "../components/ButtonsOfRepo";

function Repositorio() {
  return (      
    <div>
      <body id="img"></body>
     <h2 id="p1">BIENVENIDO AL APARTADO </h2>
     <h3 id="p2">PARA ACLARAR TUS</h3>
     <h4 id="p3">CONOCIMIENTOS</h4>
     <p id="d1">Tenemos diferentes opciones para que puedas reforzar tus conocimientos dentro de la pagina</p>
     <div  style={{marginTop: -80}}>
       <ButtonsOfRepo /> 
      </div>
    </div>      
  );
}
export default Repositorio;