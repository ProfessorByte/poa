import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Main from "../pages/MainPage";
import Repositorio from "../pages/Repositorio";

export default function AppRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />             
        </Route>
        <Route path="/Repositorio" component={Repositorio}/>
        <Redirect to="/" />        
      </Switch>
    </>
  );
}
