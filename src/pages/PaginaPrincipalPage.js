import React from "react";
import Header from "../components/HeaderComponent"
import Cards from "../components/Cards";

export default function PaginaPrincipalPage() {
    return (
       <div>
    <div>
        <Header/>
    </div>

           <div className="wrapper-grid">
     <div className="container_cards">
        <Cards
            tituloReferncia="Programación orientada a objetos con java usando BlueJ"
            autor_NombrePagina= "David J. Barnes, Michael Kölling"
            temas ="Todos los temas"
            tipo ="PDF"

            link ="https://drive.google.com/file/d/1XScVL00fLkHn7mgmLxiU3-UP8NQvNhGc/view?usp=sharing"

        />
    </div>


    <div className="container_cards">
        <Cards
            tituloReferncia="Estructuras de Control Iterativas"
            autor_NombrePagina= "Grupo Docente ISCyP"
            temas ="While,Do-While,For"
            tipo ="Página Web"
            link ="https://webs.um.es/ldaniel/iscyp17-18/13-estructuraRepetitiva.html"

        />
    </div>
</div>

       </div>



    );

}