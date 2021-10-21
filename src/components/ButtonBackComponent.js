
import React from "react";
import { Link } from "react-router-dom";

export const ButtonBack = ({ dir }) => {
  return (
    <Link className="col-md-1 col-3 btn btn-danger btn-lg" to={dir}>
      <strong>
        <h2>🡐</h2>
      </strong>
    </Link>
  );
};
