import styles from './FifthStep.module.scss';



export default function FifthStep() {
    const languages = ["Common", "Dwarvish", "Elvish", "Giant", "Gnomish", "Orc", "Halfling", "Draconic"]
    const tools = [
        "Artisan's Tools",
        "Disguise Kit",
        "Forgery Kit",
        "Gaming Set",
        "Herbalism Kit",
        "Land Vehicles",
        "Musical Instruments",
        "Navigator's Tools",
        "Poisoner's Kit",
        "Thieves' Tools",
        "Water Vehicles"
      ]
    
    return(
        <div className={styles.fifthContainer}>
            <div className={styles.selectContainer}>
                <div>Select a language:</div>
                <select>
                    {languages.map((lang) => (
                        <option key={lang}>{lang}</option>
                    ))}
                </select>
            </div>
            <div className={styles.selectContainer}>
                <div>Select a language:</div>
                <select>
                    {tools.map((tool) => (
                        <option key={tool}>{tool}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}