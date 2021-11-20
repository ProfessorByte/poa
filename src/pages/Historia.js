import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import "../css/StylesHistoria.css";
import CardsNivel from "../components/CardsNivel";
import Header from "../components/HeaderHistoria";
import ModalGame from "../components/ModalGame";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../server/firebaseConfig";
import { getEstadosNivs, setEstadosNivs } from "../server/api";
import Footer from "../components/FooterMainPage";
import { stories } from "../consts/stories";

//Escenas1//
import imagen1 from "../assets/escenas1/arbol.jpg";
import imagen2 from "../assets/escenas1/city.jpg";
import imagen3 from "../assets/escenas1/oly1.jpg";
import imagen4 from "../assets/escenas/img6.png";
import imagen5 from "../assets/escenas/img5.png";
import { levelsIni } from "../consts/levels";

export default function Historia() {
  //Para obtener el estado de un usuario//
  const [globalUser, setGlobalUser] = useState(null);
  const [listEstadosNivs, setListEstadosNivs] = useState([]);
  const [idUsuario, setIdUsuario] = useState(null);
  const [currentStory, setCurrentStory] = useState(stories[0]);
  const modalId = "modalGame";

  onAuthStateChanged(auth, (userFirebase) => {
    setGlobalUser(userFirebase);
  });

  const getEstadosNivsData = async () => {
    if (globalUser !== null) {
      let usuarioId = null;
      const userid = await globalUser.uid;
      const querySnapshot = await getEstadosNivs(userid);
      let estados = [];
      await querySnapshot.forEach((estado) => {
        usuarioId = estado.id;
        estados.push(estado.data()["levels"]);
      });
      setListEstadosNivs(estados);
      await setIdUsuario(usuarioId);
    } else {
      if (localStorage.getItem("levels")) {
        setListEstadosNivs(JSON.parse(localStorage.getItem("levels")));
      } else {
        localStorage.setItem("levels", JSON.stringify(levelsIni));
        setListEstadosNivs(levelsIni);
      }
    }
  };

  useEffect(() => {
    getEstadosNivsData();
  }, [globalUser]);

  const unblockLevel = async () => {
    let level = listEstadosNivs[0];
    level[currentStory.id - 1].estado = 1;
    if (level[currentStory.id] && level[currentStory.id].estado === -1) {
      level[currentStory.id].estado = 0;
    }
    setListEstadosNivs([level]);
    if (globalUser !== null) {
      // Save data to firebase
      let arr = listEstadosNivs[0];
      await setEstadosNivs(idUsuario, arr);
    } else {
      console.log(levelsIni);
      localStorage.setItem("levels", JSON.stringify([level]));
      setListEstadosNivs([level]);
    }
  };
  return (
    <>
      <ModalGame
        modalId={modalId}
        story={currentStory}
        unblockLevel={unblockLevel}
      />
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
              <h2 className="titulosTema">Objetos y Clases:</h2>
              <CardsNivel
                minId={1}
                maxId={2}
                modalId={modalId}
                functionChange={setCurrentStory}
                estados={listEstadosNivs}
              />
              <h2 className="titulosTema">Encapsulamiento:</h2>
              <CardsNivel
                minId={3}
                maxId={3}
                modalId={modalId}
                functionChange={setCurrentStory}
                estados={listEstadosNivs}
              />

              <h2 className="titulosTema">Definiciones de Clases:</h2>
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
              <h2 className="titulosTema">Estructuras de Control:</h2>
              <CardsNivel
                minId={8}
                maxId={8}
                modalId={modalId}
                functionChange={setCurrentStory}
                estados={listEstadosNivs}
              ></CardsNivel>
              <h2 className="titulosTema">Interaccion de objetos:</h2>
              <CardsNivel
                minId={9}
                maxId={9}
                modalId={modalId}
                functionChange={setCurrentStory}
                estados={listEstadosNivs}
              ></CardsNivel>
              <h2 className="titulosTema">Arreglos y Matrices:</h2>
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
            bgImage={imagen4}
            strength={500}
            bgImageStyle={{ height: "100%" }}
            // style={{height:800}}
          >
            <div style={{ height: 800 }}>
              <h2 className="titulosTema">
                Estructuras de control iterativas:
              </h2>
              <CardsNivel
                minId={11}
                maxId={11}
                modalId={modalId}
                functionChange={setCurrentStory}
                estados={listEstadosNivs}
              />
              <h2 className="titulosTema">Herencia:</h2>
              <CardsNivel
                minId={12}
                maxId={15}
                modalId={modalId}
                functionChange={setCurrentStory}
                estados={listEstadosNivs}
              />
              <h2 className="titulosTema">Polimorfismo:</h2>
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
      <Footer />
    </>
  );
}
