import React, { Component } from "react";
import "../App.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light navbar-expand-sm navbar-stylerepo">
          <div className="container justify-content-center">
              <strong>
                <h1>POA</h1>
              </strong>
          </div>
        </nav>
      </>
    );
  }
}
