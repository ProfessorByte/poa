import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { useSigninCheck } from "reactfire";
import BibliografiaPage from "../pages/BibliografiaPage";
import Historia from "../pages/Historia";
import LogIn from "../pages/LogIn";
import PaginaPrincipalPage from "../pages/PaginaPrincipalPage";
import Repositorio from "../pages/Repositorio";
import { VideosPage } from "../pages/VideosPage";
import RecuperarContraPage from "../pages/RecuperarContraPage";
import PruebaPage from "../pages/Prueba";

export default function AppRouter() {
  const { status, data } = useSigninCheck();

  return (
    <>
      <Switch>
        <Route exact path="/poa" component={PaginaPrincipalPage} />
        <Route exact path="/poa/prueba" component={PruebaPage} />
        <Route exact path="/poa/repositorio" component={Repositorio} />
        <Route exact path="/poa/repositorio/videos" component={VideosPage} />
        <Route
          exact
          path="/poa/repositorio/bibliografia"
          component={BibliografiaPage}
        />
        <Route exact path="/poa" component={Repositorio} />
        <Route exact path="/poa/videos" component={VideosPage} />
        <Route exact path="/login">
          {status === "loading" ? (
            <div>Cargando...</div>
          ) : data.signedIn ? (
            <Redirect to="/poa" />
          ) : (
            <LogIn />
          )}
        </Route>
        <Route exact path="/poa/bibliografia" component={BibliografiaPage} />
        <Route exact path="/poa/Historia" component={Historia} />
        <Route
          exact
          path="/PaginaPrincipalPage"
          component={PaginaPrincipalPage}
        />
        <Route exact path="/recuperar">
          {status === "loading" ? (
            <div>Cargando...</div>
          ) : data.signedIn ? (
            <Redirect to="/poa" />
          ) : (
            <RecuperarContraPage />
          )}
        </Route>
        <Redirect to="/poa" />
      </Switch>
    </>
  );
}
