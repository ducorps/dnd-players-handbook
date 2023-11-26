import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Home() {
  const [characterList, setCharacterList] = useState([]);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  async function handleCreateNewCharacter() {
    setLoading(true)
    await api.post("/characters/new-character")
      .then((response) => navigate(`/character/${response.data.id}/create`))
    setLoading(false)
  }

  async function getCharactersList() {
    await api.get("characters/user")
      .then((res: any) => {
        console.log(res.data);
        setCharacterList(res.data)
      })
  }

  useEffect(() => {
    getCharactersList()
  },[])

  return (
    <div className={styles.container}>
      <button disabled={loading} className={styles.newCharacter} onClick={handleCreateNewCharacter}>
        <h2>Criar novo</h2>
        <h2 style={{ fontWeight: "bold" }}>+</h2>
      </button>

      <div className={styles.cardList}>
        <div className={styles.card}>
          <div className={styles.img}></div>
          <div>
            {/* TODO: fazer condição para aparecer o tooltip só quando a quantidade de caracter do nome passa do máximo */}
            <Tooltip tooltip={"CharName"}>
              <p className={styles.charName}>CharName</p>
            </Tooltip>
            <span style={{ fontWeight: "bold" }}>race</span>
            <span>class</span>
          </div>
          <Link className={styles.accountButton} to="/characterSheet">
            <div className={styles.playButton}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
              </svg>
            </div>
          </Link>
        </div>
        {characterList.map((item: any)=>(
          <div key={item.id} className={styles.card}>
            <div className={styles.img}></div>
            <div>
              <Tooltip tooltip={item.name}>
                <p className={styles.charName}>
                  {item.name}
                </p>
              </Tooltip>
              <span style={{ fontWeight: "bold" }}>{item.race?.raceType}</span>
              <span>{item.classType?.classType}</span>
            </div>
            <Link className={styles.accountButton} to={`/character/${item.id}/sheet`}>
              <div className={styles.playButton}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                </svg>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
