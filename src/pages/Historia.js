import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import "../css/StylesHistoria.css";
import CardsNivel from "../components/CardsNivel";
import Header from "../components/HeaderHistoria";
import ModalGame from "../components/ModalGame";

import { getEstadosNivs } from "../server/api";
import Footer from "../components/FooterMainPage";
import { stories } from "../consts/stories";
import { levelsIni } from "../consts/levels";
import { useSigninCheck } from "reactfire";
import { updateDoc } from "@firebase/firestore";

//Escenas1//
import imagen1 from "../assets/escenas1/arbol.jpg";
import imagen2 from "../assets/escenas1/city.jpg";
import imagen3 from "../assets/escenas1/oly1.jpg";
import imagen4 from "../assets/escenas/img6.png";
import imagen5 from "../assets/escenas/img5.png";

export default function Historia() {
  //Para obtener el estado de un usuario//
  const { status, data: signInCheckResult } = useSigninCheck();

  const [listEstadosNivs, setListEstadosNivs] = useState(levelsIni);
  const [currentStory, setCurrentStory] = useState(stories[0]);
  const modalId = "modalGame";

  const getEstadosNivsData = async () => {
    if (status !== "loading" && signInCheckResult.signedIn) {
      const querySnapshot = await getEstadosNivs(signInCheckResult.user.uid);
      let estados = [];
      await querySnapshot.forEach((estado) => {
        estados.push(estado.data()["levels"]);
      });
      setListEstadosNivs(estados);
    } else if (status !== "loading") {
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
  }, [status]);

  const unblockLevel = async () => {
    let level = listEstadosNivs[0];
    level[currentStory.id - 1].estado = 1;
    if (level[currentStory.id] && level[currentStory.id].estado === -1) {
      level[currentStory.id].estado = 0;
    }
    setListEstadosNivs([level]);
    if (status !== "loading" && signInCheckResult.signedIn) {
      const usersData = await getEstadosNivs(signInCheckResult.user.uid);
      usersData.forEach(async (userD) => {
        await updateDoc(userD.ref, {
          levels: level,
        });
      });
    } else {
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
