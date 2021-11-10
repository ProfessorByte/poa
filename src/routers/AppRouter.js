import React from "react";
import { Redirect, Route, Switch } from "react-router";
import BibliografiaPage from "../pages/BibliografiaPage";
import LogIn from "../pages/LogIn";
import Niveles from "../pages/Niveles";
import Repositorio from "../pages/Repositorio";
import VideosPage from "../pages/VideosPage";


export default function AppRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/poa" component={Repositorio} />
        <Route exact path="/poa/videos" component={VideosPage} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/niveles" component={Niveles} />
        <Route exact path="/poa/bibliografia" component={BibliografiaPage} />
        <Redirect to="/poa" />
      </Switch>
    </>
  );
}
