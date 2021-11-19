import React from "react";
import CardNivel from "./CardNivel";
import Nivs from "../nivs.json";

export default function CardsNivel({ minId, maxId, modalId, functionChange }) {
  const closedIntervalNivs = (listNivs, minId, maxId) => {
    return listNivs.filter((nivel) => nivel.id >= minId && nivel.id <= maxId);
  };

  return (
    <div className="container flex-container">
      <div className="row">
        {closedIntervalNivs(Nivs, minId, maxId).map((post) => {
          return (
            <div key={`card${post.id}`} className="col-md-3 flex">
              <CardNivel
                estado={post.estado}
                titulo={post.titulo}
                num={post.id}
                modalId={modalId}
                functionChange={functionChange}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
