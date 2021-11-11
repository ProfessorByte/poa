import React, { Component } from "react";
import "../App.css";
import ButtonIni from "./ButtonIni";
import "../css/ButtonsUser.css"
export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light navbar-expand-sm navbar-stylerepo">
          <div className="container justify-content-center">
              <strong>
                <h1>POA</h1>
              </strong>            
          </div>
          <div className="botonIni">
                <ButtonIni/> 
          </div>
        </nav>
      </>
    );
  }
}
