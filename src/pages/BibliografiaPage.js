import HeaderBibliografia from "../components/HeaderBibliografia";
import "../css/HeaderBibliografia.css";
import Cards from "../components/CardsBibliografia.js";
import Header from "../components/HeaderVideos&Biblio";
import React, { useState, useEffect } from "react";
import { getBibliographyQuery } from "../server/api";
import { useFirestoreCollectionData } from "reactfire";
import { ModalAdministrarBibliografia } from "../components/ModalAdministrarBibliografia";

export default function BibliografiaPage() {
  const [listCards, setListCards] = useState([]);
  const { status, data: cards } = useFirestoreCollectionData(
    getBibliographyQuery()
  );

  useEffect(() => {
    if (status !== "loading") {
      setListCards(cards);
    }
  }, [status, cards]);

  const modalId = "modal-bibliografia";

  return (
    <>
      <ModalAdministrarBibliografia modalId={modalId} listCards={listCards} />
      <div className="fondoBibliografia">
        <Header />
        <HeaderBibliografia />
        <div className="container">
          {status !== "loading" && (
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
              <Cards tituloReferncia="Cargando..." link="#" />
            </div>
          ) : (
            listCards.map((card) => (
              <div key={card.id} className="container_cards">
                <Cards
                  tituloReferncia={card.tituloReferncia}
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
