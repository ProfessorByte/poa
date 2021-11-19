import React, {useState} from "react";
import Cards from "../components/CardsMainPage";
import "../css/PaginaPrincipal.css";
import imagenEspada from "../assets/images/espadas.png";
import imagenLibro from "../assets/images/librol.png";
import Header from "../components/HeaderMainPage";
import Footer from "../components/FooterMainPage";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../server/firebaseConfig";

export default function PaginaPrincipalPage() {
    const [globalUser, setGlobalUser] = useState(null);

    onAuthStateChanged(auth, (userFirebase) => {
        setGlobalUser(userFirebase);
    });
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

    return (
        <>
        <Header/>
        <div className="fondoPaginaPrincipal">
        <h1 className="estilo"> Programación Orientada a la Aventura </h1>

            <div className="wrapper-grid">
                        <div className="container_cards">
                        <Cards
                                title="Historia"
                                imagen={imagenEspada}
                                funcion={pressFirstImage}
                                descripcion="¡Entra aquí para explorar los diferentes niveles que tenemos listos para ti para que puedas aprender los temas!"
                            />
                        </div>
                        <div className="container_cards">

                            <Cards
                                title="Repositorio"
                                descripcion="¡Entra aquí para poder reforzar todos los conocimientos que aprenderás en la historia!"
                                imagen={imagenLibro}
                                funcion={pressSecondImage}
                            />
                        </div>
                    
            </div>
              
               
        </div>
               
        <Footer/>   
       
            
            

        </>
    );

}
