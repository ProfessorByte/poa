import React, { Component } from "react";
import Footer from "../components/FooterMainPage";

export default class PruebaPage extends Component {
  render() {
    return (
      <>
        
          <div className="container">
            <div className="row mt-3">
              <div className="col">
                <h1>Videos</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>
                  Aquí podrás ver los vídeos ordenados por temas, desde el más
                  básico al más complicado
                </p>
              </div>
            </div>
        </div>
        <Footer/>
        </>
    );
  }
}