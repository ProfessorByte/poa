import React, { Component } from "react";
import "../css/FooterStyle.css"

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="page-footer font-small footLogIn pt-4">
       
          <div className="container-fluid mt-4">
          <div className="row">
              <p className="col-sm d-flex justify-content-center">
                &copy;{new Date().getFullYear()} Fundamentals | Todos los Derechos Reservados
                </p>
            </div>
            <br/>   
          </div>
        </footer>
      </>
    );
  }
}