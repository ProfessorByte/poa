import React from "react";
import Card_Vocabulario from "./Card_Vocabulario";

export default function FrameVocabulario(props) {
  return (
    <>
      {props.status === "loading" ? (
        <div className="container-fluid ">
          <Card_Vocabulario titulo="Cargando..." descripcion="Cargando..." />
        </div>
      ) : props.listVocabulario.length != 0 ? (
        props.listVocabulario.map((card, index) => (
          <div key={index} className="container-fluid">
            <Card_Vocabulario
              tema={card.tema}
              titulo={card.titulo}
              descripcion={card.descripcion}
            />
          </div>
        ))
      ) : (
        <div className="container-fluid">
          <Card_Vocabulario
            titulo=":("
            descripcion="Lo sentimos, no pudimos encontrar lo que estaba buscando. Revise si escribió correctamente y por favor intente de nuevo."
          />
        </div>
      )}
    </>
  );
}
