import React, { useState } from "react";

import Message from "./Message";
import "../css/DialogStyles.css";

const DialogBox = ({ messages, storyteller }) => {
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
      <Message message={messages[currentMessage]} key={currentMessage} />
      <div onClick={handleClick} className="DialogFooter">
        Next
      </div>
    </div>
  );
};

export default DialogBox;
