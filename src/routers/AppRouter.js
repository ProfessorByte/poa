import React from "react";
import { Redirect, Route, Switch } from "react-router";
import BibliografiaPage from "../pages/BibliografiaPage";
import Main from "../pages/MainPage";

export default function AppRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/bibliografia">
          <BibliografiaPage/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}
