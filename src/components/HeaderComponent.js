import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light navbar-expand-sm navbar-styles">
          <div className="container justify-content-center">
            <Link className="navbar-brand mr-auto" to="/">
              <strong>
                <h1>POA</h1>
              </strong>
            </Link>
          </div>
        </nav>
      </>
    );
  }
}
