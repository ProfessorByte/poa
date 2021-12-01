import React from "react";
import { Link } from "react-router-dom";
const ButtonRegis = () => {
  return (
    <div className="contregis">
    <Link className="btn btn-warning"
     to="/Registro" 
    >
      Registrarse
    </Link>
    </div>
  );
};
export default ButtonRegis;