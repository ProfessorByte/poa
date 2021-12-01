import React, { useState } from "react";
import DialogBox from "./DialogBox";

export const FormGame = ({
  idForm,
  question,
  options,
  idxCorrect,
  endGood,
  endWrong,
  handleForm,
  unblockLevel,
}) => {
  const [optionSelected, setOptionSelected] = useState(-1);
  const [finalStory, setFinalStory] = useState("form");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(idxCorrect) === Number(optionSelected)) {
      setFinalStory("good");
      unblockLevel();
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
            {options.map((option, index) => (
              <div
                key={`option${index}`}
                className="form-check"
                onChange={handleChange}
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name={`formCheck${idForm}`}
                  id={`option${index}`}
                  value={index + 1}
                />
                <label
                  className="form-check-label"
                  htmlhtmlFor={`option${index}`}
                >
                  {option}
                </label>
              </div>
            ))}

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
    return (
      <DialogBox
        handleForm={handleForm}
        storyteller="Respuesta correcta"
        end={endGood}
      />
    );
  } else if (finalStory === "wrong") {
    return (
      <DialogBox
        handleForm={handleForm}
        storyteller="Respuesta incorrecta"
        end={endWrong}
      />
    );
  }
};
