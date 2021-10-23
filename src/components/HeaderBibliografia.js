import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../css/HeaderBibliografia.css";

export default class HeaderBibliografia extends Component {
  render() {
    return (
      <>
          <div className="container">
            <div className="row titulo-de-bibliografia">
              <div className="col-12">
              <h1>Bibliografía</h1>
              </div> 
              <div className="row descripcion-de-bibliografia">
                <div className="col-12">
                <h4>Aquí podrás encontrar referencias del contenido <br />
                           que existe en esta página</h4>
                </div>
              </div>
            </div>
          </div>
      </>
    )
  }
}
