import React, { useState, useEffect } from "react";
import { useFirestoreCollectionData } from "reactfire";
import { Accordion } from "../components/AccordionComponent";
import Footer from "../components/FooterRepositorio";
import Header from "../components/HeaderVideos&Biblio";
import Videos from "../components/VideosComponent";
import "../css/VideoPageStyles.css";
import { getVideosQuery } from "../server/api";

export const VideosPage = () => {
  const [listVideos, setListVideos] = useState([]);
  const { status, data } = useFirestoreCollectionData(getVideosQuery());

  useEffect(() => {
    if (status !== "loading") {
      setListVideos(data);
    }
  }, [data, status]);

  return (
    <>
      <Header />
      <div className="video-background">
        <div className="content-wrap">
          <div className="container">
            <div className="row mt-3">
              <div className="col">
                <h1>Videos</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>
                  Aquí podrás ver los vídeos ordenados por temas, desde el más
                  básico al más complicado
                </p>
              </div>
            </div>
            <div className="row mt-5 mb-3">
              <div className="col-lg-4 accordion-scroll">
                <Accordion accordionId="videos-accordion" />
              </div>
              <div className="col-lg-8">
                <div className="ratio ratio-16x9 videos-scroll">
                  <Videos listId={1} listVideos={listVideos} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

