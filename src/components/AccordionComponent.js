import React from "react";
import { AccordionItem } from "./AccordionItemComponent";

export const Accordion = ({ accordionId, listSections }) => {
  return (
    <div className="accordion" id={accordionId}>
      {listSections.map((section) => (
        <AccordionItem
          key={`accordion-item-key-${section.sectionId}`}
          accordionId={accordionId}
          itemId={section.sectionId}
          expanded={false}
          title={section.title}
          listTitles={section.topics}
          listItemActive={section.sectionId === 1 ? 0 : -1}
        />
      ))}
    </div>
  );
};
