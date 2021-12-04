import React from "react";
import Card_Vocabulario from "./Card_Vocabulario";

export default function FrameVocabulario(props) {
  return (
    <>
      {props.status === "loading" ? (
        <div className="container-fluid ">
          <Card_Vocabulario titulo="Cargando..." descripcion="Cargando..." />
        </div>
      ) : (
        props.listVocabulario
          .filter((card) => {
            if (props.searchTerm == "") {
              return card;
            } else if (
              card.titulo.toLowerCase().includes(props.searchTerm.toLowerCase())
            ) {
              return card;
            }
          })
          .map((card) => (
            <div key={card.id} className="container-fluid">
              <Card_Vocabulario
                tema={card.tema}
                titulo={card.titulo}
                descripcion={card.descripcion}
              />
            </div>
          ))
      )}
    </>
  );
}
