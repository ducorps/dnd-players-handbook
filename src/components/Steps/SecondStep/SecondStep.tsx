import { useEffect, useState } from "react";
import styles from "./SecondStep.module.scss";
import * as Separator from '@radix-ui/react-separator';

type SecondStepProps = {
    changeClass: (characterClass: string) => void;
};

const descriptions = {
    BARBARIAN: "For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.",
    BARD: "Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds. The bard is a master of song, speech, and the magic they contain.",
    CLERIC: "Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.",
    DRUID: "Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment of nature's resilience, cunning, and fury. They claim no mastery over nature, but see themselves as extensions of nature's indomitable will.",
    FIGHTERS: "Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. They are well acquainted with death, both meting it out and staring it defiantly in the face.",
    MONK: "Monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.",
    PALADIN: "Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond.",
    RANGER: "Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.",
    ROGUE: "Rogues rely on skill, stealth, and their foes' vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.",
    SORCERER: "Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. No one chooses sorcery; the power chooses the sorcerer.",
    WARLOCK: "Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular.",
    WIZARD: "Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, brute-force mind control, and much more.",
}

export default function SecondStep({ changeClass }: SecondStepProps) {
    const [description, setDescription] = useState(descriptions.BARBARIAN);
    const [title, setTitle] = useState("BARBARIAN");

    const saveClass = (characterClass: string) => {
        setDescription(descriptions[characterClass]);
        setTitle(characterClass);

        changeClass(characterClass)
    }

    return (
        <div className={styles.firstStepContainer}>
            <div className={styles.classesContainer}>
                <div onClick={() => saveClass("BARBARIAN")} className={styles.classIcon}>
                    <img src="/src/assets/classes/barbarian-class.svg"/>
                </div>
                <div onClick={() => saveClass("BARD")} className={styles.classIcon}>
                    <img src="/src/assets/classes/bard-class.svg"/>
                </div>
                <div onClick={() => saveClass("CLERIC")} className={styles.classIcon}>
                    <img src="/src/assets/classes/cleric-class.svg"/>
                </div>
                <div onClick={() => saveClass("DRUID")} className={styles.classIcon}>
                    <img src="/src/assets/classes/druid-class.svg"/>
                </div>
                <div onClick={() => saveClass("FIGHTERS")} className={styles.classIcon}>
                    <img src="/src/assets/classes/fighter-class.svg"/>
                </div>
                <div onClick={() => saveClass("MONK")} className={styles.classIcon}>
                    <img src="/src/assets/classes/monk-class.svg"/>
                </div>
                <div onClick={() => saveClass("PALADIN")} className={styles.classIcon}>
                    <img src="/src/assets/classes/paladin-class.svg"/>
                </div>
                <div onClick={() => saveClass("RANGER")} className={styles.classIcon}>
                    <img src="/src/assets/classes/ranger-class.svg"/>
                </div>
                <div onClick={() => saveClass("ROGUE")} className={styles.classIcon}>
                    <img src="/src/assets/classes/rogue-class.svg"/>
                </div>
                <div onClick={() => saveClass("SORCERER")} className={styles.classIcon}>
                    <img src="/src/assets/classes/sorcerer-class.svg"/>
                </div>
                <div onClick={() => saveClass("WARLOCK")} className={styles.classIcon}>
                    <img src="/src/assets/classes/warlock-class.svg"/>
                </div>
                <div onClick={() => saveClass("WIZARD")} className={styles.classIcon}>
                    <img src="/src/assets/classes/wizard-class.svg"/>
                </div>
            </div>

            <Separator.Root orientation="vertical" decorative={true} className={styles.SeparatorRoot}/>

            <div className={styles.classDescriptionContainer}>
                <div className={styles.classTitle}>{title}</div>
                <div className={styles.classDescription}>{description}</div>
            </div>
        </div>
    )
}