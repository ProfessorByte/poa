import React from "react";

import Figura from "../assets/images/start.jpg";

class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }

    handleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    render() {
        return (
            <div>
                <button
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#ventanaModal"
                >
                    Abrir Modal
                </button>
                <div
                    className="modal fade"
                    id="ventanaModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="tituloVentana"
                    arial-hidden="true"
                >
                    <div className="modal-dialog modal-lg" role="document">
                        <div
                            className="modal-content "
                            style={{ color: "black" }}
                        >
                            <div className="modal-header">
                                <h1 id="tituloVentanta"> Titulo Modal</h1>
                                <button
                                    className="close btn-warning col-1"
                                    data-bs-dismiss="modal"
                                    aria-label="cerrar"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body myModal">
                                <div className="alert alert-success">
                                    <div className="myModalimg">
                                        <img src="../assets/images/start.jpg"></img>
                                    </div>
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum.
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    className="btn btn-warning"
                                    type="button"
                                    data-bs-dismiss="modal"
                                >
                                    Cerrar
                                </button>
                                <button
                                    className="btn btn-succesa"
                                    type="button"
                                >
                                    Aceptar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalComponent;
