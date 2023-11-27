import styles from './FifthStep.module.scss';
import {useState} from "react";


type language = {
    languageType: string;
}

type FifthStepProps = {
    changeSelectedLanguages: (arg0: language[]) => void;
}

export default function FifthStep({ changeSelectedLanguages }: FifthStepProps) {
    const languages = ["Common", "Dwarvish", "Elvish", "Giant", "Gnomish", "Orc", "Halfling", "Draconic"]
    const [language] = useState<language[]>([])

    function handleOnChange(e: React.ChangeEvent<HTMLSelectElement>, index: number) {
        language[index] = {languageType: e.target.value.toUpperCase()}


        changeSelectedLanguages(language);
    }

    return(
        <div className={styles.fifthContainer}>
            <div className={styles.selectContainer}>
                <div>Select a language:</div>
                <select onChange={(e) => handleOnChange(e, 0)}>
                    {languages.map((lang) => (
                        <option key={lang}>{lang}</option>
                    ))}
                </select>
            </div>
            <div className={styles.selectContainer}>
                <div>Select a language:</div>
                <select onChange={(e) => handleOnChange(e, 1)}>
                    {languages.map((lang) => (
                        <option key={lang}>{lang}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}