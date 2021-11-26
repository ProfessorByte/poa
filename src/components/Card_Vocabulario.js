import React from "react";
export default function Card_Vocabulario( {
  titulo,
  descripcion
}){ 
return(
< div className="container-fluid">
    <div className="card bg-dark mb-1">
          <div className="card-header text-success ms-2">{titulo}</div>
          <h2 className="card-text text-white ms-5">{descripcion}</h2>
    </div>
</div>

);
            
}