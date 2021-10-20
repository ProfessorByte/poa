import React, { Component } from "react";
import { Accordion } from "../components/AccordionComponent";
import Videos from "../components/VideoComponent";
import { VIDEOS } from "../consts/videos";

export default class VideosPage extends Component {
  render() {
    return (
      <div className="video-background">
        <div className="container custom-container">
          <div className="rows">
            <div className="col ">
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
            <div className="col-4">
              <Accordion accordionId="videos-accordion" />
            </div>
            <div className="col-8 videos-scroll">
              <Videos listId={1} listVideos={VIDEOS} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}