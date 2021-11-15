import React from 'react'
import HeaderBibliografia from '../components/HeaderBibliografia'
import "../css/HeaderBibliografia.css";
import Cards from "../components/CardsBibliografia.js";
import Header from "../components/HeaderRepositorio"
import Footer from '../components/FooterRepositorio';



export default function BibliografiaPage() {
    return (
        <>
        <div className="fondoBibliografia">
            <div>
                <Header/>
                <HeaderBibliografia/>
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

                    <div className="container_cards">
                        <Cards
                            tituloReferncia="Interacción de objetos"
                            autor_NombrePagina= "Tutorial de java"
                            temas ="Encapsulamiento de objetos,interacción de objetos"
                            tipo ="Página Web"
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
                    <div className="container_cards">
                        <Cards
                            tituloReferncia="Modificadores de Acceso"
                            autor_NombrePagina= "Fernando Berzal"
                            temas ="Tipos de modificadores de acceso"
                            tipo ="PDF"

                            link ="https://elvex.ugr.es/decsai/java/pdf/9D-access.pdf
"

                        />
                    </div>
                    <div className="container_cards">
                        <Cards
                            tituloReferncia="Objetos, Clases, Atributos y Métodos"
                            autor_NombrePagina= "jairogarciarincon"
                            temas ="Atributos,Métodos y Constructores"
                            tipo ="Página Web"

                            link ="https://jairogarciarincon.com/clase/programacion-orientada-a-objetos-en-php/objetos-clases-atributos-y-metodos"

                        />
                    </div>
                    <div className="container_cards">
                        <Cards
                            tituloReferncia="Variables locales y variables globales"
                            autor_NombrePagina= "Instituto Tecnológico de Celaya"
                            temas ="Variables locales y variables globales"
                            tipo ="PDF"

                            link ="https://jairogarciarincon.com/clase/programacion-orientada-a-objetos-en-php/objetos-clases-atributos-y-metodos"

                        />
                    </div>
                    <div className="container_cards">
                        <Cards
                            tituloReferncia="Sentencias condicionales simples: if-else"
                            autor_NombrePagina= "Instituto Tecnológico de Celaya"
                            temas =" Estructuras de control if-else"
                            tipo ="PDF"

                            link ="https://drive.google.com/file/d/1X0BgQzlmO64u8cm6dXMtZTVLIr-h6FiJ/view?usp=sharing"

                        />
                    </div>
                    <div className="container_cards">
                        <Cards
                            tituloReferncia="Clases Abstractas e interfaces"
                            autor_NombrePagina= "Instituto Tecnológico de Celaya"
                            temas ="Clases Abstractas,Interfaces"
                            tipo ="PDF"

                            link ="https://www.unirioja.es/cu/jearansa/0809/archivos/EIPR_Tema04.pdf"

                        />
                    </div>
                    <div className="container_cards">
                        <Cards
                            tituloReferncia="Enlace dinámico y enlace estático"
                            autor_NombrePagina= "Programador Clic"
                            temas ="Enlace dinámico y estático"
                            tipo ="Página Web"

                            link ="https://programmerclick.com/article/12831736491/
"

                        />
                    </div>
                    <div className="container_cards">
                        <Cards
                            tituloReferncia="Parámetros y Argumentos en el lenguaje de  programación C++"
                            autor_NombrePagina= "Ing. Ubaldo José Bonaparte"
                            temas ="Parámetros y argumentos"
                            tipo ="PDF"

                            link ="http://www.edutecne.utn.edu.ar/semin_progr_frt/param_y_argum_lenguaje_C.pdf
"

                        />
                    </div>
                    <div className="container_cards">
                        <Cards
                            tituloReferncia="Declaración por herencia múltiple"
                            autor_NombrePagina= "Adolfo Jiménez Millán/ Zator Systems"
                            temas ="Herencia múltiple"
                            tipo ="Página Web"

                            link ="https://www.zator.com/Cpp/E4_11_2c.htm#
"

                        />
                    </div>

                </div>
                
        </div>
        <Footer/>
</>



    )
}
