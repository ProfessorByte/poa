import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Biblioteca from "./Biblioteca";
function Repositorio() {
 
        return (<BrowserRouter>
            <Route path="/biblioteca" component ={Biblioteca}/>
        </BrowserRouter>)

}
 
export default Repositorio;