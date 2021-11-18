import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../server/firebaseConfig";
import CardNivel from "./CardNivel";
import Nivs from "../nivs.json";
import { getEstadosNivs } from "../server/api";

export default function CardsNivel({ minId, maxId }) {
  const [globalUser, setGlobalUser] = useState(null);
  const [listEstadosNivs, setListEstadosNivs] = useState([]);

  onAuthStateChanged(auth, (userFirebase) => {
    setGlobalUser(userFirebase);
  });

  const getEstadosNivsData = async () => {
    const querySnapshot = await getEstadosNivs(userid); 
    let estados = [];
    querySnapshot.forEach((estado) => {
      estados.push(estado.data()["levels"]);
    });
    setListEstadosNivs(estados); 
  };

  const closedIntervalNivs = (listNivs, minId, maxId) => {
    let a = listNivs.filter((nivel) => nivel.id >= minId && nivel.id <= maxId);
    let res = [];
    if (listEstadosNivs.length !== 0){
      let auxList = listEstadosNivs[0];
      a.forEach(element => {
          var myObj = {
            "id": element["id"],
            "titulo": element["titulo"],
            "estado": auxList.find( obj => obj.id === element["id"])["estado"]
          }
          res.push(myObj);
      });
    }else{
      res = a;
    }
    return res;
  };

  var userid = null;
  
  if (globalUser !== null){
    console.log(userid);
    userid = globalUser.uid;
    if(listEstadosNivs.length===0){
      getEstadosNivsData();
    }
  }

  useEffect(() => {
    getEstadosNivsData();
  }, []);
  
  return (
    <div className="container flex-container">
      <div className="row">
        { closedIntervalNivs(Nivs, minId, maxId).map((post) => {
          return (
            <div className="col-md-3 flex">
              <CardNivel
                estado={post.estado}
                titulo={post.titulo}
                id={post.id}
              ></CardNivel>
            </div>
          );
        })}
      </div>
    </div>
  );
}
