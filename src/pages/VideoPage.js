import React, { Component } from "react";
import { Accordion } from "../components/AccordionComponent";
import Videos from "../components/VideoComponent";
import { VIDEOS } from "../consts/videos";

export default class VideosPage extends Component {
  render() {
    return (
      <div className="video-background">
        <div className="container-fluid">
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
          <div className="row mt-4 ms-4 me-4">
            <div div className="col-sm-8 videos-scroll">
              <Videos listId={1} listVideos={VIDEOS} />
              </div>
            <div className="col-sm-4 mt-3">
              <Accordion accordionId="videos-accordion" />
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}