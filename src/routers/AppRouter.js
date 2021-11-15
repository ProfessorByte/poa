import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import ModalComponent from "../components/ModalComponent";
import BibliografiaPage from "../pages/BibliografiaPage";
import Historia from "../pages/Historia";
import LogIn from "../pages/LogIn";
import Niveles from "../pages/Niveles";
import PaginaPrincipalPage from "../pages/PaginaPrincipalPage";
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
        <Route exact path="/poa" component={PaginaPrincipalPage} />
        <Route exact path="/poa/repositorio" component={Repositorio} />
        <Route exact path="/poa/repositorio/videos" component={VideosPage} />
        <Route exact path="/poa/repositorio/bibliografia" component={BibliografiaPage} />
        <Route exact path="/poa" component={Repositorio} />
        <Route exact path="/poa/videos" component={VideosPage} />
        <Route exact path="/login">
          {globalUser ? <Redirect to="/" /> : <LogIn />}
        </Route>
        <Route exact path="/niveles" component={ModalComponent} />
        <Route exact path="/poa/bibliografia" component={BibliografiaPage} />
        <Route exact path="/poa/Historia" component={Historia}/>
        <Route exact path="/PaginaPrincipalPage" component={PaginaPrincipalPage}/>
        <Redirect to="/poa" />
      </Switch>
    </>
  );
}
