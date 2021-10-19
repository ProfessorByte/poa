import React from "react";
import libroPNG from "../libroPNG.png"
const Cards =(props)=>{
    const {tituloReferncia,temas,link,autor_NombrePagina,tipo,}=props
    return(
        <div class="container home ">
            
    <div className="card" style={{width:"18rem",border:"1px solid black"}}>
        <div className = "card-body">
            
        <h5 className="card-title">{tituloReferncia}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{temas}</h6>
        <img src ={libroPNG} alt="libro"/> 
        <h7 className="card-title">{autor_NombrePagina}</h7>
        <h7 className="card-text">{tipo}</h7>
        
        <br/>
        <a href="#"class="card-link">{link}</a>
        </div>
    </div>
    </div>
)
}
export default Cards
