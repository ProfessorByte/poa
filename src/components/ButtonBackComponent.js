import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

export const ButtonBack = ({ dir }) => {
  return (
    <Link className="eightbit-btn eightbit-btn--proceed col-md-4 col-md-1 col-3" to={dir}>
      <span>
        <FontAwesomeIcon icon={faLongArrowAltLeft} size="2x" />
      </span>
    </Link>
  );
};
