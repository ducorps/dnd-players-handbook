import { useEffect, useState } from "react";
import * as Progress from "@radix-ui/react-progress";
import styles from "./NewCharacter.module.scss";
import SecondStep from "../../components/Steps/SecondStep/SecondStep";
import FirstStep from "../../components/Steps/FirstStep/FirstStep";
import CharacterInfo from "../../components/CharacterInfo/CharacterInfo";
import ThirdStep from "../../components/Steps/ThirdStep/ThirdStep";
import FifthStep from "../../components/Steps/FifthStep/FifthStep";
import FourthStep from "../../components/Steps/FourthStep/FourthStep";
import SixthStep from "../../components/Steps/SixthStep/SixthStep";
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

export function NewCharacter() {
  const [step, setStep] = useState<Steps>(Steps.RACE);
  const [progress, setProgress] = useState(0);
  const [character, setCharacter] = useState<any>(null);

  const params = useParams();

  async function getCharacter(idCharacter: string) {
    return await api.get(`/characters/${idCharacter}`)
  }

  useEffect(()=> {
    const idCharacter: string = params.idCharacter!;

   getCharacter(idCharacter).then((response) => {
     console.log(response)
     setCharacter(response.data);
   });

  },[])

  function handleNextStep() {
    if (step < 6) {
      const newStep = step + 1;
      setProgress(step * 20);
      setStep(newStep);
    }
  }

  const handleSaveRace = async (race: string) => {
    console.log(race)
    await api.post(`/characters/${character.id}/race`, {
      raceType: race
    }).then((response) => {
      setCharacter(response.data);
    })

    handleNextStep();
  };

  const handleSaveClass = async (characterClass: string) => {
    console.log(characterClass)
    await api.post(`/characters/${character.id}/class`, {
      classType: characterClass
    }).then((response) => {
      setCharacter(response.data)
    })

    handleNextStep();
  };

  const handleSaveBackground = async (background: string) => {
    console.log(background)
    await api.post(`/characters/${character.id}/background`, {
        backgroundType: background
    }).then((response) => {
        setCharacter(response.data)
    })

    handleNextStep();
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
              {step === Steps.RACE && <FirstStep handleSaveRace={handleSaveRace}/>}
              {step === Steps.CLASS && <SecondStep handleSaveClass={handleSaveClass} />}
              {step === Steps.ABILITIES && <ThirdStep handleSaveBackground={handleSaveBackground}/>}
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
