import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Home() {
  const [characterList, setCharacterList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listLoading, setListLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [maxPages, setMaxPages] = useState(0);
  const navigate = useNavigate();

  async function handleCreateNewCharacter() {
    setLoading(true);
    await api
      .post("/characters/new-character")
      .then((response) => navigate(`/character/${response.data.id}/create`));
    setLoading(false);
  }

  async function getCharactersList() {
    setListLoading(true);
    await api
      .get(`characters/user`, { params: { page: page, size: 12 } })
      .then((res: any) => {
        setMaxPages(res.data.totalPages);
        setCharacterList(res.data.content);
      });
    setListLoading(false);
  }

  async function handleNextPage() {
    if (page < maxPages + 1) {
      const newPage = page + 1;
      setPage(newPage);
    }
  }

  async function handlePreviousPage() {
    if (page != 0) {
      const newPage = page - 1;
      setPage(newPage);
    }
  }

  useEffect(() => {
    getCharactersList();
  }, [page]);

  return (
    <div className={styles.container}>
      <button
        disabled={loading}
        className={styles.newCharacter}
        onClick={handleCreateNewCharacter}
      >
        <h2>Criar novo</h2>
        <h2 style={{ fontWeight: "bold" }}>+</h2>
      </button>

      {listLoading && <h3>Loading...</h3>}
      {!listLoading && (
        <>
          <div className={styles.cardList}>
            {characterList.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.img}></div>
                <div>
                  <Tooltip tooltip={item.name}>
                    <p className={styles.charName}>{item.name}</p>
                  </Tooltip>
                  <span style={{ fontWeight: "bold" }}>
                    {item.race?.raceType}
                  </span>
                  <span>{item.classType?.classType}</span>
                </div>
                <Link
                  className={styles.accountButton}
                  to={`/character/${item.id}/sheet`}
                >
                  <div className={styles.playButton}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                    >
                      <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                    </svg>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.pagination}>
            <img
              onClick={handlePreviousPage}
              src="/src/assets/chavron-left.svg"
            />
            <p>
              {page + 1} de {maxPages + 1}
            </p>
            <img onClick={handleNextPage} src="/src/assets/chavron-right.svg" />
          </div>
        </>
      )}
    </div>
  );
}
