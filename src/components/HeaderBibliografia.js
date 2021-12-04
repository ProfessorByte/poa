import React, { Component } from "react";
import "../css/HeaderBibliografia.css";
export default class HeaderBibliografia extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
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
                <h4>
                  Aquí podrás encontrar referencias del contenido <br />
                  que existe en esta página
                </h4>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
