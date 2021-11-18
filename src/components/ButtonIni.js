import { signOut } from "firebase/auth";
import React from "react";
import { useSigninCheck } from "reactfire";
import { auth } from "../server/firebaseConfig";

const ButtonIni = () => {
  const { status, data } = useSigninCheck();

  return (
    <div className="contenedorb">
      <a
        href={status !== "loading" && data.signedIn ? "/poa" : "/login"}
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
          : "Iniciar sesión"}
      </a>
    </div>
  );
};
export default ButtonIni;
