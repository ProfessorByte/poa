import React from "react";
import "../css/Vocabulario.css"
export default function Card_Vocabulario( {
  tema,titulo,
  descripcion
}){ 
return(
< div className="container-fluid">
    <div id="bootstrap-overrides" className="card ">
          <h3 className="card-header text-success">Tema:{tema}</h3>
          <h4 id="bootstrap-overrides-title" className="card-title ms-3 mt-3">{titulo}</h4>
          <h6 className="card-text text-white ms-3 mb-3 me-2">{descripcion}</h6>
    </div>
</div>

);
            
}
