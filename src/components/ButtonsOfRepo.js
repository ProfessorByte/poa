import React, { Fragment, useState } from "react";
import "../css/styles.css";
import VideosPage from "../pages/VideosPage";
import { Link } from "react-router-dom";

const ButtonsOfRepo = () => {
  return (
    <div className="container">
      <div className="row justify-content-end">
        <Link
          className="eightbit-btn eightbit-btn--reset col-md-4 "
          to="/poa/videos"
        >
          Videos
        </Link>
        <p>
          <p> </p>
        </p>
      </div>

      <div className="row justify-content-end">
        <Link
          className="eightbit-btn eightbit-btn--reset col-md-4 "
          to="/poa/bibliografia"
        >
          Bibliografía
        </Link>
      </div>
    </div>
  );
};
export default ButtonsOfRepo;
