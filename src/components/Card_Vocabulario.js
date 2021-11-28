import React from "react";
import "../css/Vocabulario.css"
export default function Card_Vocabulario( {
  titulo,
  descripcion
}){ 
return(
< div className="container-fluid">
    <div id="bootstrap-overrides" className="card ">
          <div id="bootstrap-overrides-title" className="card-header  display-6">{titulo}</div>
          <h6 className="card-text text-white m-3">{descripcion}</h6>
    </div>
</div>

);
            
}