import styles from "./Profile.module.scss";

export function Profile() {
  return (
    <container className={styles.containerStyle}>

      <div className={styles.listStyle}>
        <h2 className={styles.titleStyle}>Character list</h2>
        <div className={styles.cardListStyle}>
          <div className={styles.cardStyle}>
            <div className={styles.imgStyle}></div>
            <h4>CharName</h4>
            <span style={{ fontWeight: 'bold' }}>race</span>
            <span>class</span>
          </div>
        </div>
      </div>

      <div className={styles.profileStyle}>
        <h2 className={styles.titleStyle}>Profile</h2>
      </div>
    </container>
  );
}
