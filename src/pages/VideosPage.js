import React, { Component } from "react";
import { Accordion } from "../components/AccordionComponent";
import { ButtonBack } from "../components/ButtonBackComponent";
import Header from "../components/HeaderComponent";
import Videos from "../components/VideosComponent";
import { VIDEOS } from "../consts/videos";
import "../css/VideoPageStyles.css";

export default class VideosPage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="video-background">
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
            <div className="row mt-5">
              <div className="col-md-4 accordion-scroll">
                <Accordion accordionId="videos-accordion" />
              </div>
              <div className="col-md-8 videos-scroll">
                <Videos listId={1} listVideos={VIDEOS} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
