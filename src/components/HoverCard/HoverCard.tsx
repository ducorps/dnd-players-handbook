import { ReactNode } from "react";
import styles from "./HoverCard.module.scss";
import * as RadixHoverCard from "@radix-ui/react-hover-card";

type HoverCard = {
  children: ReactNode;
};

export function HoverCard({ children }: HoverCard) {
  return (
    <RadixHoverCard.Portal>
      <RadixHoverCard.Content className={styles.hoverCardContent}>
        <RadixHoverCard.Arrow className={styles.hoverCardArrow} />
        {children}
      </RadixHoverCard.Content>
    </RadixHoverCard.Portal>
  );
}
