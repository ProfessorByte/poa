import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

export const ButtonBack = ({ dir }) => {
  return (
    <Link className="col-lg-1 col-3 btn btn-danger btn-lg" to={dir}>
      <span>
        <FontAwesomeIcon icon={faLongArrowAltLeft} size="2x" />
      </span>
    </Link>
  );
};
