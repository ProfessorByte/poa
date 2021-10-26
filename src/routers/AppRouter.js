import React from "react";
import { Redirect, Route, Switch } from "react-router";
import BibliografiaPage from "../pages/BibliografiaPage";
import Repositorio from "../pages/Repositorio";
import VideosPage from "../pages/VideosPage";
import Not_Found from "../pages/Not_Found";

export default function AppRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/poa" component={Repositorio} />
        <Route exact path="/poa/videos" component={VideosPage} />
        <Route exact path="/poa/bibliografia" component={BibliografiaPage} />
        <Route component={Not_Found}/>
        <Redirect to="/poa" />
      </Switch>
    </>
  );
}
