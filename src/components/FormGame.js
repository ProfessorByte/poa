import React, { useState } from "react";
import DialogBox from "./DialogBox";

export const FormGame = ({
  idForm,
  question,
  options,
  idxCorrect,
  endGood,
  endWrong,
}) => {
  const [optionSelected, setOptionSelected] = useState(-1);
  const [finalStory, setFinalStory] = useState("form");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (idxCorrect === optionSelected) {
      setFinalStory("good");
    } else {
      setFinalStory("wrong");
    }
  };

  const handleChange = (e) => {
    setOptionSelected(e.target.value);
  };

  if (finalStory === "form") {
    return (
      <div className="container">
        <div className="radio-box">
          <h6>{question}</h6>
          <form onSubmit={handleSubmit}>
            <div onChange={handleChange}>
              {options.map((option, index) => (
                <div key={`option${index}`} class="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`formCheck${idForm}`}
                    id={`option${index}`}
                    value={index + 1}
                  />
                  <label className="form-check-label" for={`option${index}`}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
            {optionSelected !== -1 ? (
              <button type="submit" className="btn btn-danger mt-2">
                Enviar
              </button>
            ) : (
              <button type="submit" className="btn btn-danger mt-2" disabled>
                Enviar
              </button>
            )}
          </form>
        </div>
      </div>
    );
  } else if (finalStory === "good") {
    return <DialogBox storyteller="Respuesta correcta" end={endGood} />;
  } else if (finalStory === "wrong") {
    return <DialogBox storyteller="Respuesta incorrecta" end={endWrong} />;
  }
};
