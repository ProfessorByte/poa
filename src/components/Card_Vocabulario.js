import React from "react";
export default function Card_Vocabulario( {
  tema,titulo,
  descripcion
}){ 
return(
< div className="container-fluid">
    <div className="card bg-dark">
          <h2 className="card-header text-success">Tema:{tema}</h2>
          <h4 className="card-title text-white ms-3 mt-3">{titulo}</h4>
          <h6 className="card-text text-white m-3">{descripcion}</h6>
    </div>
</div>

);
            
}