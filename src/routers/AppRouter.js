import React from "react";
import { Redirect, Route, Switch } from "react-router";
import BibliografiaPage from "../pages/BibliografiaPage";
import Repositorio from "../pages/Repositorio";
import VideosPage from "../pages/VideosPage";
import PruebaPage from "../pages/Prueba";


export default function AppRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/poa" component={Repositorio} />
        <Route exact path="/poa/videos" component={VideosPage} />
        <Route exact path="/poa/bibliografia" component={BibliografiaPage} />
        <Route exact path="/poa/prueba" component={PruebaPage} />
        <Redirect to="/poa" />
      </Switch>
    </>
  );
}
