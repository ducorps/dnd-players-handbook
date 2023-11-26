import { useEffect, useState } from "react";
import * as Progress from "@radix-ui/react-progress";
import styles from "./NewCharacter.module.scss";
import SecondStep from "../../components/SecondStep/SecondStep";
import FirstStep from "../../components/FirstStep/FirstStep";
import CharacterInfo from "../../components/CharacterInfo/CharacterInfo";
import ThirdStep from "../../components/ThirdStep/ThirdStep";
import FifthStep from "../../components/FifthStep/FifthStep";
import FourthStep from "../../components/FourthStep/FourthStep";
import SixthStep from "../../components/SixthStep/SixthStep";
import { api } from "../../api/api";
import {useParams} from "react-router";

enum Steps {
  RACE = 1,
  CLASS = 2,
  ABILITIES = 3,
  BACKGROUND = 4,
  PROFICIENCIES = 5,
  EQUIPMENT = 6,
}

type CharacterType = object

export function NewCharacter() {
  const [step, setStep] = useState<Steps>(Steps.RACE);
  const [progress, setProgress] = useState(0);
  const [character, setCharacter] = useState<CharacterType>();

  const params = useParams();

  async function getCharacter(idCharacter: string) {
    return await api.get(`/characters/${idCharacter}`)
  }

  useEffect(()=> {
    const idCharacter: string = params.idCharacter!;

    const character = getCharacter(idCharacter);

    setCharacter(character);

  },[params.idCharacter])

  function handleNextStep() {
    if (step < 6) {
      const newStep = step + 1;
      setProgress(step * 20);
      setStep(newStep);
    }
  }

  function handlePreviousStep() {
    if (step > 1) {
      const newStep = step - 1;
      setProgress(Math.ceil(newStep * 20 - 20));
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
        <div style={{ flexBasis: "70%", flexDirection: "row" }} className={styles.boardStyle}>
          <div>
            <h2 className={styles.titleStyle}>New Character</h2>
          </div>

          <div className={styles.stepsContainer}>

            <div style={{ display: "flex", alignItems: "center" }}>
              <button onClick={handlePreviousStep}><img src="/src/assets/chavron-left.svg" alt="Left icon" /></button>
            </div>

            <div className={styles.slideStyle}>
              {step === Steps.RACE && <FirstStep />}
              {step === Steps.CLASS && <SecondStep character={character} />}
              {step === Steps.ABILITIES && <ThirdStep />}
              {step === Steps.BACKGROUND && <FourthStep />}
              {step === Steps.PROFICIENCIES && <FifthStep />}
              {step === Steps.EQUIPMENT && <SixthStep />}
            </div>

            <div style={{ display: "flex", alignItems: "center" }}><button onClick={handleNextStep}>
              <img src="/src/assets/chavron-right.svg" alt="Right icon" /></button>
            </div>
          </div>
        </div>

        <div style={{ flexBasis: "30%" }} className={styles.boardStyle}>
          <h2 className={styles.titleStyle}>Character</h2>
          <CharacterInfo />
        </div>
      </div>
    </>
  );
}
