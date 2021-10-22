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
        listTitles={closedIntervalVideos(VIDEOS, 0, 4)}
        listItemActive={0}
      />
      <AccordionItem
        accordionId={accordionId}
        itemId={1}
        expanded={false}
        title="Objetos y Clases"
        listTitles={closedIntervalVideos(VIDEOS, 5, 7)}
        listItemActive={-1}
      />
      <AccordionItem
        accordionId={accordionId}
        itemId={2}
        expanded={false}
        title="Encapsulamiento"
        listTitles={closedIntervalVideos(VIDEOS, 8, 9)}
        listItemActive={-1}
      />
      <AccordionItem
        accordionId={accordionId}
        itemId={3}
        expanded={false}
        title="Definiciones de clases"
        listTitles={closedIntervalVideos(VIDEOS, 10, 13)}
        listItemActive={-1}
      />
      <AccordionItem
        accordionId={accordionId}
        itemId={4}
        expanded={false}
        title="Estructuras de control"
        listTitles={closedIntervalVideos(VIDEOS, 14, 17)}
        listItemActive={-1}
      />
      <AccordionItem
        accordionId={accordionId}
        itemId={5}
        expanded={false}
        title="Interaccion de objetos"
        listTitles={closedIntervalVideos(VIDEOS, 18, 18)}
        listItemActive={-1}
      />
      <AccordionItem
        accordionId={accordionId}
        itemId={6}
        expanded={false}
        title="Arrays y Matrices"
        listTitles={closedIntervalVideos(VIDEOS, 19, 23)}
        listItemActive={-1}
      />
      <AccordionItem
        accordionId={accordionId}
        itemId={7}
        expanded={false}
        title="Estructuras de control iterativas"
        listTitles={closedIntervalVideos(VIDEOS, 24, 30)}
        listItemActive={-1}
      />
      <AccordionItem
        accordionId={accordionId}
        itemId={8}
        expanded={false}
        title="Herencia"
        listTitles={closedIntervalVideos(VIDEOS, 31, 35)}
        listItemActive={-1}
      />
      <AccordionItem
        accordionId={accordionId}
        itemId={9}
        expanded={false}
        title="Polimorfismo"
        listTitles={closedIntervalVideos(VIDEOS, 36, 36)}
        listItemActive={-1}
      />
    </div>
  );
};
