import Header from "../components/HeaderComponent";
import React from "react";
import Cards from "../components/Cards.jsx";

export default function Main() {
    return (

    <div className="App">

<Header />
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
              tituloReferncia="Herencia de clases"
              autor_NombrePagina= "Juan Pavón Mestras"
              temas ="Herencia ,Polimorfismo,Subtipos,Herencia Múltiple "
              tipo ="PDF"
              link ="https://drive.google.com/file/d/19GFsGIsbr8YDmcbmSRfuETt6wZjSmquD/view?usp=sharing"

              />
          </div>
          <div className ="col-sm-6">
              <Cards
              tituloReferncia="Programacion orientada a objetos con java usando Bluej"
              autor_NombrePagina= "David J. Barnes, Michael Kölling"
              temas ="Definicio de clases y objetos"
              tipo ="PDF"
              link ="https://onemonth.com/users/sign_in"

              />
          </div>
          <div className ="col-sm-6">
              <Cards
              tituloReferncia="Programacion orientada a objetos con java usando Bluej"
              autor_NombrePagina= "David J. Barnes, Michael Kölling"
              temas ="Definicio de clases y objetos"
              tipo ="PDF"
              link ="https://onemonth.com/users/sign_in"

              />
          </div>
      </div>
     
      
    </div>
    
    </div>
  );
}

