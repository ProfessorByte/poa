import React from "react";

export default function Videos({ listId, listSections }) {
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
      {listSections.map((section, index) => (
        <div key={`section-${index}`}>
          {section.topics.map((topic, index) => (
            <div
              id={`list-video-${index}-${section.sectionId}`}
              key={`list-video-key-${index}`}
            >
              <div className="pb-5 ms-4 me-4">
                <div className="row">
                  <h2>{topic.title}</h2>
                </div>
                <div className="ratio ratio-16x9">
                  <iframe
                    src={`https://www.youtube.com/embed/${getParameterByName(
                      "v",
                      topic.videoLink
                    )}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
