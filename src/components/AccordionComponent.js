import React from "react";
import { VIDEOS } from "../consts/videos";
import { AccordionItem } from "./AccordionItemComponent";

export const Accordion = ({ accordionId }) => {
  const closedIntervalVideos = (listVideos, minId, maxId) => {
    return listVideos.filter(
      (video) => video.videoId >= minId && video.videoId <= maxId
    );
  };

  return (
    <div className="accordion" id={accordionId}>
      <AccordionItem
        accordionId={accordionId}
        itemId={0}
        expanded={true}
        title="Introducción"
        listTitles={closedIntervalVideos(VIDEOS, 0, 3)}
        listItemActive={0}
      />
      <AccordionItem
        accordionId={accordionId}
        itemId={1}
        expanded={false}
        title="Conceptos básicos"
        listTitles={closedIntervalVideos(VIDEOS, 4, 11)}
        listItemActive={-1}
      />
    </div>
  );
};
