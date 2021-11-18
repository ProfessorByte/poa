import React from "react";
import "../css/LogIn.css";
import RecuperarComponent from "../components/RecuperarContraseña";
import Header from "../components/HeaderLogIn";


class RecuperarContraPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <div className="contenedor-log-in ">
          <RecuperarComponent/>
        </div>
      </div>
    );
  }
}

export default RecuperarContraPage;
