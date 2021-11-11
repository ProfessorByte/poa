import React from "react";
import Cards from "../components/CardsMainPage";
import "../css/PaginaPrincipal.css";
import imagenEspada from "../assets/images/espadas.png";
import imagenLibro from "../assets/images/librol.png";


function pressFirstImage(e) {
    alert("Inicie seción si desea  que los cambios se guarden ");
        window.location.href = ("/poa");
}
function pressSecondImage(e) {
    window.location.href =("/poa" );

}
export default function PaginaPrincipalPage() {
    return (
        <div className="fondoPaginaPrincipal">
            <div>

                <div className="container d-flex align-items-center justify-content-center vh-100 vw-100 ">
                    <div className="row">
                        <div className="col-6">

                            <Cards
                                title="Historia"
                                imagen={imagenEspada}
                                funcion={pressFirstImage}
                                descripcion="¡Entra aquí para explorar los diferentes niveles que tenemos listos para ti para que puedas aprender los temas !"
                            />
                        </div>
                        <div className="col-6">

                            <Cards
                                title="Repositorio"
                                descripcion="¡Entra aquí para poder reforzar todos los conocimentos que aprenderas en la historia!"
                                imagen={imagenLibro}
                                funcion={pressSecondImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>




    );

}