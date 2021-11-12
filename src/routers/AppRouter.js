import React from "react";
import { Redirect, Route, Switch } from "react-router";
import BibliografiaPage from "../pages/BibliografiaPage";
import Repositorio from "../pages/Repositorio";
import VideosPage from "../pages/VideosPage";
import PruebaPage from "../pages/Prueba";
import PaginaPrincipalPage from "../pages/PaginaPrincipalPage";

export default function AppRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/poa" component={PaginaPrincipalPage} />
        <Route exact path="/poa/repositorio" component={Repositorio} />
        <Route exact path="/poa/repositorio/videos" component={VideosPage} />
        <Route exact path="/poa/repositorio/bibliografia" component={BibliografiaPage} />
        <Route exact path="/poa/prueba" component={PruebaPage} /> 
        <Redirect to="/poa" />
      </Switch>
    </>
  );
}
