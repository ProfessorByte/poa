import HeaderBibliografia from "../components/HeaderBibliografia";
import "../css/HeaderBibliografia.css";
import Cards from "../components/CardsBibliografia.js";
import Header from "../components/HeaderVideos&Biblio";
import React, { useState, useEffect } from "react";
import { getBibliographyQuery, getEstadosNivs } from "../server/api";
import { useFirestoreCollectionData, useSigninCheck } from "reactfire";
import { ModalAdministrarBibliografia } from "../components/ModalAdministrarBibliografia";

export default function BibliografiaPage() {
  const [allowManage, setAllowManage] = useState(false);

  const [listCards, setListCards] = useState([]);
  const { status, data: cards } = useFirestoreCollectionData(
    getBibliographyQuery()
  );

  const { status: statusUser, data: signInCheckResult } = useSigninCheck();

  useEffect(() => {
    if (status !== "loading") {
      setListCards(cards);
    }
  }, [status, cards]);

  const getUserData = async () => {
    if (statusUser !== "loading" && signInCheckResult.signedIn) {
      const userDataQuery = await getEstadosNivs(signInCheckResult.user.uid);
      userDataQuery.forEach((doc) => {
        if (doc.data().role === "admin") {
          setAllowManage(true);
        }
      });
    }
  };

  useEffect(() => {
    getUserData();
  }, [statusUser]);

  const modalId = "modal-bibliografia";

  return (
    <>
      <ModalAdministrarBibliografia modalId={modalId} listCards={listCards} />
      <div className="fondoBibliografia">
        <Header />
        <HeaderBibliografia />
        <div className="container">
          {status !== "loading" && allowManage && (
            <div className="row">
              <button
                className="col-auto m-3 btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={`#${modalId}`}
              >
                Administrar
              </button>
            </div>
          )}
        </div>

        <div className="wrapper-grid">
          {status === "loading" ? (
            <div className="container_cards">
              <Cards tituloReferencia="Cargando..." link="#" />
            </div>
          ) : (
            listCards.map((card) => (
              <div key={card.id} className="container_cards">
                <Cards
                  tituloReferencia={card.tituloReferencia}
                  autor_NombrePagina={card.autor_NombrePagina}
                  temas={card.temas}
                  tipo={card.tipo}
                  link={card.link}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
