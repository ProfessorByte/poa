import React, { useState } from "react";

import Message from "./Message";
import "../css/DialogStyles.css";

const DialogBox = ({ handleForm, messages, storyteller, end }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const handleClick = () => {
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
          <div onClick={handleClick} className="DialogFooter">
            {currentMessage === messages.length - 1
              ? "Volver a leer la historia"
              : "Siguiente"}
          </div>
          {currentMessage === messages.length - 1 ? (
            <div onClick={handleForm} className="DialogFooter">
              Responder el formulario
            </div>
          ) : (
            <></>
          )}
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
