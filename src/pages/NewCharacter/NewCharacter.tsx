import { useState } from "react";
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

  function handleSetStep() {
    if (step < 5) {
      const newStep = step + 1;
      
      setStep(newStep);
    }
  }

  return (
    <div className={styles.containerStyle}>
      <div style={{ flexBasis: "70%" }} className={styles.boardStyle}>
        <div>
          <h2 className={styles.titleStyle}>New Character</h2>
        </div>
        <button onClick={handleSetStep}>next step {">"}</button>

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
  );
}
