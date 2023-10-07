import { PersonIcon } from "@radix-ui/react-icons";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.headerStyle}>
      <button>
        <b>coisa</b>
      </button>
      <button>
        <b>outra coisa</b>
      </button>
      <button className={styles.accountButton}>
        <PersonIcon width="18" height="18" />
      </button>
    </header>
  );
}
