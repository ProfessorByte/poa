import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import BibliografiaPage from "../pages/BibliografiaPage";
import LogIn from "../pages/LogIn";
import Repositorio from "../pages/Repositorio";
import VideosPage from "../pages/VideosPage";
import { auth } from "../server/firebaseConfig";

export default function AppRouter() {
  const [globalUser, setGlobalUser] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    setGlobalUser(userFirebase);
  });

  return (
    <>
      <Switch>
        <Route exact path="/" component={Repositorio} />
        <Route exact path="/videos" component={VideosPage} />
        <Route exact path="/login">
          {globalUser ? <Redirect to="/" /> : <LogIn />}
        </Route>
        <Route exact path="/bibliografia" component={BibliografiaPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}
