

import React from "react";
import Cards from "../components/Cards.js";

export default function Main() {
    return (

    <div className="App">


    <div class="container mt-3">
     <div className="row">
          <div className ="col-sm-6">
              <Cards
              tituloReferncia="Programacion orientada a objetos con java usando Bluej"
              autor_NombrePagina= "David J. Barnes, Michael Kölling"
              temas ="Todos los temas"
              tipo ="PDF"
              link ="https://drive.google.com/file/d/1XScVL00fLkHn7mgmLxiU3-UP8NQvNhGc/view?usp=sharing"

              />
          </div>
          <div className ="col-sm-6">
              <Cards
              tituloReferncia="Estructuras de Control Iterativas"
              autor_NombrePagina= "David J. Barnes, Michael Kölling"
              temas ="while,do-while,for"
              tipo ="Pagina web"
              link ="https://webs.um.es/ldaniel/iscyp17-18/13-estructuraRepetitiva.html"

              />
          </div>
          <div className ="col-sm-6">
              <Cards
              tituloReferncia="Interaccion de objetos"
              autor_NombrePagina= " tutorial de java"
              temas ="Encapsulamiento de objetos,interaccion de objetos"
              tipo ="Pagina web"
              link ="http://dis.um.es/~bmoros/Tutorial/parteA/capa-2.html"

              />
          </div>
          <div className ="col-sm-6">
              <Cards
              tituloReferncia="Herencia de clases"
              autor_NombrePagina= "Juan Pavón Mestras"
              temas ="Herencia,Polimorfismo, Subtipos,Herencia Múltiple "
              tipo ="PDF"
              link ="https://drive.google.com/file/d/19GFsGIsbr8YDmcbmSRfuETt6wZjSmquD/view?usp=sharing"

              />
          </div>
       
      </div>
     
      
    </div>
    
    </div>
  );
}


