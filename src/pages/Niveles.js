import React from "react";
import { Button } from "reactstrap";
import ModalComponent from "../components/ModalComponent";

class Niveles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Button> Mostrar Modal</Button>
        <ModalComponent />
      </div>
    );
  }
}

export default Niveles;
