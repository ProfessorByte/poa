import React, { Component } from "react";
import  "../css/HeaderMain.css"
import { ButtonBack } from "./ButtonBackComponent";
export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light navbar-expand-sm navbar-styles me-4">
          <div className="container-fluid d-flex justify-content-start ms-3">
            <strong>
              <h1>POA</h1>
            </strong>
            
          </div>
          <ButtonBack/>
        </nav>
      </>
    );
  }
}