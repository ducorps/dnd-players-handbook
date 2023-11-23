import styles from "./Sheet.module.scss";
import { useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Separator } from "../../components/Separator/Separator";
import { CheckIcon } from "@radix-ui/react-icons";

export function Sheet() {
  const skills = [
    { proficiency: true, modifier: 3, skill: "Acrobatics", bonus: 6 },
    { proficiency: false, modifier: 2, skill: "Animal Handling", bonus: 2 },
    { proficiency: false, modifier: 5, skill: "Arcana", bonus: 8 },
    { proficiency: false, modifier: 1, skill: "Athletics", bonus: 1 },
    { proficiency: false, modifier: 1, skill: "Deception", bonus: 1 },
    { proficiency: false, modifier: 1, skill: "History", bonus: 1 },
    { proficiency: true, modifier: 4, skill: "Insight", bonus: 7 },
    { proficiency: true, modifier: 1, skill: "Intimidation", bonus: 1 },
    { proficiency: true, modifier: 5, skill: "Investigation", bonus: 8 },
    { proficiency: false, modifier: 1, skill: "Medicine", bonus: 1 },
    { proficiency: false, modifier: 3, skill: "Nature", bonus: 6 },
    { proficiency: false, modifier: 5, skill: "Perception", bonus: 8 },
    { proficiency: false, modifier: 1, skill: "Performance", bonus: 1 },
    { proficiency: false, modifier: 3, skill: "Persuasion", bonus: 6 },
    { proficiency: false, modifier: 1, skill: "Religion", bonus: 1 },
    { proficiency: false, modifier: 3, skill: "Sleight of Hand", bonus: 6 },
    { proficiency: false, modifier: 1, skill: "Stealth", bonus: 1 },
    { proficiency: true, modifier: 5, skill: "Survival", bonus: 8 },
  ];
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
          <div>
            <img style={{width:"32px"}} src="src/assets/icons/shield.svg"/>
            <img style={{width:"32px"}} src="src/assets/icons/group.svg"/>
            <img style={{width:"32px"}} src="src/assets/icons/eye.svg"/>
            <img style={{width:"32px"}} src="src/assets/icons/speed.svg"/>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.savingThrows}>
          <h3>Saving Throws</h3>
          <div>
            <div>
              <p>+1</p>
              <p>STR</p>
            </div>
            <Separator orientation="vertical" />
            <div>
              <p>+1</p>
              <p>DEX</p>
            </div>
            <Separator orientation="vertical" />
            <div>
              <p>+1</p>
              <p>CON</p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div>
            <div>
              <p>+1</p>
              <p>INT</p>
            </div>
            <Separator orientation="vertical" />
            <div>
              <p>+1</p>
              <p>WIS</p>
            </div>
            <Separator orientation="vertical" />
            <div>
              <p>+1</p>
              <p>CHA</p>
            </div>
          </div>
        </div>

        <div className={styles.attributes}>
          <div>
            <h2>STR</h2>
            <p>+1</p>
            <p>1</p>
          </div>

          <div>
            <h2>DEX</h2>
            <p>+1</p>
            <p>1</p>
          </div>

          <div>
            <h2>CON</h2>
            <p>+1</p>
            <p>1</p>
          </div>

          <div>
            <h2>INT</h2>
            <p>+1</p>
            <p>1</p>
          </div>

          <div>
            <h2>WIS</h2>
            <p>+1</p>
            <p>1</p>
          </div>

          <div>
            <h2>CHA</h2>
            <p>+1</p>
            <p>1</p>
          </div>
        </div>

        <div className={styles.senses}>
          <h3>Senses</h3>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.skills}>
          <h3>Skills</h3>
          <table cellSpacing="0">
            <thead>
              <tr>
                <th>Proficiency</th>
                <th>Modifier</th>
                <th>Skill</th>
                <th>Bonus</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill, index) => (
                <tr key={index}>
                  <td>
                    <Checkbox.Root
                      className={styles.CheckboxRoot}
                      checked={skill.proficiency}
                      id="c1"
                    >
                      <Checkbox.Indicator className={styles.CheckboxIndicator}>
                        <CheckIcon />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                  </td>
                  <td>{skill.modifier}</td>
                  <td>{skill.skill}</td>
                  <td>{skill.bonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
