
import React from "react";
import libroPNG from "../assets/images/libroPNG.png"
import '../css/Cards.css'

const Cards =(props)=>{
    const {tituloReferncia,temas,link,autor_NombrePagina,tipo,}=props
    return(
        <div class="containerCard"> 
        
           <img src ={libroPNG} alt="libro"  /> 
           <div class="centeredCard">
        
        <div className="card" style={{width:"18rem",border:"#FAF4F6"}}>
        <div className = "card-bodyCard">    
        <h5 className="card-title">{tituloReferncia}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{temas}</h6>
        <h7 className="card-title">{autor_NombrePagina}</h7>
        <h7 className="card-text">{tipo}</h7>
        
        <br/>
        <a href={link} target="_blank" class="card-link" style={{link}}> Link</a>
        </div>
    </div> 
    </div>
        
        
    </div>
       
)
}
export default Cards
