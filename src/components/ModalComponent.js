import React from "react";

import startImage from "../assets/images/start.jpg";

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
      <>
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
          tabIndex={-1}
          role="dialog"
          aria-labelledby="tituloVentana"
          arial-hidden={true}
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content " style={{ color: "black" }}>
              <div className="modal-header">
                <h1 id="tituloVentanta">Nombre subtema</h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body myModal">
                <div className="text-center">
                  <img
                    src={startImage}
                    alt="Imágen de inicio"
                    className="rounded"
                  ></img>
                </div>
                <hr />
                <div
                  id="carouselStoryGame"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div className="container">
                        La historia comienza con...
                      </div>
                    </div>
                    <div class="carousel-item">
                      Bla bla bla fjevkankqanjkwvejn fkqenjkqefe eqjonqefkjb
                      jknfewjknfqejkfq fwqjwnjewk
                    </div>
                    <div class="carousel-item">
                      Más bla bla bla jnewiknfkjwe feoqn o3hdiqwifqwinjkfq
                      njkfenjkww jnjknkj
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselStoryGame"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden={true}
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselStoryGame"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden={true}
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ModalComponent;
