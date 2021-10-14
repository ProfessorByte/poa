import React from "react";
import { Link } from "react-router-dom";

export const ButtonBack = ({ dir }) => {
  return (
    <Link className="col-1 btn btn-outline-dark" to={dir}>
      <strong>
        <h2>🡐</h2>
      </strong>
    </Link>
  );
};
