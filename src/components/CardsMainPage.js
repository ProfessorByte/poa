import React from "react";
import '../css/PaginaPrincipal.css'
import ReactDOM from "react-dom";



const Cards =(props)=>{
    const {imagen,title,descripcion,funcion}=props
    return(
        <div className="card text-black bg-secondary mb-3 tamaño_card ">
            <h5 className="card-title text-center tamaño ">{title}</h5>
            <img src={imagen} onClick={funcion} className="card_main_imagen  p-3  " alt="..."></img>
            <div className="card-body card-bodyMain">
                <p className="card-text text-center mintamaño">{descripcion}</p>
            </div>
        </div>

    )
}

export default Cards;