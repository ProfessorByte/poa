import React from "react";
import "../css/Cards.css";

const Cards = (props) => {
  const { tituloReferencia, temas, link, autor_NombrePagina, tipo } = props;
  return (
    <div className="wrapper">
      <div className="card">
        <div className="card-bodyCard">
          <h5 className="card-title">{tituloReferencia}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{temas}</h6>
          <h6 className="card-title">{autor_NombrePagina}</h6>
          <h6 className="card-text">{tipo}</h6>
          <a
            href={link}
            target="_blank"
            className="card-link"
            rel="noreferrer"
            style={{ link }}
          >
            Link
          </a>
        </div>
      </div>
    </div>
  );
};
export default Cards;
