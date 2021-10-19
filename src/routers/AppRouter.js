import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Main from "../pages/MainPage";

export default function AppRouter() {
  return (
    <>
      <Switch>
      <Route exact path="/">
          <Main />
        </Route>
        
        <Redirect to="/" />
      </Switch>
    </>
  );
}
