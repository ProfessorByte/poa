import React from "react";
import "../css/Repositorio.css";
import ButtonsOfRepo from "../components/ButtonsOfRepo";
import HeaderMainPage from "../components/HeaderRepositorio";
import FooterRepositorio from "../components/FooterRepositorio";

function Repositorio() {
  return (
    <>
      <div className="contenedor">
        <HeaderMainPage />
        <div>
          <div className="bienvenida">
            <p>REPOSITORIO</p>
            <h2>BIENVENIDO AL APARTADO </h2>
            <h2>PARA ACLARAR TUS</h2>
            <h2>CONOCIMIENTOS!</h2>
          </div>
          <div className="texto">
            <p>Tenemos diferentes opciones para que puedas</p>
            <p>reforzar tus conocimientos dentro de la pagina</p>
          </div>
          <div className="Botones" style={{ marginTop: -150 }}>
            <ButtonsOfRepo />
          </div>
        </div>
      </div>
      <div></div>
      <FooterRepositorio />
    </>
  );
}
export default Repositorio;
