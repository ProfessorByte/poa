import React, { Component } from "react";
import "../css/Headermain.css";
export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light navbar-expand-sm navbar-styles">
          <div className="container-fluid d-flex justify-content-start">
            <strong>
              <h1>POA xD</h1>
            </strong>
            <div className="offset-lg-1 offset-3"></div>
          </div>
        </nav>
      </>
    );
  }
}