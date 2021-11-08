import React, { Component } from "react";
import  "../css/HeaderMain.css"
export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light navbar-expand-sm navbar-styles">
          <div className="container-fluid d-flex justify-content-start ms-3">
            <strong>
              <h1>POA</h1>
            </strong>
          </div>
        </nav>
      </>
    );
  }
}