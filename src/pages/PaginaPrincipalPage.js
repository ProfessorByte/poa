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

           <div className="grid-Main-Page">
     <div className="container_cards_paginaPrincipal">
        <Cards
            title="Historia"
            descripcion="¡Entra qui para explorar los diferentes niveles que tenemos listos para ti para que puedas aprender los temas !"
        />
    </div>


    <div className="container_cards_paginaPrincipal">
        <Cards
            title="Repositorio"
            descripcion="algo"
        />
    </div>
</div>

       </div>

            </div>



    );

}