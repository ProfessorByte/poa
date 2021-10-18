import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Repositorio from "./Repositorio";


class Biblioteca extends React.Component {
    render() { 
        return (
            <div>
                Biblioteca
                <BrowserRouter>
                <Route path="/repositorio" component ={Repositorio}/>
                </BrowserRouter>
            </div>
        )
    }
}
 
export default Biblioteca;