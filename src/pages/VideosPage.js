import React, { Component } from "react";
import { Accordion } from "../components/AccordionComponent";
import Header from "../components/HeaderComponent";
import Videos from "../components/VideosComponent";
import "../css/VideoPageStyles.css";
import { getVideos } from "../server/api";

export default class VideosPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listVideos: [],
    };

    this.getVideosData = this.getVideosData.bind(this);
  }

  componentDidMount() {
    this.getVideosData();
  }

  async getVideosData() {
    const querySnapshot = await getVideos();
    let videos = [];
    querySnapshot.forEach((video) => {
      videos.push(video.data());
    });
    this.setState({ listVideos: videos });
  }

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
              <div className="col-lg-4 accordion-scroll">
                <Accordion accordionId="videos-accordion" />
              </div>
              <div className="col-lg-8">
                <div className="ratio ratio-16x9 videos-scroll">
                  <Videos listId={1} listVideos={this.state.listVideos} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
