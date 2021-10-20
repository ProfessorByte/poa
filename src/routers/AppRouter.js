import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Main from "../pages/MainPage";
import VideosPage from "../pages/VideoPage"

export default function AppRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/videos">
          <VideosPage />
          </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}
