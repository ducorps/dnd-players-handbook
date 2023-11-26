import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import React, { ReactNode } from "react";
import styles from "./AccordionItem.module.scss";

type AccordionItemType = {
  children: ReactNode;
  title: string;
  value: string;
};

type AccordionTriggerType = {
  children: ReactNode;
};

export function AccordionItem({ children, title, value }: AccordionItemType) {
  const AccordionTrigger = React.forwardRef(
    ({ children }: AccordionTriggerType) => (
      <Accordion.Header className={styles.accordionHeader}>
        <Accordion.Trigger className={styles.accordionTrigger}>
          {children}
          <ChevronDownIcon
            color="#F2AF29"
            className={styles.accordionChevron}
            aria-hidden
          />
        </Accordion.Trigger>
      </Accordion.Header>
    )
  );

  return (
    <Accordion.Item className={styles.accordionItem} value={value}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <Accordion.Content className={styles.accordionContent}>
        <div className={styles.accordionContentText}>{children}</div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
