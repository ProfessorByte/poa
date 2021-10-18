import React from "react";

export default function Video({ listId, listVideos }) {
  return (
    <div
      data-spy="scroll"
      data-target={`#list-${listId}`}
      data-offset="50"
      class="scrollspy-example"
    >
      {listVideos.map((video) => (
        <div id={`list-video-${video["videoId"]}`}>
          <div className="mb-4 ms-4 me-4">
            <div className="row">
              <br/>
              <br/>
              <br/>
              <h2>{video["title"]}</h2>
              <br/>
              <br/>
              <br/>
            </div>
            <div className="row" id="corner-wrapper">
              <iframe
                width="720"
                height="480"
                src={video["videoLink"]}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameborder="0" 
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}