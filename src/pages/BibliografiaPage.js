import HeaderBibliografia from "../components/HeaderBibliografia";
import "../css/HeaderBibliografia.css";
import Cards from "../components/CardsBibliografia.js";
import Header from "../components/HeaderComponent";
import React, { useState, useEffect } from "react";
import { getBibliographyQuery } from "../server/api";
import { useFirestoreCollectionData } from "reactfire";

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

  return (
    <div className="fondoBibliografia">
      <Header />
      <HeaderBibliografia />

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
  );
}





 