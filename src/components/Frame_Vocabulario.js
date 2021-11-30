import React, { useState, useEffect } from "react";
import Card_Vocabulario from "./Card_Vocabulario";
import { getVocabularioQuery } from "../server/api";
import { useFirestoreCollectionData } from "reactfire";
export default function FrameVocabulario(props){
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
                titulo={props.searchTerm}
                descripcion={card.descripcion}
              />
            </div>
            ))
        )}
            </ >

          );

}