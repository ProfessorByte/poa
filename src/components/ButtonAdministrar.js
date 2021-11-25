//import "../css/styles.css";
import { Link } from "react-router-dom";

const ButtonAdministrar = () => {
  return (
    <div className="container">
      <div className="row justify-content-end">
        <Link
          className="btn btn-primary col-md-2 "
          to="/poa/repositorio/videos"
        >
          Administrar
        </Link>
      </div> 
    </div>
  );
};
export default ButtonAdministrar;