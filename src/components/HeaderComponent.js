import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-light navbar-expand-sm navbar-styles">
          <div className="container justify-content-center">
              <strong>
                <h1>Videos</h1>
              </strong>
          </div>
        </nav>
      </>
    );
  }
}
