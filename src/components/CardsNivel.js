import React from "react";
import CardNivel from "./CardNivel";
import Nivs from "../nivs.json";

/*const [globalUser, setGlobalUser] = useState(null);
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
  };*/

export default function CardsNivel({
  minId,
  maxId,
  modalId,
  functionChange,
  estados,
}) {
  const closedIntervalNivs = (listNivs, minId, maxId) => {
    let a = listNivs.filter((nivel) => nivel.id >= minId && nivel.id <= maxId);
    let res = [];
    if (estados.length !== 0) {
      let auxList = estados[0];
      a.forEach((element) => {
        var myObj = {
          id: element["id"],
          titulo: element["titulo"],
          estado: auxList.find((obj) => obj.id === element["id"])["estado"],
        };
        res.push(myObj);
      });
    } else {
      res = a;
    }
    return res;
  };

  return (
    <div className="container flex-container">
      <div className="row">
        {closedIntervalNivs(Nivs, minId, maxId).map((post) => {
          return (
            <div key={`card${post.id}`} className="col-md-3 flex">
              <CardNivel
                estado={post.estado}
                titulo={post.titulo}
                num={post.id}
                modalId={modalId}
                functionChange={functionChange}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
