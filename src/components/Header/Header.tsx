import { PersonIcon } from "@radix-ui/react-icons";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.headerStyle}>
      <div>
        <button>
          <Link to="/" >logo</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to="/NewCharacter" >new</Link>
        </button>
        <Link className={styles.accountButton} to="/profile">
          <PersonIcon width="18" height="18" />
        </Link>
      </div>
    </header>
  );
}
