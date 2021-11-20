import React from "react";
import "../css/Recuperar.css";
import RecuperarComponent from "../components/RecuperarContraseña";
import Header from "../components/HeaderLogIn";

class RecuperarContraPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="contenedor-Recuperar">
          <RecuperarComponent />
        </div>
      </div>
    );
  }
}

export default RecuperarContraPage;
