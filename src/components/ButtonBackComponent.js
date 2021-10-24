import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

export const ButtonBack = ({ dir }) => {
  return (
<<<<<<< HEAD
    <Link className=" eightbit-btn eightbit-btn--proceed col-md-1 col-3 btn-sm " to={dir}>
      <strong>
        <h2>🡐</h2>
      </strong>
=======
    <Link className="col-md-1 col-3 btn btn-danger btn-lg" to={dir}>
      <span>
        <FontAwesomeIcon icon={faLongArrowAltLeft} size="2x" />
      </span>
>>>>>>> bea07c1b8b2cea1569df5e9b1daf0a181a94f1b1
    </Link>
  );
};
