import React, { useEffect, useState } from "react";
import { useSigninCheck } from "reactfire";
import { stories } from "../consts/stories";

export default function CardNivel({
  estado,
  titulo,
  num,
  modalId,
  functionChange,
}) {
  const { status, data } = useSigninCheck();

  const getBackground = (n) => {
    var bg = "";
    if (n === 1) {
      bg = "card-body card-nivel-a";
    } else if (n === 0) {
      bg = "card-body card-nivel-b";
    } else {
      bg = "card-body card-nivel-c";
    }
    return bg;
  };

  const [botonActivo, setBotonActivo] = useState(true); //o sea solo los bloqueados

  useEffect(() => {
    if (estado === -1) {
      setBotonActivo(true);
    } else {
      setBotonActivo(false);
    }
  });

  return (
    <div>
      <div className="card mb-3 card-nivel">
        {/*<div className="card-header text-center">{titulo}</div>*/}
        <div className={getBackground(estado)}>
          <div className="card-header">{num}</div>
          <h6 className="card-text">{titulo}</h6>
          {status === "loading" ? (
            <div>Cargando...</div>
          ) : (
            <button
              type="button"
              className="btn btn-light btn-sm btn-block"
              data-bs-toggle="modal"
              data-bs-target={`#${modalId}`}
              onClick={() => {
                functionChange(stories[num - 1]);
              }}
              disabled={botonActivo}
            >
              Comenzar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
