import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Main from "../pages/MainPage";
import Videos from "../pages/VideosPage";

export default function AppRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/videos">
          <Videos />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}
