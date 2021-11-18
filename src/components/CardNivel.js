import React, { useState } from "react";
import { stories } from "../consts/stories";
import ModalGame from "./ModalGame";
export default function CardNivel({ estado, titulo, num }) {
  const [currentStory, setCurrentStory] = useState(stories[0]);

  const getBackground = (n) => {
    var bg = "";
    if (n === -1) {
      bg = "card-body card-nivel-c";
    } else if (n === 0) {
      bg = "card-body card-nivel-b";
    } else {
      bg = "card-body card-nivel-a";
    }
    return bg;
  };

  const modalId = "modalGame";

  return (
    <div>
      <ModalGame modalId={modalId} story={currentStory} />
      <div className="card mb-3 card-nivel">
        {/*<div className="card-header text-center">{titulo}</div>*/}
        <div className={getBackground(estado)}>
          <div className="card-header">{num}</div>
          <h6 className="card-text">{titulo}</h6>
          <button
            type="button"
            className="btn btn-light btn-sm btn-block"
            data-bs-toggle="modal"
            data-bs-target={`#${modalId}`}
          >
            start
          </button>
        </div>
      </div>
    </div>
  );
}
