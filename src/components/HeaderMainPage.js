import React, { Component } from "react";
import  "../css/HeaderMain.css"
import Logo from "../assets/images/logo1.png"
import { ButtonBack } from "./ButtonBackComponent";
export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light navbar-expand-sm navbar-styles">
          <div className="container-fluid d-flex justify-content-start">
        <div className="navbar-brand">
        <a href="/poa">
        <img id="logo" src={Logo} width="150px" alt=""></img>   
    </a>
    </div>
      <div className="container-fluid d-flex justify-content-end mb-2">
        <ButtonBack/>
        </div>
          </div>
        </nav>
      </>
    );
  }
}