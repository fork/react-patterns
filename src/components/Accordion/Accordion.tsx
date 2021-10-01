import React from 'react';

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';
import Text from '../Text';

import StyledAccordion from './Accordion.style';

type AccordionItem = {
  title: string;
  content: string;
};

export type AccordionProps = {
  items: AccordionItem[];
};

const Accordion = ({ items }: AccordionProps) => (
  <StyledAccordion allowZeroExpanded allowMultipleExpanded>
    {items.map(item => (
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <Text as="span" variant="button">
              {item.title}
            </Text>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <Text as="span">{item.content}</Text>
        </AccordionItemPanel>
      </AccordionItem>
    ))}
  </StyledAccordion>
);

export default Accordion;
