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
                  setShowForm(false);
                }}
              />
            </div>
            <div className="modal-body myModal">
              <div
                id="carouselGame"
                className="carousel slide carousel-fade"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  {story.listImages.length === 0 ? (
                    <div className="carousel-item ms-0 active">
                      <img
                        className="rounded mx-auto d-block w-25"
                        src={startImage}
                        alt="Imágen predeterminada"
                      />
                    </div>
                  ) : (
                    story.listImages.map((image, index) => (
                      <div
                        className={`carousel-item ms-0 ps-5 pe-5 ${
                          index === 0 ? "active" : ""
                        }`}
                        key={index}
                      >
                        <img
                          className="rounded mx-auto d-block w-100"
                          src={image}
                          alt="Imágen de la Historia"
                        />
                      </div>
                    ))
                  )}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselGame"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden={true}
                  />
                  <span className="visually-hidden">Anterior</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselGame"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden={true}
                  />
                  <span className="visually-hidden">Siguiente</span>
                </button>
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
