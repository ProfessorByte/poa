import React from "react";
import '../css/PaginaPrincipal.css'

const Cards =(props)=>{
    const {imagen,title,descripcion}=props
    return(
        <div className="card text-black bg-secondary mb-3" >
            <h5 className="card-title text-center ">{title}</h5>
            <img src={imagen} className="card_main_imagen" alt="..."></img>
            <div className="card-body">
                <p className="card-text text-center">{descripcion}</p>
            </div>
        </div>

    )
}
export default Cards