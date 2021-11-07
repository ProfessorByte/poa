import React from "react";
import '../css/PaginaPrincipal.css'

const Cards =(props)=>{
    const {title,descripcion}=props
    return(

    <div className="card text-black bg-secondary mb-3" >
        <div className="card-body">
            <h5 className="card-title  text-center text">{title}</h5>
            <p className="card-text text-center">{descripcion}</p>
        </div>
    </div>
    )
}
export default Cards