import React from "react";
import { Button, Modal } from "reactstrap";

class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Modal show= {true}>
                <Modal.Header>
                    Modal Header
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Button>
                        Siguiente
                    </Button>
                </Modal.Footer>
            </Modal>
        </div> );
    }
}
 
export default ModalComponent;