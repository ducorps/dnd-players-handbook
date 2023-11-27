import styles from "./FirstStep.module.scss";
import * as Separator from '@radix-ui/react-separator';



export default function FirstStep(props: { handleSaveRace: (race: string) => void; }) {
    const handleSaveRace = (race: string) => {
                props.handleSaveRace(race)
    }

    return (
        <div className={styles.firstStepContainer}>
            <div className={styles.classesContainer}>
                <div onClick={() => handleSaveRace("DRAGONBORN")} className={styles.classIcon}>
                    <img src="/src/assets/races/100px-Race_Dragonborn.png"/>
                </div>
                <div onClick={() => handleSaveRace("DWARF")} className={styles.classIcon}>
                    <img src="/src/assets/races/100px-Race_Dwarf.png"/>
                </div>
                <div onClick={() => handleSaveRace("ELF")} className={styles.classIcon}>
                    <img src="/src/assets/races/100px-Race_Elf.png"/>
                </div>
                <div onClick={() => handleSaveRace("GNOME")} className={styles.classIcon}>
                    <img src="/src/assets/races/100px-Race_Gnome.png"/>
                </div>
                <div onClick={() => handleSaveRace("HALF_ELF")} className={styles.classIcon}>
                    <img src="/src/assets/races/100px-Race_Half-Elf.png"/>
                </div>
                <div onClick={() => handleSaveRace("HALF_ORC")} className={styles.classIcon}>
                    <img src="/src/assets/races/100px-Race_Half-Orc.png"/>
                </div>
                <div onClick={() => handleSaveRace("HALFLING")} className={styles.classIcon}>
                    <img src="/src/assets/races/100px-Race_Halfling.png"/>
                </div>
                <div onClick={() => handleSaveRace("HUMAN")} className={styles.classIcon}>
                    <img src="/src/assets/races/100px-Race_Human.png"/>
                </div>
                <div onClick={() => handleSaveRace("TIEFLING")} className={styles.classIcon}>
                    <img src="/src/assets/races/100px-Race_Tiefling.png"/>
                </div>
            </div>

            <Separator.Root orientation="vertical" decorative={true} className={styles.SeparatorRoot}/>

            <div className={styles.classDescriptionContainer}>
                <div className={styles.classTitle}>Dragonborn</div>
                <div className={styles.classDescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque molestias magni rem ipsum beatae porro quis tenetur aliquam hic incidunt modi placeat dolorem voluptatibus suscipit, qui nemo explicabo ducimus sed.</div>
            </div>
        </div>
    )
}