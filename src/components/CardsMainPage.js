import React from "react";
import "../css/PaginaPrincipal.css";




const Cards =(props)=>{
    const {imagen,title,descripcion,funcion}=props
    return(
        <div className="card text-black bg-secondary tamaño_card ">
            <h5 className="card-title text-center tamaño ">{title}</h5>
            <img src={imagen} onClick={funcion} className="card_main_imagen   " alt="..."></img>
            <div className="card-body card-bodyMain">
                <p className="card-text text-center mintamaño">{descripcion}</p>
            </div>
        </div>

    )
}

export default Cards;
