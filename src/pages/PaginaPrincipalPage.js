import React from "react";
import Cards from "../components/CardsMainPage";
import "../css/PaginaPrincipal.css";
import imagenEspada from "../assets/images/espadas.png";
import imagenLibro from "../assets/images/librol.png";
import Header from "../components/HeaderMainPage";
import Footer from "../components/FooterMainPage";

function pressFirstImage(e) {
    {
        if (!globalUser) {
            alert("Inicie sesión si desea  que los cambios se guarden ");
        }
        window.location.assign("/poa/historia");

    }
}

function pressSecondImage(e) {
    window.location.assign("/poa/repositorio" );

}
export default function PaginaPrincipalPage() {
    return (
        <>
        <Header/>
        <div className="fondoPaginaPrincipal">
            <div>

                <div className="container d-flex align-items-center justify-content-center vh-100 vw-100 ">
                    <div className="row">
                        <div className="col-6">

                            <Cards
                                title="Historia"
                                imagen={imagenEspada}
                                funcion={pressFirstImage}
                                descripcion="¡Entra aquí para explorar los diferentes niveles que tenemos listos para ti para que puedas aprender los temas!"
                            />
                        </div>
                        <div className="col-6">

                            <Cards
                                title="Repositorio"
                                descripcion="¡Entra aquí para poder reforzar todos los conocimientos que aprenderás en la historia!"
                                imagen={imagenLibro}
                                funcion={pressSecondImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
             <Footer/>
        </div>
       


        </>
    );

}