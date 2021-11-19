import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import "../css/StylesHistoria.css";
import CardsNivel from "../components/CardsNivel";
import Header from "../components/HeaderMainPage";
import ModalGame from "../components/ModalGame";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../server/firebaseConfig";
import { getEstadosNivs } from "../server/api";

import { stories } from "../consts/stories";

//Escenas1//
import imagen1 from "../assets/escenas1/arbol.jpg";
import imagen2 from "../assets/escenas1/city.jpg";
import imagen3 from "../assets/escenas1/oly1.jpg";

export default function Historia() {
  //Para obtener el estado de un usuario//
  const [globalUser, setGlobalUser] = useState(null);
  const [listEstadosNivs, setListEstadosNivs] = useState([]);
  const [currentStory, setCurrentStory] = useState(stories[0]);
  const modalId = "modalGame";

  onAuthStateChanged(auth, (userFirebase) => {
    setGlobalUser(userFirebase);
  });

  const getEstadosNivsData = async () => {
    if (globalUser !== null) {
      let userid = await globalUser.uid;

      const querySnapshot = await getEstadosNivs(userid);
      let estados = [];
      await querySnapshot.forEach((estado) => {
        estados.push(estado.data()["levels"]);
      });
      setListEstadosNivs(estados);
    }
  };

  useEffect(() => {
    getEstadosNivsData();
  }, [globalUser]);
  return (
    <>
      <ModalGame modalId={modalId} story={currentStory} />
      <Header />
      <div className="Historia">
        <div className="parallax1">
          <Parallax
            bgImage={imagen1}
            strength={500}
            bgImageStyle={{ height: "100%" }}
            //style={{height:850}}
          >
            <div style={{ height: 800 }}>
              <h2>Objetos y Clases:</h2>
              <CardsNivel
                minId={1}
                maxId={2}
                modalId={modalId}
                functionChange={setCurrentStory}
                estados={listEstadosNivs}
              />
              <h2>Encapsulamiento:</h2>
              <CardsNivel
                minId={3}
                maxId={3}
                modalId={modalId}
                functionChange={setCurrentStory}
                estados={listEstadosNivs}
              />

              <h2>Definiciones de Clases:</h2>
              <CardsNivel
                minId={4}
                maxId={7}
                modalId={modalId}
                functionChange={setCurrentStory}
                estados={listEstadosNivs}
              />
            </div>
          </Parallax>
        </div>
        <div className="parallax1">
          <Parallax
            bgImage={imagen2}
            strength={500}
            bgImageStyle={{ height: "100%" }}
            //style={{height:800}}
          >
            <div style={{ height: 800 }}>
              <h2>Estructuras de Control:</h2>
              <CardsNivel
                minId={8}
                maxId={8}
                modalId={modalId}
                functionChange={setCurrentStory}
                estados={listEstadosNivs}
              ></CardsNivel>
              <h2>Interaccion de objetos:</h2>
              <CardsNivel
                minId={9}
                maxId={9}
                modalId={modalId}
                functionChange={setCurrentStory}
                estados={listEstadosNivs}
              ></CardsNivel>
              <h2>Arreglos y Matrices:</h2>
              <CardsNivel
                minId={10}
                maxId={10}
                modalId={modalId}
                functionChange={setCurrentStory}
                estados={listEstadosNivs}
              ></CardsNivel>
            </div>
          </Parallax>
        </div>

        <div className="parallax1">
          <Parallax
            bgImage={imagen3}
            strength={500}
            bgImageStyle={{ height: "100%" }}
            // style={{height:800}}
          >
            <div style={{ height: 800 }}>
              <h2>Estructuras de control iterativas:</h2>
              <CardsNivel
                minId={10}
                maxId={10}
                modalId={modalId}
                functionChange={setCurrentStory}
                estados={listEstadosNivs}
              />
              <h2>Herencia:</h2>
              <CardsNivel
                minId={12}
                maxId={15}
                modalId={modalId}
                functionChange={setCurrentStory}
                estados={listEstadosNivs}
              />
              <h2>Polimorfismo:</h2>
              <CardsNivel
                minId={16}
                maxId={17}
                modalId={modalId}
                functionChange={setCurrentStory}
                estados={listEstadosNivs}
              />
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
  );
}
