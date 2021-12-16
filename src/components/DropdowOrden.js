import React, { useState, useEffect } from "react";
import "../css/DropdownVoca.css";

export const DropdownVocabulario = ({ funcionOrden }) => {
  const [valuesOrder, setValuesOrder] = useState({
    platform: "alfabeticamente",
    platform2: "ascendenete",
  });

  useEffect(() => {
    funcionOrden(valuesOrder.platform, valuesOrder.platform2);
  }, [valuesOrder]);

  const handleChange = (event) => {
    setValuesOrder({ ...valuesOrder, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="dropdown text-end cuadro_general">
        <button
          className="btn btn-secondary dropdown-toggle purple-vocabulario"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Orden
        </button>
        <ul
          className="dropdown-menu text-start opciones container-fluid p-2"
          style={{ width: "200px" }}
        >
          <h1 className="SeccionDrop text-center">Orden</h1>
          <div id="orden" value={valuesOrder.platform} onChange={handleChange}>
            <div className="row">
              <div className="col">
                <label htmlFor="opcion1" className="opcionOrden">
                  Alfabéticamente
                </label>
              </div>
              <div className="col">
                <input
                  id="opcion1"
                  value="alfabeticamente"
                  name="platform"
                  type="radio"
                  defaultChecked="checked"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-auto">
                <label htmlFor="opcion2" className="opcionOrden">
                  Por Temas
                </label>
              </div>
              <div className="col">
                <input
                  id="opcion2"
                  value="porTemas"
                  name="platform"
                  type="radio"
                />
              </div>
            </div>
          </div>
          <hr className="dropdown-divider" />
          <h1 className="SeccionDrop text-center">Opcion Vista</h1>
          <div id="vista" value={valuesOrder.platform2} onChange={handleChange}>
            <div className="row">
              <div className="col">
                <label htmlFor="opcion3" className="opcionOrden">
                  Ascendente
                </label>
              </div>
              <div className="col">
                <input
                  id="opcion3"
                  value="ascendente"
                  name="platform2"
                  type="radio"
                  defaultChecked="checked"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="opcion4" className="opcionOrden">
                  Descendente
                </label>
              </div>
              <div className="col">
                <input
                  id="opcion4"
                  value="descendente"
                  name="platform2"
                  type="radio"
                />
              </div>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};
