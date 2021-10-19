import React, { useState } from "react";

export const AccordionItem = ({
  accordionId,
  itemId,
  expanded,
  title,
  listTitles,
  listItemActive,
}) => {
  const [currentVideo, setCurrentVideo] = useState(listItemActive);
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`item-${itemId}`}>
        <button
          className={
            expanded ? "accordion-button" : "accordion-button collapsed"
          }
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${itemId}`}
          aria-expanded={expanded}
          aria-controls={`collapse${itemId}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse${itemId}`}
        className={
          expanded
            ? "accordion-collapse collapse show"
            : "accordion-collapse collapse"
        }
        aria-labelledby={`item-${itemId}`}
        data-bs-parent={`#${accordionId}`}
      >
        <div className="accordion-body">
          <div id={`list-${itemId}`} className="list-group">
            {listTitles.map((titleId) => (
              <a
                className={`list-group-item list-group-item-action ${
                  titleId.videoId === currentVideo ? "active" : ""
                }`}
                key={`list-key-${titleId.videoId}`}
                href={`#list-video-${titleId.videoId}`}
                onClick={() => setCurrentVideo(titleId.videoId)}
              >
                {titleId.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
