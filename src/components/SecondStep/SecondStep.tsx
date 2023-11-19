import styles from "./SecondStep.module.scss";
import * as Separator from '@radix-ui/react-separator';



export default function FirstStep() {
    return (
        <div className={styles.firstStepContainer}>
            <div className={styles.classesContainer}>
                <div className={styles.classIcon}>
                <img src="./src/assets/barbarian-class.svg"/>
                </div>
                <div className={styles.classIcon}>
                <img src="./src/assets/bard-class.svg"/>
                </div>
                <div className={styles.classIcon}>
                <img src="./src/assets/cleric-class.svg"/>
                </div>
                <div className={styles.classIcon}>
                <img src="./src/assets/druid-class.svg"/>
                </div>
                <div className={styles.classIcon}>
                <img src="./src/assets/fighter-class.svg"/>
                </div>
                <div className={styles.classIcon}>
                <img src="./src/assets/monk-class.svg"/>
                </div>
                <div className={styles.classIcon}>
                <img src="./src/assets/paladin-class.svg"/>
                </div>
                <div className={styles.classIcon}>
                <img src="./src/assets/ranger-class.svg"/>
                </div>
                <div className={styles.classIcon}>
                <img src="./src/assets/rogue-class.svg"/>
                </div>
                <div className={styles.classIcon}>
                <img src="./src/assets/sorcerer-class.svg"/>
                </div>
                <div className={styles.classIcon}>
                <img src="./src/assets/warlock-class.svg"/>
                </div>
                <div className={styles.classIcon}>
                <img src="./src/assets/wizard-class.svg"/>
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