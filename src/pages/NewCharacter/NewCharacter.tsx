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
import { useParams } from "react-router";

enum Steps {
  RACE = 1,
  CLASS = 2,
  BACKGROUND = 3,
  ABILITIES = 4,
  PROFICIENCIES = 5,
  EQUIPMENT = 6,
}

type CharacterType = object

export function NewCharacter() {
  const [step, setStep] = useState<Steps>(Steps.RACE);
  const [progress, setProgress] = useState(0);
  const [character, setCharacter] = useState<CharacterType>();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRace, setSelectedRace] = useState<string>("");
  const [selectedProficiencies, setSelectedProficiencies] = useState<string[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [selectedBackground, setSelectedBackground] = useState<string>("");
  const [selectedLanguages, setSelectedLanguages] = useState<{ languageType: string }[]>([]);

  const params = useParams();

  async function getCharacter(idCharacter: string) {
    return await api.get(`/characters/${idCharacter}`);
  }

  useEffect(() => {
    const idCharacter: string = params.idCharacter!;

    const character = getCharacter(idCharacter);

    setCharacter(character);

  },[params.idCharacter])

  async function handleNextStep() {
    console.log(step)
    switch (step) {
      case 1:
          await saveRace();
        break;
      case 2:
          await saveClass();
        break;
      case 3:
          await saveBackground();
        break;
      case 4:
          await saveSelectedProficiencies();
        break;
      case 5:
        await saveSelectedLanguages();
        break;
    }
    if (step < 6) {
      const newStep = step + 1;
      setProgress(step * 20);
      setStep(newStep);
      setIsLoading(false)
    }
  }

  const changeSelectedLanguages = async (languages: { languageType: string }[]) => {
    setSelectedLanguages(languages)
  };

  async function saveSelectedLanguages() {
    if(!isLoading){
      await api.post(`/characters/${params.idCharacter}/language`,
          selectedLanguages
      ).then((response) => {
        setCharacter(response.data);
        setIsLoading(false)
      })
    }

    setIsLoading(true)
  }

  const changeSelectedProficiencies = async (proficiencies: string[]) => {
    setSelectedProficiencies(proficiencies)
  };

  async function saveSelectedProficiencies () {
    if(!isLoading){
      await api.post(`/characters/${params.idCharacter}/skill`,
          selectedProficiencies
      ).then((response) => {
        setCharacter(response.data);
        setIsLoading(false)
      })
    }

    setIsLoading(true)
  }

  const changeSelectedRace = async (race: string) => {
    setSelectedRace(race)
  };

  async function saveRace() {
    if(!isLoading){
      await api.post(`/characters/${params.idCharacter}/race`, {
        raceType: selectedRace
      }).then((response) => {
        setCharacter(response.data);
        setIsLoading(false)
      })
    }

    setIsLoading(true)
  }

  async function saveClass() {
    console.log(isLoading)
    if(!isLoading){
      await api.post(`/characters/${params.idCharacter}/class`, {
        classType: selectedClass
      }).then((response) => {
        setCharacter(response.data);
        setIsLoading(false)
      })
    }

    setIsLoading(true)
  }

  const changeSelectClass = async (characterClass: string) => {
    setSelectedClass(characterClass)
  };

  async function saveBackground() {
    if(!isLoading){
      await api.post(`/characters/${params.idCharacter}/background`, {
        backgroundType: selectedBackground
      }).then((response) => {
        setCharacter(response.data);
        setIsLoading(false)
      })
    }

    setIsLoading(true)
  }

  const changeSelectedBackground = async (background: string) => {
    setSelectedBackground(background)
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
      <div className={styles.containerStyle}>
        <div
          style={{ flexBasis: "70%", flexDirection: "row" }}
          className={styles.boardStyle}
        >
          <div className={styles.stepsContainer}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {step !== Steps.RACE && (
                <button onClick={handlePreviousStep}>
                  <img src="/src/assets/chavron-left.svg" alt="Left icon" />
                </button>
              )}
            </div>

            <div className={styles.slideStyle}>
              {step === Steps.RACE && <FirstStep changeRace={changeSelectedRace}/>}
              {step === Steps.CLASS && <SecondStep changeClass={changeSelectClass} />}
              {step === Steps.BACKGROUND && <ThirdStep changeBackground={changeSelectedBackground}/>}
              {step === Steps.ABILITIES && <FourthStep changeProficiencies={changeSelectedProficiencies}/>}
              {step === Steps.PROFICIENCIES && <FifthStep changeSelectedLanguages={ changeSelectedLanguages }/>}
              {step === Steps.EQUIPMENT &&  <CharacterInfo />}
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              {step !== Steps.EQUIPMENT && (
                <button onClick={handleNextStep}>
                  <img src="/src/assets/chavron-right.svg" alt="Right icon" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Progress.Root className={styles.ProgressRoot} value={progress}>
        <Progress.Indicator
          className={styles.ProgressIndicator}
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>
    </>
  );
}
