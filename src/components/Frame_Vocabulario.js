import React from "react";
import Card_Vocabulario from "./Card_Vocabulario";
export default function FrameVocabulario(){
          return(
            <div className="container bg-black ">
              <Card_Vocabulario
                titulo="Palabra 1"
                descripcion="Esta Palabra significa algo 1"
              />
              <Card_Vocabulario
                titulo="Palabra 2"
                descripcion="Esta Palabra significa algo 2"
              />
              <Card_Vocabulario
                titulo="Palabra 3"
                descripcion="Esta Palabra significa algo 3"
              />
            </div>
          );

}