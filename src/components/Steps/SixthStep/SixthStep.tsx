import styles from './SixthStep.module.scss';

export default function SixthStep() {
    const decisionA: string[]  = ["greataxe", "any martial melee weapon"];
    const decisionB: string[] = ["two handaxes", "any simple weapon"];
    const decisionC: string[] = ["An explorer’s pack and four javelins"];
    const decisionD: string[] = [];
    const decisionE: string[] = [];

    return (
        <div className={styles.fifthContainer}>
            <div className={styles.selectContainer}>
                <div>Select equipment:</div>
                <select>
                    {decisionA.map((item) => (
                        <option key={item}>{item}</option>
                    ))}
                </select>
            </div>
            <div className={styles.selectContainer}>
                <div>Select equipment:</div>
                <select>
                    {decisionB.map((item) => (
                        <option key={item}>{item}</option>
                    ))}
                </select>
            </div>
            <div className={styles.selectContainer}>
                <div>Select equipment:</div>
                <select>
                    {decisionC.map((item) => (
                        <option key={item}>{item}</option>
                    ))}
                </select>
            </div>
            {decisionD.length > 0 && (
            <div className={styles.selectContainer}>
                <div>Select equipment:</div>
                <select>
                    {decisionD.map((item) => (
                        <option key={item}>{item}</option>
                    ))}
                </select>
            </div>
            )}
            {decisionE.length > 0 && (
                <div className={styles.selectContainer}>
                <div>Select equipment:</div>
                <select>
                    {decisionE.map((item) => (
                        <option key={item}>{item}</option>
                    ))}
                </select>
            </div>
            )}
            
        </div>
    )
}
