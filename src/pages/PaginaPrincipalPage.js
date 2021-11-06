import React from "react";
import Header from "../components/HeaderComponent"
import Cards from "../components/CardsMainPage";

export default function PaginaPrincipalPage() {
    return (
       <div>
    <div>
        <Header/>
    </div>

           <div className="grid-Main-Page">
     <div className="container_cards">
        <Cards
            title="Historia"
            descripcion="aqui podras explorar los diferentes niveles que tenemos listos para ti para que puedas aprender los temas "
        />
    </div>


    <div className="container_cards">
        <Cards
            title="Repositorio"
            descripcion="algo"
        />
    </div>
</div>

       </div>



    );

}