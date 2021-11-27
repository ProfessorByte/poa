import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import React, { Component } from 'react'


export default class DropdownVocabulario extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,

    }
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }))
  }

  changeColor(){
    
    if (document.getElementById("alfa") ){
      document.getElementById("alfa").style.color = "red" ;
      console.log(document.getElementById("alfa"))
    }
  
  }



  render() {
    return (
      <>
        <Dropdown className="text-end" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>Orden</DropdownToggle>
          <DropdownMenu className="text-start opciones">
          <h1 className="SeccionDrop">Orden</h1>
            Alfabeticamente
            <input id="opcion"  value="windows" name="platform" type="radio" onChange={this.handleChange}/> 
            <br />
            Por temas
            <input id="opcion" value="windows" name="platform" type="radio" onChange={this.handleChange}/> 
            <DropdownItem divider />
            <h1 className="SeccionDrop">Opcion Vista</h1>
            Ascendente
            <input id="opcion2"  value="windows2" name="platform2" type="radio" onChange={this.handleChange}/>
            <br />
            Descendente
            <input id="opcio2" value="windows2" name="platform2" type="radio" onChange={this.handleChange}/>

          </DropdownMenu>
        </Dropdown>
      </>
    )
  }
}
