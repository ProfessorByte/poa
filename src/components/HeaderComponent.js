import React, { Component } from "react";
import { ButtonBack } from "./ButtonBackComponent";
import "../css/HeaderMain.css";
import BotonIcono from "./BotonIcono";
import "../css/ButtonsUser.css"
export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light navbar-expand-sm navbar-stylerepo">
          <div className="container-fluid d-flex justify-content-between">
            <ButtonBack dir="/poa" />
            <strong>
              <h1>POA</h1>
            </strong>                                   
            <div className="offset-lg-1 offset-3"></div> 
          </div>  
          <div className="BotonIcon">
            <BotonIcono/>  
        </div>         
        </nav>   
      </>
    );
  }
}
