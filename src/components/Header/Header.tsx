import { PersonIcon } from "@radix-ui/react-icons";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.headerStyle}>
      <div>
        <button>
          <Link to="/home">logo</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to="/NewCharacter">new</Link>
        </button>
        <Link className={styles.accountButton} to="/profile">
          <div className={styles.icon}>
            <PersonIcon width="23" height="23" color="#d2d7f0" />
          </div>
        </Link>
      </div>
    </header>
  );
}
