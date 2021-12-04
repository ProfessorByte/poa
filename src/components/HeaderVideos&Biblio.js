import React, { Component } from "react";
import "../css/HeaderMain.css";
import ButtonIni from "./ButtonIni";
import { ButtonBack } from "./ButtonBackComponent";
import "../css/ButtonsUser.css";
import Logo from "../assets/images/logo1.png";
export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light navbar-expand-sm navbar-stylerepo">
          <div className="container-fluid d-flex justify-content-between">
            <ButtonBack dir="/poa/repositorio" />
            <a href="/poa">
              <img id="logo" src={Logo} width="150px" alt="" />
            </a>
            <ButtonIni />
          </div>
        </nav>
      </>
    );
  }
}
