import "../css/styles.css";
import { Link } from "react-router-dom";

const ButtonsOfRepo = () => {
  return (
    <div className="container">

<div className="row justify-content-end mb-4 mt-6">
        <Link
          className="eightbit-btn eightbit-btn--reset col-md-4 "
          to="/poa/repositorio/vocabulario"
        >
          Vocabulario
        </Link>
      </div>
      <div className="row justify-content-end mb-4">
        <Link
          className="eightbit-btn eightbit-btn--reset col-md-4 "
          to="/poa/repositorio/videos"
        >
          Videos
        </Link>
      </div>

      <div className="row justify-content-end mb-4">
        <Link
          className="eightbit-btn eightbit-btn--reset col-md-4 "
          to="/poa/repositorio/bibliografia"
        >
          Bibliografía
        </Link>
      </div>
      

      
    </div>
  );
};
export default ButtonsOfRepo;
