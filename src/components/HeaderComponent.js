import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../server/firebaseConfig";

const Header = () => {
  const [globalUser, setGlobalUser] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    setGlobalUser(userFirebase);
  });

  return (
    <>
      <nav className="navbar navbar-light navbar-expand-sm navbar-styles">
        <div className="container-fluid d-flex justify-content-between">
          <strong>
            <h1>POA</h1>
          </strong>
          <a
            href="/login"
            className={`col-auto btn ${
              globalUser ? "btn-danger" : "btn-warning"
            } m-2`}
            onClick={() => {
              if (globalUser) {
                signOut(auth);
              }
            }}
          >
            {globalUser ? "Cerrar sesión" : "Iniciar sesión"}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
