import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import React, { Component } from 'react'

export default class DropdownVocabulario extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdownOpen: false,
      name: '',
      value: '',
      orden1: "",
      orden2: ""
    }
  }

  shouldComponentUpdate =()=> {
    let cambia=true;
    if(this.state.orden1=="alfabeticamente"&&this.state.orden2=="descendente"){
      console.log("hola")
       this.props.funcionAlfaDes()
    }else{
      cambia=false;
    }
    return cambia;
  }



  handleChange = (e) => {
    let valor=e.target.value;
    console.log(valor)
    let esVista=(valor==="descendente")
    if(esVista){
      this.setState({ orden2: valor })
      console.log("siSeAsigno")
    }else{
      this.setState({ orden1: valor })
    }
    console.log(this.state.orden1)
    console.log(this.state.orden2)
  }


  render() {
    return (
      <>
        <div
          className="dropdown text-end cuadro_general"

        >
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Orden
          </button>
          <ul className="dropdown-menu text-start opciones container-fluid ">
            <h1 className="SeccionDrop text-center ">Orden</h1>
            <div id="orden" value={this.state.orden1} onChange={this.handleChange}>
              <div className="row">
                <div className="col-md-auto">
                  <p className="opcionOrden">Alfabeticamente</p>
                </div>
                <div className="col">
                  <input
                    id="opcion1"
                    value="alfabeticamente"
                    name="platform"
                    type="radio"
                    defaultChecked="checked"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="opcionOrden">Por temas</p>
                </div>
                <div className="col">
                  <input
                    id="opcion2"
                    value="porTemas"
                    name="platform"
                    type="radio"
                  />
                </div>
              </div>
            </div>
            <hr className="dropdown-divider" />
            <h1 className="SeccionDrop text-center">Opcion Vista</h1>
            <div id="vista" value={this.state.orden2} onChange={this.handleChange}>
              <div className="row">
                <div className="col-md-auto">
                  <p className="opcionOrden">Ascendente</p>
                </div>
                <div className="col">
                  <input
                    id="opcion3"
                    value="ascendente"
                    name="platform2"
                    type="radio"
                    defaultChecked="checked"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="opcionOrden">Descendente</p>
                </div>
                <div className="col">
                  <input
                    id="opcion4"
                    value="descendente"
                    name="platform2"
                    type="radio"
                  />
                </div>
              </div>
            </div>
          </ul>
        </div>
      </>
    )
  }
}
