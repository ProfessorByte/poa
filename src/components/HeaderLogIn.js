import React, { Component } from "react";
import  "../css/HeaderMain.css"
import ButtonIni from "./ButtonIni";
import {ButtonBack} from "./ButtonBackComponent"
import "../css/ButtonsUser.css"
import Logo from "../assets/images/logo1.png"
export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light navbar-expand-sm navLogIn">
      
          <div className="container-fluid d-flex justify-content-between me-1 ms-1">
          <a href="/poa">
          <img id="logo2" src={Logo} width="150px" alt=""></img>   
          </a>
        </div>
        </nav>
      </>
    );
  }
}
