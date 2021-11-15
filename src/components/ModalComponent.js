import React from "react";

import startImage from "../assets/images/start.jpg";
import { stories } from "../consts/stories";
import DialogBox from "./DialogBox";
import { FormGame } from "./FormGame";

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };

    this.handleForm = this.handleForm.bind(this);
  }

  handleForm() {
    this.setState({ showForm: !this.state.showForm });
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
              <div className="modal-header myModal">
                <h1 id="tituloVentanta">{stories[0].title}</h1>
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
                {!this.state.showForm ? (
                  <DialogBox
                    handleForm={this.handleForm}
                    messages={stories[0].paragraphs}
                  />
                ) : (
                  <FormGame
                    idForm={1}
                    question={stories[0].question}
                    options={stories[0].options}
                    idxCorrect={stories[0].idxCorrect}
                    endGood={stories[0].ifCorrect}
                    endWrong={stories[0].ifWrong}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ModalComponent;
