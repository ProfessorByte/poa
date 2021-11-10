import React, { Component } from "react";
import "../App.css";
export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light navbar-expand-sm navbar-styles">
          <div className="container-fluid d-flex justify-content-between">
            <strong>
              <h1>POA</h1>
            </strong>
            <a href="/login" className="col-auto btn btn-warning m-2">
              Iniciar sesión
            </a>
          </div>
        </nav>
      </>
    );
  }
}
