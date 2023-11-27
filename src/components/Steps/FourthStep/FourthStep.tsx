import styles from './FourthStep.module.scss';
import {useState} from "react";

type FourthStepProps = {
    changeProficiencies: (proficiencies: string[]) => void;
}

export default function FourthStep({ changeProficiencies }: FourthStepProps) {

    const skills = ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"]

    const choose = 2;

    const [checkedState, setCheckedState] = useState(new Array(skills.length).fill(false));
    const handleOnChange = (position: number) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        // allow only 3 elements
        if (updatedCheckedState.filter(v => v).length >= choose + 1) {
            return
        }

        setCheckedState(updatedCheckedState);

        let checkedProf: string[] = []
        updatedCheckedState.map((item, index): void => {
                if (item) {
                    checkedProf.push(skills[index])
                }
            }
        );

        changeProficiencies(checkedProf);
    };

    return (
        <div className={styles.fourthStepContainer}>
            <div className={styles.fourthStepTitle}>Select up to "{choose}" Proficiencies</div>
            <div className={styles.skillsContainer}>
                {skills.map((skill, index) => (
                    <div key={skill} className={styles.checkbox}>
                        <input type='checkbox'
                               id={`custom-checkbox-${index}`}
                               name={skill}
                               value={skill}
                               checked={checkedState[index]}
                               onChange={(e) => handleOnChange(index, e)}/>
                        <div>{skill}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}