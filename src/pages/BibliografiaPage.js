import React from 'react'
import HeaderBibliografia from '../components/HeaderBibliografia'
import "../css/HeaderBibliografia.css";
import Cards from "../components/Cards.js";
import Header from "../components/HeaderComponent"


export default function BibliografiaPage() {
    return (
        <div className="fondoBibliografia">
            <div>
                <Header/>
                <HeaderBibliografia/>
            </div>

                <div className="wrapper-grid">
                    <div className="container_cards">
                        <Cards
                            tituloReferncia="Programación orientada a objetos con java usando Bluej"
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
                            temas ="while,do-while,for"
                            tipo ="Pagina web"
                            link ="https://webs.um.es/ldaniel/iscyp17-18/13-estructuraRepetitiva.html"

                        />
                    </div>

                    <div className="container_cards">
                        <Cards
                            tituloReferncia="Interacción de objetos"
                            autor_NombrePagina= "Tutorial de java"
                            temas ="Encapsulamiento de objetos,interacción de objetos"
                            tipo ="Pagina web"
                            link ="http://dis.um.es/~bmoros/Tutorial/parteA/capa-2.html"

                        />
                    </div>

                    <div className="container_cards">
                        <Cards
                            tituloReferncia="Herencia de clases"
                            autor_NombrePagina= "Juan Pavón Mestras"
                            temas ="Herencia,Polimorfismo, Subtipos"
                            tipo ="PDF"
                            link ="https://drive.google.com/file/d/19GFsGIsbr8YDmcbmSRfuETt6wZjSmquD/view?usp=sharing"

                        />
                    </div>
                </div>

        </div>





    )
}
