import React from "react";
import { useFirestoreCollectionData } from "reactfire";
import { Accordion } from "../components/AccordionComponent";
import Footer from "../components/FooterRepositorio";
import Header from "../components/HeaderVideos&Biblio";
import { ModalAdministrarVideos } from "../components/ModalAdministrarVideos";
import Videos from "../components/VideosComponent";
import "../css/VideoPageStyles.css";
import { getVideosQuery } from "../server/api";

export const VideosPage = () => {
  const { status, data: listSections } = useFirestoreCollectionData(
    getVideosQuery()
  );

  const modalId = "modal-videos";

  return (
    <>
      {status !== "loading" && (
        <ModalAdministrarVideos modalId={modalId} listSections={listSections} />
      )}
      <Header />
      <div className="video-background">
        <div className="content-wrap">
          <div className="container">
            <div className="row mt-3">
              <div className="col">
                <h1>Videos</h1>
              </div>

              <div className="row">
                <div className="col-12">
                  <p>
                    Aquí podrás ver los vídeos ordenados por temas, desde el más
                    básico al más complicado
                  </p>
                </div>
              </div>
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
            {status === "loading" ? (
              <div>Cargando...</div>
            ) : (
              <div className="row mt-5 mb-3">
                <div className="col-lg-4 accordion-scroll">
                  <Accordion
                    accordionId="videos-accordion"
                    listSections={listSections}
                  />
                </div>
                <div className="col-lg-8">
                  <div className="ratio ratio-16x9 videos-scroll">
                    <Videos listId={1} listSections={listSections} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
