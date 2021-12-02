import React from "react";
import { Link } from "react-router-dom";
import BotonIcono from "./BotonIcono";
import { signOut } from "firebase/auth";
import { useSigninCheck } from "reactfire";
import { auth } from "../server/firebaseConfig";
const ButtonRegis = () => {
  /*return (
    <div className="contregis">
    <Link className="btn btn-warning"
     to="/Registro" 
    >
      Registrarse
    </Link>
    </div>   
  );*/
const { status, data } = useSigninCheck();
  const cerrarSesion = () => {
    if (status !== "loading" && data.signedIn) {
      signOut(auth);
    }
  };
  return (
    <div className="contenedorbr">
      {status !== "loading" && !data.signedIn ? (
        <a
          href={status !== "loading" && data.signedIn ? "/poa" : "/Registro"}
          className={`col-auto btn ${
            status !== "loading" && data.signedIn ? "btn-danger" : "btn-warning"
          } me-2`}
          onClick={() => {
            if (status !== "loading" && data.signedIn) {
              signOut(auth);
            }
          }}
        >
          {status === "loading"
            ? "..."
            : data.signedIn
            ? "Cerrar sesión"
            : "Registrarse"}
        </a>
      ) : (
        <BotonIcono cerrarSesion={cerrarSesion} />
      )}
    </div>
  );
};
export default ButtonRegis;