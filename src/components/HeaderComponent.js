import React, { Component } from "react";
import "../App.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <>
          <nav className="navbar navbar-light navbar-expand-sm navbar-styles">
            <div className="container justify-content-center">
              <a class="navbar-brand mr-auto" href="#">
                <strong>
                  <h1>POA</h1>
                </strong>
              </a>
            </div>
          </nav>
        </>
      </div>
    );
  }
}
