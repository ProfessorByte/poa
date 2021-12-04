
import React, { Component } from 'react'

export default class DropdownVocabulario extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdownOpen: false,
      orden1: "alfabeticamente",
      orden2: "ascendente"
    }
  }
  shouldComponentUpdate() {
    console.log("Se actualizará")
    this.props.funcionOrden(this.state.orden1,this.state.orden2);
    return true;
  }
  
  handleChange = (e) => {
    let valor= e.target.value;
    let opcion=(valor==="alfabeticamente"||valor==="porTemas")
    if(opcion){
      this.setState({ orden1: e.target.value },()=>{
        console.log("orden1 ac")
      });
    }else{
      this.setState({ orden2: e.target.value },()=>{
        console.log("orden2 ac")
      });
    }
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
