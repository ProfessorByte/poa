import { auto } from "@popperjs/core";
import React from "react";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import "../css/StylesHistoria.css";
import CardsNivel from "../components/CardsNivel";
import Header from "../components/HeaderMainPage";



//Escenas1// 
import imagen1 from "../assets/escenas1/arbol.jpg";
import imagen2 from "../assets/escenas1/city.jpg";
import imagen4 from "../assets/escenas1/oly.jpg"; 
import imagen5 from "../assets/escenas1/isla.jpg";
import imagen3 from "../assets/escenas1/oly1.jpg";

export default function Historia (){
  return(
    <> 
    <Header/>
   <div className="Historia"> 
     
    <div className="parallax1">
      <Parallax 
        bgImage={imagen1}
        strength={500}
        bgImageStyle={{height:'100%'}}
        //style={{height:850}}
          >
          <div style={{ height: 800 }}>
          <h2>Objetos y Clases:</h2>
          <CardsNivel minId={1} maxId={2}></CardsNivel>
          <h2>Encapsulamiento:</h2>
          <CardsNivel minId={3} maxId={3}></CardsNivel>
          <h2>Definiciones de Clases:</h2>
          <CardsNivel minId={4} maxId={7}></CardsNivel>
          </div>
      </Parallax>
     </div>


     <div className="parallax1">
     <Parallax
      bgImage={imagen2}
      strength={500}
      bgImageStyle={{height:'100%'}}
      //style={{height:800}}
      
     >
          <div style={{ height: 800 }}>
          <h2>Estructuras de Control:</h2>
          <CardsNivel minId={11} maxId={11}></CardsNivel>
          <h2>Interaccion de objetos:</h2>
          <CardsNivel minId={8} maxId={8}></CardsNivel>
          <h2>Arreglos y Matrices:</h2>
          <CardsNivel minId={9} maxId={9}></CardsNivel>
          </div>

     </Parallax>     
     </div>


    
     <div className="parallax1">
     <Parallax
      bgImage={imagen3}
      strength={500}
      bgImageStyle={{height:'100%'}}
      // style={{height:800}}
     >
       <div style={{ height: 800 }}>
        <h2>Estructuras de control iterativas:</h2>
        <CardsNivel minId={10} maxId={10}></CardsNivel>
        <h2>Herencia:</h2>
        <CardsNivel minId={12} maxId={15}></CardsNivel>
        <h2>Polimorfismo:</h2>
        <CardsNivel minId={16} maxId={17}></CardsNivel>
       </div>
     </Parallax>
     </div>

    

     
 {/*
     <div className="parallax1">
     <Parallax 
      bgImage={img5}
      strength={500}
      bgImageStyle={{height:'100%'}}
      //style={{height:800}}
     >
       <div style={{ height: 800 }}>
       </div>
     </Parallax>
     </div>

     <div className="parallax1">
     <Parallax
      bgImage={img6}
      strength={500}
      bgImageStyle={{height:'100%'}}
      //style={{height:800}}
     >
      <div style={{ height: 800 }}>
      </div>
     </Parallax>
     </div>

     <div className="parallax1"> 
     <Parallax
      bgImage={img7}
      strength={500}
      bgImageStyle={{height:'100%'}}
      //style={{height:800}}
     >
      <div style={{ height: 800 }}>
      </div>
     </Parallax>
     </div>

     <div className="parallax1"> 
     <Parallax
      bgImage={img8}
      strength={500}
      bgImageStyle={{height:'100%'}}
      //style={{height:800}}
     >
      <div style={{ height: 800 }}>
      </div>
     </Parallax>
     </div>
     */}


   </div>
   </>
  )
}

