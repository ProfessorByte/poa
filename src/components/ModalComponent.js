import React from "react";

import Figura from '../assets/images/start.jpg';


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
            <div className="modal-content" style={{color:"black"}}>
                <div className="modal-header">
                    Titulo del Modal
                    <button className="close btn-warning" data-dismiss="modal" aria-label="cerrar">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="alert alert-success">
                        <h4> Cuerpo del modal</h4>
                        <div>
                            e
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-warning" type="button" data-dismiss="modal">
                        Cerrar
                    </button>
                    <button className="btn btn-succesa" type="button">
                        Aceptar
                    </button> 
                </div>
            </div>
        </div> );
    }
}
 
export default ModalComponent;