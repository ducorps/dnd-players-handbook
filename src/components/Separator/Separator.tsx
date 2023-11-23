import * as RadixSeparator from "@radix-ui/react-separator";
import styles from "./Separator.module.scss";

type TooltipType = {
  orientation: "horizontal" | "vertical";
};

export function Separator({ orientation }: TooltipType) {
  return (
    <RadixSeparator.Root
      className={
        orientation === "vertical"
          ? styles.verticalSeparator
          : styles.horizontalSeparator
      }
      decorative
      orientation={orientation}
    />
  );
}
