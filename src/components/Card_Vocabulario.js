import React from "react";
export default function Card_Vocabulario( {
  titulo,
  descripcion
}){ 
return(
< div className="container-fluid">
    <div className="card bg-dark">
          <div className="card-header text-success display-6">{titulo}</div>
          <h6 className="card-text text-white m-3">{descripcion}</h6>
    </div>
</div>

);
            
}