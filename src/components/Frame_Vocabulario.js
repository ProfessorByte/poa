import React, { useState, useEffect } from "react";
import Card_Vocabulario from "./Card_Vocabulario";
import { getVocabularioQuery } from "../server/api";
import { useFirestoreCollectionData } from "reactfire";
import "../css/Vocabulario.css"
export default function FrameVocabulario(){
  const [listVocabulario, setListVocabulario] = useState([]);
  const { status, data: cards } = useFirestoreCollectionData(
    getVocabularioQuery()
  );

  useEffect(() => {
    if (status !== "loading") {
      setListVocabulario(cards);
    }
  }, [status, cards]);

          return(
            <>
            {status === "loading" ? (
          <div className="container-fluid ">
            <Card_Vocabulario titulo="Cargando..." descripcion="Cargando..." />
          </div>
        ) : (
            listVocabulario.map((card) => (
              <div key={card.id} className="container-fluid">
              <Card_Vocabulario
                titulo={card.titulo}
                descripcion={card.descripcion}
              />
            </div>
            ))
        )}
            </ >

          );

}