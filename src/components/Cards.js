
import React from "react";
import libroPNG from "../assets/images/libroPNG.png"
import '../css/Cards.css'
import { Container } from "react-dom";
const Cards =(props)=>{
    const {tituloReferncia,temas,link,autor_NombrePagina,tipo,}=props
    return(
        <div>
            <Container>
        <figure className="containerCard"> 
           <img src ={libroPNG} alt="libro" className="img-fluid" /> 
        <figure className="centeredCard">
        </Container>
        <div className="card" style={{width:"18rem",border:"#FAF4F6"}}>
        <div className = "card-bodyCard">    
        <h5 className="card-title">{tituloReferncia}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{temas}</h6>
        <h7 className="card-title">{autor_NombrePagina}</h7>
        <br/>
        <h7 className="card-text">{tipo}</h7>
        <br/>
        <a href={link} target="_blank" class="card-link" style={{link}}> Link</a>
        </div>
    </div> 
    </div>
    </div>
        
        
        </div>
       
)
}
export default Cards
