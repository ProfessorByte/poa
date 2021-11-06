import React, { Component } from "react";
import { ButtonBack } from "./ButtonBackComponent";
import "../App.css";
import ButtonIni from "./ButtonIni";
export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light navbar-expand-sm navbar-styles">
          <div className="container-fluid d-flex justify-content-between">
            <ButtonBack dir="/poa" />
            <strong>
              <h1>POA</h1>
            </strong> 
               <div className="botonIni">
                <ButtonIni/> 
               </div>
            <div className="offset-lg-1 offset-3"></div>
          </div>
        </nav>
      </>
    );
  }
}
