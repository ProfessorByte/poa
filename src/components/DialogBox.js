import React, { useState } from "react";
import Message from "./Message";
import "../css/DialogStyles.css";

const DialogBox = ({ handleForm, messages, storyteller, end }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const handleClickRight = () => {
    if (currentMessage < messages.length - 1) {
      setCurrentMessage(currentMessage + 1);
    } else {
      setCurrentMessage(0);
    }
  };
  return (
    <div className="DialogWindow">
      <div className="DialogTitle">{storyteller}</div>
      {messages && (
        <>
          <Message message={messages[currentMessage]} key={currentMessage} />
          <div className="row d-flex justify-content-between">
            <div className="DialogFooterStart col-auto">
              {currentMessage > 0 && (
                <div
                  onClick={() => {
                    if (currentMessage > 0) {
                      setCurrentMessage(currentMessage - 1);
                    }
                  }}
                >
                  Anterior
                </div>
              )}
            </div>
            <div className="col-auto row">
              <div onClick={handleClickRight} className="DialogFooter col-auto">
                {currentMessage === messages.length - 1
                  ? "Volver a leer la historia"
                  : "Siguiente"}
              </div>
              {currentMessage === messages.length - 1 ? (
                <div onClick={handleForm} className="DialogFooter col-auto">
                  Responder el formulario
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      )}
      {!messages && end && (
        <>
          <Message message={end} key={0} />
          <div data-bs-dismiss="modal" className="DialogFooter">
            Cerrar
          </div>
        </>
      )}
    </div>
  );
};

export default DialogBox;
