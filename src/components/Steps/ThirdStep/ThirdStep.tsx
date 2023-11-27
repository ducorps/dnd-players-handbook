import * as Separator from '@radix-ui/react-separator';
import styles from './ThirdStep.module.scss';

export default function ThirdStep(props: { handleSaveBackground: (background: string) => void; }) {

    const handleSaveBack1ground = (characterClass: string) => {
        props.handleSaveBackground(characterClass)
    }

    return (
        <div className={styles.firstStepContainer}>
            <div className={styles.classesContainer}>
                <div onClick={() => handleSaveBack1ground("ACOLYTE")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/acolyte.svg"/>
                </div>
                <div onClick={() => handleSaveBack1ground("CHARLATAN")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/charlatan.svg"/>
                </div>
                <div onClick={() => handleSaveBack1ground("CRIMINAL")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/criminal.svg"/>
                </div>
                <div onClick={() => handleSaveBack1ground("ENTRETAINER")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/entretainer.svg"/>
                </div>
                <div onClick={() => handleSaveBack1ground("FOLKHERO")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/folkhero.svg"/>
                </div>
                <div onClick={() => handleSaveBack1ground("GUILD_ARTESAIN")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/guildartesain.svg"/>
                </div>
                <div onClick={() => handleSaveBack1ground("HERMIT")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/hermit.svg"/>
                </div>
                <div onClick={() => handleSaveBack1ground("NOBLE")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/noble.svg"/>
                </div>
                <div onClick={() => handleSaveBack1ground("OUTLANDER")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/outlander.svg"/>
                </div>
                <div onClick={() => handleSaveBack1ground("SAGE")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/sage.svg"/>
                </div>
                <div onClick={() => handleSaveBack1ground("SAILOR")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/sailor.svg"/>
                </div>
                <div onClick={() => handleSaveBack1ground("SOLDIER")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/soldier.svg"/>
                </div>
                <div onClick={() => handleSaveBack1ground("URCHIN")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/urchin.svg"/>
                </div>
            </div>

            <Separator.Root orientation="vertical" decorative={true} className={styles.SeparatorRoot}/>

            <div className={styles.classDescriptionContainer}>
                <div className={styles.classTitle}>Acolyte</div>
                <div className={styles.classDescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque molestias magni rem ipsum beatae porro quis tenetur aliquam hic incidunt modi placeat dolorem voluptatibus suscipit, qui nemo explicabo ducimus sed.</div>
            </div>
        </div>
    )
}
