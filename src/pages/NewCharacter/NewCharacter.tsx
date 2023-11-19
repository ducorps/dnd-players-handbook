import { useState } from "react";
import * as Progress from "@radix-ui/react-progress";
import styles from "./NewCharacter.module.scss";

enum Steps {
  RACE = 1,
  CLASS = 2,
  ABILITIES = 3,
  BACKGROUND = 4,
  EQUIPMENT = 5,
}

export function NewCharacter() {
  const [step, setStep] = useState<Steps>(Steps.RACE);
  const [progress, setProgress] = useState(0);

  function handleNextStep() {
    if (step < 5) {
      const newStep = step + 1;
      setProgress(step * 25);
      setStep(newStep);
    }
  }

  function handlePreviousStep() {
    if (step > 1) {
      const newStep = step - 1;
      setProgress(newStep * 25 - 25);
      setStep(newStep);
    }
  }

  return (
    <>
      <Progress.Root className={styles.ProgressRoot} value={progress}>
        <Progress.Indicator
          className={styles.ProgressIndicator}
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>

      <div className={styles.containerStyle}>
        <div style={{ flexBasis: "70%" }} className={styles.boardStyle}>
          <div>
            <h2 className={styles.titleStyle}>New Character</h2>
          </div>

          <div>
            <button onClick={handlePreviousStep}>{"<"} previous</button>
            <button onClick={handleNextStep}>next {">"}</button>
          </div>

          <div className={styles.slideStyle}>
            {step === Steps.RACE && <div>1st step</div>}
            {step === Steps.CLASS && <div>2st step</div>}
            {step === Steps.ABILITIES && <div>3st step</div>}
            {step === Steps.BACKGROUND && <div>4st step</div>}
            {step === Steps.EQUIPMENT && <div>5st step</div>}
          </div>
        </div>

        <div style={{ flexBasis: "30%" }} className={styles.boardStyle}>
          <h2 className={styles.titleStyle}>Character</h2>
        </div>
      </div>
    </>
  );
}
