import styles from './FourthStep.module.scss';

export default function FourthStep() {
    const skills = ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"]

    const choose = 2

    return (
        <div className={styles.fourthStepContainer}>
            <div className={styles.fourthStepTitle}>Select up to "{choose}" Proficiencies</div>
            <div className={styles.skillsContainer}>
                {skills.map((skill) => (
                    <div key={skill} className={styles.checkbox}>
                        <input type='checkbox'/>
                        <div>{skill}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}