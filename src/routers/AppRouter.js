import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Main from "../pages/MainPage";
import Repositorio from "../pages/Repositorio";
import VideosPage from "../pages/VideosPage";

export default function AppRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main />             
        </Route>
        <Route path="/Repositorio" component={Repositorio}/>
        <Redirect to="/" />        
        <Route exact path="/videos">
          <VideosPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}
