import React, { useState, useEffect } from "react";
import Header from "../components/HeaderVideos&Biblio";
import "../css/Vocabulario.css"
import FooterVocabulario from "../components/FooterRepositorio";
import FrameVocabulario from "../components/Frame_Vocabulario";
export default function Vocabulario() {
 
  return (

    <div>
      <Header />
      <div className="fondoVocabulario">
        
          <div className="content-wrap mb-3">
            <div className="container">
              <div className="row mt-3">
                <div className="col">
                  <h1>Vocabulario</h1>
                </div>
              </div>
            </div>
            <FrameVocabulario />
          </div>
          <FooterVocabulario />
       


        </div>
      </div>
      );
  }

