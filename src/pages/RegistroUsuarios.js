import React from "react";
import "../css/RegistroUsuarios.css";
import Header from "../components/HeaderLogIn";
import Footer from "../components/FooterLogin";
import RegistroComponente from "../components/RegistroComponent";
class Registro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <div className="contenedor-registro">
          <RegistroComponente/>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Registro;