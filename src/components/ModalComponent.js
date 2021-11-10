import React from "react";
import { Modal } from "reactstrap";

class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Modal>
                <Modal.Header>
                    Modal Header
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    
                </Modal.Footer>
            </Modal>
        </div> );
    }
}
 
export default ModalComponent;