import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            showModal: false
         }
    }

    handleModal(){
        this.setState({showModal: !this.state.showModal})
    }

    render() { 
        return ( <div>
            <Button onClick={() => this.handleModal()}> abrir </Button>
            <Modal isOpen= {this.state.showModal} onHide={() => this.handleModal()} fade= {false}>
                <ModalHeader closeButton>
                    Modal Header
                </ModalHeader>
                <ModalBody>
                    <img src="../assets/images/start.jpg" />
                </ModalBody>
                <ModalFooter>
                    <Button>
                        Siguiente
                    </Button>
                    <Button onClick= {() => this.handleModal()}> Cancelar</Button>
                </ModalFooter>
            </Modal>
        </div> );
    }
}
 
export default ModalComponent;