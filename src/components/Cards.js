
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import libroPNG from "../assets/images/libroPNG.png"
import '../css/Cards.css'

import { Container } from "react-bootstrap";
const Cards =(props)=>{
    const {tituloReferncia,temas,link,autor_NombrePagina,tipo,}=props
    return(
        <div>
            <Container>
                <figure className="position-relative">
                    <img src ={libroPNG} alt="libro" className="img-fluid" />
                </figure >
                <figcaption>

                    <div className="card"  style={{border: "#FAF4F6"}}>
                        <div className="card-bodyCard">
                            <h5 className="card-title">{tituloReferncia}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{temas}</h6>
                            <h7 className="card-title">{autor_NombrePagina}</h7>
                            <br/>
                            <h7 className="card-text">{tipo}</h7>
                            <br/>
                            <a href={link} target="_blank" className="card-link" style={{link}}> Link</a>
                        </div>
                    </div>
                </figcaption>
            </Container>
        </div>

    )
}
export default Cards