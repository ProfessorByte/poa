import React, { Component } from "react";
import { Accordion } from "../components/AccordionComponent";
import { ButtonBack } from "../components/ButtonBackComponent";
import Videos from "../components/VideosComponent";

export default class VideosPage extends Component {
  render() {
    return (
      <>
        <ButtonBack dir="/" />
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
            <div className="col-4">
              <Accordion
                accordionId="videos-accordion"
                changeVideo={() => this.changeVideo}
              />
            </div>
            <div className="col-8 videos-scroll">
              <Videos
                listId={1}
                listVideos={[
                  {
                    videoId: 1,
                    title: "titulo 1",
                    videoLink: "https://www.youtube.com/embed/36x21Ogn91w",
                  },
                  {
                    videoId: 2,
                    title: "titulo 2",
                    videoLink: "https://www.youtube.com/embed/9-2kr7GFatE",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
