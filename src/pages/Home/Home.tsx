import { PersonIcon } from "@radix-ui/react-icons";
import styles from "./Home.module.scss";

export function Home() {
  return (
    <>
      <div className={styles.titleStyle}>
        <h1>LOGO</h1>
      </div>

      <div className={styles.cardStyle}>
        <PersonIcon width="50" height="50" />

        <div className={styles.loginStyle}>
          <label htmlFor="login">Login</label>
          <input type="text" name="Login" id="login" />
          <label htmlFor="password">Password</label>
          <input type="text" name="Password" id="password" />
        </div>
      </div>
    </>
  );
}
