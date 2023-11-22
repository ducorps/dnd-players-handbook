import { useState } from "react";
import styles from "./Sheet.module.scss";
import * as Slider from "@radix-ui/react-slider";

export function Sheet() {
  const maxLife = 33;
  const [life, setLife] = useState(maxLife);

  function onChangeLife(value: number[]) {
    setLife(value[0]);
  }

  function onAddLife() {
    if (life < maxLife) setLife(life + 1);
  }

  function onSubtractLife() {
    if (life > 0) setLife(life - 1);
  }

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.basicInfo}>
          <div
            style={{
              background: "#d2d7f0",
              borderRadius: "50%",
              width: "125px",
              height: "125px",
            }}
          ></div>
          <div>
            <h2>NAME</h2>
            <p>Race</p>
            <p>lvl x bard</p>
          </div>
        </div>

        <div className={styles.asideBasicInfo}>
          <div className={styles.life}>
            <button onClick={onSubtractLife}>{"<"}</button>
            <p>
              {life}/{maxLife}
            </p>
            <button onClick={onAddLife}>{">"}</button>
          </div>

          <form>
            <Slider.Root
              className={styles.SliderRoot}
              defaultValue={[maxLife]}
              max={maxLife}
              value={[life]}
              step={1}
              onValueChange={onChangeLife}
            >
              <Slider.Track className={styles.SliderTrack}>
                <Slider.Range className={styles.SliderRange} />
              </Slider.Track>
              <Slider.Thumb
                className={styles.SliderThumb}
                aria-label="Volume"
              />
            </Slider.Root>
          </form>
        </div>
      </div>

      <div className={styles.content}>
          <div className={styles.savingThrows}>Saving Throws</div>

          <div className={styles.attributes}>
            <div>
              <h2>STR</h2>
              <p>+1</p>
              <p>1</p>
            </div>
            <p>|</p>

            <div>
              <h2>DEX</h2>
              <p>+1</p>
              <p>1</p>
            </div>
            <p>|</p>

            <div>
              <h2>CON</h2>
              <p>+1</p>
              <p>1</p>
            </div>
            <p>|</p>

            <div>
              <h2>INT</h2>
              <p>+1</p>
              <p>1</p>
            </div>
            <p>|</p>

            <div>
              <h2>WIS</h2>
              <p>+1</p>
              <p>1</p>
            </div>
            <p>|</p>
            <div>
              <h2>CHA</h2>
              <p>+1</p>
              <p>1</p>
            </div>
          </div>

          <div className={styles.senses}>Senses</div>
      </div>

      <div className={styles.content}>
          <div className={styles.skills}>Skills</div>
          <div className={styles.details}>
            <table className={styles.detailsTable}>
              <th>Combat</th>
              <p>|</p>

              <th>Action</th>
              <p>|</p>

              <th>Spells</th>
              <p>|</p>

              <th>Equipment</th>
            </table>
          </div>
      </div>
    </div>
  );
}
