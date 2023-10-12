import { PersonIcon } from "@radix-ui/react-icons";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.headerStyle}>
      <button>
        <Link to="/myCharacters" >my characters</Link>
      </button>
      <button>
        <a>new</a>
      </button>
      <button className={styles.accountButton}>
        <PersonIcon width="18" height="18" />
      </button>
    </header>
  );
}
