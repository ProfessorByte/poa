import React, { useState } from "react";
import startImage from "../assets/images/start.jpg";
import DialogBox from "./DialogBox";
import { FormGame } from "./FormGame";

const ModalGame = ({ modalId, story, unblockLevel }) => {
  const [showForm, setShowForm] = useState(false);

  const handleForm = () => {
    setShowForm(!showForm);
    console.log(showForm);
  };

  return (
    <>
      <div
        className="modal fade"
        id={modalId}
        data-bs-backdrop="static"
        data-bs-keyboard={false}
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content " style={{ color: "black" }}>
            <div className="modal-header myModal">
              <h1 id="tituloVentanta">{story.title}</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  /*setTimeout(() => {
                    setShowForm(!showForm);
                  }, 150);
                  setTimeout(() => {
                    setShowForm(false);
                  }, 200);*/
                  setShowForm(false);
                }}
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
              {!showForm ? (
                <DialogBox
                  handleForm={handleForm}
                  messages={story.paragraphs}
                />
              ) : (
                <FormGame
                  idForm={1}
                  question={story.question}
                  options={story.options}
                  idxCorrect={story.idxCorrect}
                  endGood={story.ifCorrect}
                  endWrong={story.ifWrong}
                  handleForm={handleForm}
                  unblockLevel={unblockLevel}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalGame;
