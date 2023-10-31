import styles from "./Root.module.scss";
import { Header } from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <>
      <Header />
      <div className={styles.logo}>
        <h1>LOGO</h1>
      </div>
      <Outlet />
    </>
  );
}
