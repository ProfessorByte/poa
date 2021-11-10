import React from "react";
import { Redirect, Route, Switch } from "react-router";
import BibliografiaPage from "../pages/BibliografiaPage";
import LogIn from "../pages/LogIn";
import Repositorio from "../pages/Repositorio";
import VideosPage from "../pages/VideosPage";

export default function AppRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Repositorio} />
        <Route exact path="/videos" component={VideosPage} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/bibliografia" component={BibliografiaPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}
