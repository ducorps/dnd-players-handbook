import styles from "./Sheet.module.scss";
import { useEffect, useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Separator } from "../../components/Separator/Separator";
import { CheckIcon } from "@radix-ui/react-icons";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import { SheetTabs } from "../../components/SheetTabs/SheetTabs";
import { useParams } from "react-router";
import { api } from "../../api/api";

export function Sheet() {
  let { idCharacter } = useParams();
  const [character, setCharacter] = useState();
  const [skillList, setSkillList] = useState([]);

  async function getCharacter() {
    await api.get(`/characters/${idCharacter}`)
      .then((res: any) => {
        setCharacter(res.data);
        setLife(res.data.life);
        setSkillList(Object.entries(res.data.skill))
        console.log(skillList);
        console.log(res.data);
      })
  }

  useEffect(() => {
    getCharacter();
  }, [])

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

  const strModifier = Math.floor((character?.strength - 10)/2) >= 0 ? ("+"+Math.floor((character?.strength - 10)/2)) : (Math.floor((character?.strength - 10)/2));
  const dexModifier = Math.floor((character?.dexterity - 10)/2) >= 0 ? ("+"+Math.floor((character?.dexterity - 10)/2)) : (Math.floor((character?.dexterity - 10)/2));
  const conModifier = Math.floor((character?.constitution - 10)/2) >= 0 ? ("+"+Math.floor((character?.constitution - 10)/2)) : (Math.floor((character?.constitution - 10)/2));
  const intModifier = Math.floor((character?.intelligence - 10)/2) >= 0 ? ("+"+Math.floor((character?.intelligence - 10)/2)) : (Math.floor((character?.intelligence - 10)/2));
  const wisModifier = Math.floor((character?.wisdom - 10)/2) >= 0 ? ("+"+Math.floor((character?.wisdom - 10)/2)) : (Math.floor((character?.wisdom - 10)/2));
  const chaModifier = Math.floor((character?.charisma - 10)/2) >= 0 ? ("+"+Math.floor((character?.charisma - 10)/2)) : (Math.floor((character?.charisma - 10)/2));

  const maxLife = character?.life;
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

  function checkProficiency() {

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
          <h2>{character?.name}</h2>
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
          <div className={styles.icon}>
            <div>
              <Tooltip tooltip={"Armour Class"}>
                <img
                  style={{ height: "32px" }}
                  src="/src/assets/icons/shield.svg"
                />
              </Tooltip>
              {character?.armorClass}
            </div>
            <div>
              <Tooltip tooltip={"Iniciative"}>
                <img
                  style={{ height: "32px" }}
                  src="/src/assets/icons/group.svg"
                />
              </Tooltip>
              +{character?.initiative}
            </div>
            <div>
              <Tooltip tooltip={"Perception"}>
                <img
                  style={{ height: "25px" }}
                  src="/src/assets/icons/eye.svg"
                />
              </Tooltip>
              {10 + character?.skill.perception}
            </div>
            <div>
              <Tooltip tooltip={"Speed"}>
                <img
                  style={{ height: "32px" }}
                  src="/src/assets/icons/speed.svg"
                />
              </Tooltip>
              {character?.moveSpeed}
            </div>
          </div>
        </div>

        <div className={styles.characterInfo}>
          <div>
            <p>{character?.race?.raceType}</p>
            <p>Lvl: {character?.level}</p>
          </div>
          <div>
            <p>{character?.classType?.classType}</p>
            <p>{character?.background?.backgroundType}</p>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.savingThrows}>
          <h3>Saving Throws</h3>
          <div>
            <div>
              <p>{strModifier}</p>
              <p>STR</p>
            </div>
            <Separator orientation="vertical" />
            <div>
              <p>{dexModifier}</p>
              <p>DEX</p>
            </div>
            <Separator orientation="vertical" />
            <div>
              <p>{conModifier}</p>
              <p>CON</p>
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div>
            <div>
              <p>{intModifier}</p>
              <p>INT</p>
            </div>
            <Separator orientation="vertical" />
            <div>
              <p>{wisModifier}</p>
              <p>WIS</p>
            </div>
            <Separator orientation="vertical" />
            <div>
              <p>{chaModifier}</p>
              <p>CHA</p>
            </div>
          </div>
        </div>

        <div className={styles.attributes}>
          <div>
            <h2>STR</h2>
            <p>{strModifier}</p>
            <p>{character?.strength}</p>
          </div>

          <div>
            <h2>DEX</h2>
            <p>{dexModifier}</p>
            <p>{character?.dexterity}</p>
          </div>

          <div>
            <h2>CON</h2>
            <p>{conModifier}</p>
            <p>{character?.constitution}</p>
          </div>

          <div>
            <h2>INT</h2>
            <p>{intModifier}</p>
            <p>{character?.intelligence}</p>
          </div>

          <div>
            <h2>WIS</h2>
            <p>{wisModifier}</p>
            <p>{character?.wisdom}</p>
          </div>

          <div>
            <h2>CHA</h2>
            <p>{chaModifier}</p>
            <p>{character?.charisma}</p>
          </div>
        </div>

        <div className={styles.throws}>
          <div style={{ textAlign: "center" }}>
            <h3>Death Saves</h3>
            <p>Sucess</p>
            <Checkbox.Root className={styles.checkboxThrows} id="c1">
              <Checkbox.Indicator className={styles.checkboxIndicator}>
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <Checkbox.Root className={styles.checkboxThrows} id="c1">
              <Checkbox.Indicator className={styles.checkboxIndicator}>
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <Checkbox.Root className={styles.checkboxThrows} id="c1">
              <Checkbox.Indicator className={styles.checkboxIndicator}>
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <p>Failures</p>
            <Checkbox.Root className={styles.checkboxThrows} id="c1">
              <Checkbox.Indicator className={styles.checkboxIndicator}>
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <Checkbox.Root className={styles.checkboxThrows} id="c1">
              <Checkbox.Indicator className={styles.checkboxIndicator}>
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <Checkbox.Root className={styles.checkboxThrows} id="c1">
              <Checkbox.Indicator className={styles.checkboxIndicator}>
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
          </div>
          <Separator orientation="vertical" />
          <div className={styles.flex}>
            <h3>Hit Dice</h3>
            <h3 className={styles.hitDice}>1d8</h3>
          </div>
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
              </tr>
            </thead>
            <tbody>
              {Object.entries(skillList).map((skill: any) => (
                <tr key={skill}>
                  <td>
                    <Checkbox.Root
                      className={styles.CheckboxRoot}
                      checked={skill[0]}
                      id="c1"
                    >
                      <Checkbox.Indicator className={styles.CheckboxIndicator}>
                        <CheckIcon />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                  </td>
                  <td>{skill[1]}</td>
                  <td>{skill[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.details}>
          <SheetTabs />
        </div>
      </div>
    </div>
  );
}
