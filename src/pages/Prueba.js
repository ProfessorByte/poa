import React, { Component } from "react";
import Footer from "../components/FooterMainPage";
import Header from "../components/HeaderMainPage";
import "../css/Prueba.css";
import FrameVocabulario from "../components/Frame_Vocabulario";

export default class PruebaPage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-container">
          <div className="content-wrap">
            <div className="container">
              <div className="row mt-3">
                <div className="col">
                  <h1>Pagina xd</h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>Aquí podrás ver una pagina con cards</p>
                </div>
              </div>
            </div>
            <FrameVocabulario/>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
