import React, { Component } from "react";
import { BrowserRouter} from 'react-router-dom'
import Biblioteca from "./Biblioteca";
class Repositorio extends React.Component {
    render() { 
        return <BrowserRouter>
            <Route path="/biblioteca" Component={Biblioteca}></Route>
        </BrowserRouter>
    }
}
 
export default Repositorio;