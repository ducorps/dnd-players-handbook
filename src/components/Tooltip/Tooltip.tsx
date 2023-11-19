import { ReactNode } from 'react';

import * as RadixTooltip from "@radix-ui/react-tooltip";
import styles from "./Tooltip.module.scss";

type TooltipType = {
    tooltip: string;
    children: ReactNode
}

export function Tooltip({ children, tooltip }: TooltipType) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className={styles.radixTooltipContent}
            sideOffset={5}
          >
            {tooltip}
            <RadixTooltip.Arrow className={styles.radixTooltipArrow} />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
