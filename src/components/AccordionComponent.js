import React from "react";
import { AccordionItem } from "./AccordionItemComponent";

export const Accordion = ({ accordionId }) => {
  return (
    <div className="accordion" id={accordionId}>
      <AccordionItem
        accordionId={accordionId}
        itemId={1}
        expanded={true}
        title="Introducción"
        listTitles={[
          { videoId: 1, title: "titulo 1", active: true },
          { videoId: 2, title: "titulo 2", active: false },
        ]}
      />
    </div>
  );
};
