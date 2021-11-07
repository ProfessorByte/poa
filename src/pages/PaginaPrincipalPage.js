import React from "react";
import Header from "../components/HeaderComponent"
import Cards from "../components/CardsMainPage";
import "../css/PaginaPrincipal.css";

export default function PaginaPrincipalPage() {
    return (
        <div className="fondoPaginaPrincipal">
            <div>
                <div>
                    <Header/>
                </div>

                <div className="container d-flex align-items-center justify-content-center vh-100 vw-100">
                    <div className="row">
                        <div className="col-6">

                            <Cards
                                title="Historia"
                                descripcion="¡Entra qui para explorar los diferentes niveles que tenemos listos para ti para que puedas aprender los temas !"
                            />
                        </div>
                        <div className="col-6">

                            <Cards
                                title="Repositorio"
                                descripcion="¡Entra aquí para poder reforzar todos los conocimentos que aprenderas en la historia!"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>




    );

}