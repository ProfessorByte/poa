import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Repositorio from "./Repositorio";
import { Link } from "react-router-dom";


class Biblioteca extends React.Component {
    render() { 
        return (
            <div>
                Biblioteca
                <Link to="">
                <img src="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d"
                />
            </Link>
            </div>
        )
    }
}
 
export default Biblioteca;