import React from "react";

export default function Videos({ listId, listVideos }) {
  const getParameterByName = (name, url = window.location.href) => {
    name = name.replace(/[[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  };

  return (
    <div
      data-spy="scroll"
      data-target={`#list-${listId}`}
      data-offset="50"
      className="scrollspy-example"
    >
      {listVideos.map((video) => (
        <div
          id={`list-video-${video.videoId}`}
          key={`list-video-key-${video.videoId}`}
        >
          <div className="mb-4 ms-4 me-4">
            <div className="row">
              <h2>{video.title}</h2>
            </div>
            <div className="row embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item"
                width="720"
                height="480"
                src={`https://www.youtube.com/embed/${getParameterByName(
                  "v",
                  video.videoLink
                )}`}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}