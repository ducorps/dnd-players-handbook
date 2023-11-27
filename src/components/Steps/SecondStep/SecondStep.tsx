import styles from "./SecondStep.module.scss";
import * as Separator from '@radix-ui/react-separator';



export default function SecondStep(props: { handleSaveClass: (race: string) => void; }) {
    const handleSaveClass = (characterClass: string) => {
        props.handleSaveClass(characterClass)
    }

    return (
        <div className={styles.firstStepContainer}>
            <div className={styles.classesContainer}>
                <div onClick={() => handleSaveClass("BARBARIAN")} className={styles.classIcon}>
                    <img src="/src/assets/classes/barbarian-class.svg"/>
                </div>
                <div onClick={() => handleSaveClass("BARD")} className={styles.classIcon}>
                    <img src="/src/assets/classes/bard-class.svg"/>
                </div>
                <div onClick={() => handleSaveClass("CLERIC")} className={styles.classIcon}>
                    <img src="/src/assets/classes/cleric-class.svg"/>
                </div>
                <div onClick={() => handleSaveClass("DRUID")} className={styles.classIcon}>
                    <img src="/src/assets/classes/druid-class.svg"/>
                </div>
                <div onClick={() => handleSaveClass("FIGHTERS")} className={styles.classIcon}>
                    <img src="/src/assets/classes/fighter-class.svg"/>
                </div>
                <div onClick={() => handleSaveClass("MONK")} className={styles.classIcon}>
                    <img src="/src/assets/classes/monk-class.svg"/>
                </div>
                <div onClick={() => handleSaveClass("PALADIN")} className={styles.classIcon}>
                    <img src="/src/assets/classes/paladin-class.svg"/>
                </div>
                <div onClick={() => handleSaveClass("RANGER")} className={styles.classIcon}>
                    <img src="/src/assets/classes/ranger-class.svg"/>
                </div>
                <div onClick={() => handleSaveClass("ROGUE")} className={styles.classIcon}>
                    <img src="/src/assets/classes/rogue-class.svg"/>
                </div>
                <div onClick={() => handleSaveClass("SORCERER")} className={styles.classIcon}>
                    <img src="/src/assets/classes/sorcerer-class.svg"/>
                </div>
                <div onClick={() => handleSaveClass("WARLOCK")} className={styles.classIcon}>
                    <img src="/src/assets/classes/warlock-class.svg"/>
                </div>
                <div onClick={() => handleSaveClass("WIZARD")} className={styles.classIcon}>
                    <img src="/src/assets/classes/wizard-class.svg"/>
                </div>
            </div>

            <Separator.Root orientation="vertical" decorative={true} className={styles.SeparatorRoot}/>

            <div className={styles.classDescriptionContainer}>
                <div className={styles.classTitle}>Barbarian</div>
                <div className={styles.classDescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque molestias magni rem ipsum beatae porro quis tenetur aliquam hic incidunt modi placeat dolorem voluptatibus suscipit, qui nemo explicabo ducimus sed.</div>
            </div>
        </div>
    )
}