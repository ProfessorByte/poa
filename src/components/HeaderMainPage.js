import React, { Component } from "react";
import  "../css/HeaderMain.css"
import Logo from "../assets/images/logo1.png"
import ButtonIni from "./ButtonIni";
export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light navbar-expand-sm navbar-styles">
          <div className="container-fluid d-flex justify-content-between me-1 ms-1">
          <a href="/poa">
          <img id="logo" src={Logo} width="150px" alt=""></img>   
          </a>
          <h1 id="titulo">Historia</h1>
          <ButtonIni/>
        </div>
        </nav>
      </>
    );
  }
}