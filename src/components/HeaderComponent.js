import React, { Component } from "react";
import { ButtonBack } from "./ButtonBackComponent";
import "../App.css";
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
            <div className="offset-md-1 offset-3"></div>
          </div>
        </nav>
      </>
    );
  }
}
