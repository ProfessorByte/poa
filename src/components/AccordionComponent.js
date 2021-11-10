import React, { useState, useEffect } from "react";
import { getVideos } from "../server/api";
import { AccordionItem } from "./AccordionItemComponent";

export const Accordion = ({ accordionId }) => {
  const [listVideos, setListVideos] = useState([]);

  const getVideosData = async () => {
    const querySnapshot = await getVideos();
    let videos = [];
    querySnapshot.forEach((video) => {
      videos.push(video.data());
    });
    setListVideos(videos);
  };

  const closedIntervalVideos = (listVideos, minId, maxId) => {
    return listVideos.filter(
      (video) => video.videoId >= minId && video.videoId <= maxId
    );
  };

  useEffect(() => {
    getVideosData();
  }, []);

  return (
    <div className="accordion" id={accordionId}>
      <AccordionItem
        accordionId={accordionId}
        itemId={0}
        expanded={false}
        title="Introducción"
        listTitles={closedIntervalVideos(listVideos, 0, 4)}
        listItemActive={0}
      />
      <AccordionItem
        accordionId={accordionId}
        itemId={1}
        expanded={false}
        title="Objetos y Clases"
        listTitles={closedIntervalVideos(listVideos, 5, 7)}
        listItemActive={-1}
      />
      <AccordionItem
        accordionId={accordionId}
        itemId={2}
        expanded={false}
        title="Encapsulamiento"
        listTitles={closedIntervalVideos(listVideos, 8, 9)}
        listItemActive={-1}
      />
      <AccordionItem
        accordionId={accordionId}
        itemId={3}
        expanded={false}
        title="Definiciones de clases"
        listTitles={closedIntervalVideos(listVideos, 10, 13)}
        listItemActive={-1}
      />
      <AccordionItem
        accordionId={accordionId}
        itemId={4}
        expanded={false}
        title="Estructuras de control"
        listTitles={closedIntervalVideos(listVideos, 14, 17)}
        listItemActive={-1}
      />
      <AccordionItem
        accordionId={accordionId}
        itemId={5}
        expanded={false}
        title="Interaccion de objetos"
        listTitles={closedIntervalVideos(listVideos, 18, 18)}
        listItemActive={-1}
      />
      <AccordionItem
        accordionId={accordionId}
        itemId={6}
        expanded={false}
        title="Arrays y Matrices"
        listTitles={closedIntervalVideos(listVideos, 19, 23)}
        listItemActive={-1}
      />
      <AccordionItem
        accordionId={accordionId}
        itemId={7}
        expanded={false}
        title="Estructuras de control iterativas"
        listTitles={closedIntervalVideos(listVideos, 24, 30)}
        listItemActive={-1}
      />
      <AccordionItem
        accordionId={accordionId}
        itemId={8}
        expanded={false}
        title="Herencia"
        listTitles={closedIntervalVideos(listVideos, 31, 35)}
        listItemActive={-1}
      />
      <AccordionItem
        accordionId={accordionId}
        itemId={9}
        expanded={false}
        title="Polimorfismo"
        listTitles={closedIntervalVideos(listVideos, 36, 39)}
        listItemActive={-1}
      />
    </div>
  );
};
