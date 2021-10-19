import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class HeaderBibliografia extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light navbar-expand-sm navbar-styles">
          <div className="container justify-content-center">
            <h1 className="titulo-de-bibliografia">Bibliografia</h1>
          </div>

        </nav>
      </>
    );
  }
}
