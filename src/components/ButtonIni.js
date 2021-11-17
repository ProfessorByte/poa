import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../server/firebaseConfig";

const ButtonIni = () => {
  const [globalUser, setGlobalUser] = useState(null);
  onAuthStateChanged(auth, (userFirebase) => {
    setGlobalUser(userFirebase);
  });
  return (
  <div className="contenedorb">
<a href="/login" className={`col-auto btn ${globalUser ? "btn-danger" : "btn-warning"} m-2`}
             onClick={() => {
              if (globalUser) {
                signOut(auth);
              }
            }}
          >
            {globalUser ? "Cerrar sesión" : "Iniciar sesión"}
          </a>
  </div>
  );
};
export default ButtonIni;
