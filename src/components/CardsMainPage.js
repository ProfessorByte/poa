import React from "react";
import '../css/PaginaPrincipal.css'

const Cards =(props)=>{
    const {title,descripcion}=props
    return(
        <div className="wrapper">


            <div className="card">
                <div className="card-bodyCard">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{descripcion}</h6>
                </div>
            </div>
        </div>

    )
}
export default Cards