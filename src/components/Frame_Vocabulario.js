import React, { useState, useEffect } from "react";
import Card_Vocabulario from "./Card_Vocabulario";

import "../css/Vocabulario.css"
import { render } from "@testing-library/react";
export default function FrameVocabulario({listVocabulario,status}){
   
        
          return(
            <>
            {status === "loading" ? (
          <div className="container-fluid ">
            <Card_Vocabulario titulo="Cargando..." descripcion="Cargando..." />
          </div>
        ) : (
            listVocabulario.filter((card) => {
              if(props.searchTerm ==""){
                return card
              }else if (card.titulo.toLowerCase().includes(props.searchTerm.toLowerCase())){
                return card
              }
            }).map((card) => (
              <div key={card.id} className="container-fluid">
              <Card_Vocabulario

                titulo={card.titulo}
                descripcion={card.descripcion}
              />
            </div>
            ))
        )}
            </ >

          
 )
}