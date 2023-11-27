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
  const params = useParams();
  const [character, setCharacter] = useState();
  const [skillList, setSkillList] = useState([]);
  const [mapSkill, setMapSkill] = useState([]);

  async function getCharacter() {
    const idCharacter: string = params.idCharacter!;

    await api.get(`/characters/${idCharacter}`).then((res) => {
      setCharacter(res.data);
      setLife(res.data.life);
      buildSkills(res.data!.skill);
    });
  }

  useEffect(() => {
    getCharacter();
  }, []);

  function buildSkills(skills) {
    let mapSkill: any[] = [];
    Object.entries(skills).map((skill: [string, unknown]) => {
      let prof = false;
      switch (skill[0]) {
        case "acrobatics":
          prof = skill[1] !== dexModifier;
          break;
        case "animalHandling":
          prof = skill[1] !== wisModifier;
          break;
        case "arcana":
          prof = skill[1] !== intModifier;
          break;
        case "athletics":
          prof = skill[1] !== strModifier;
          break;
        case "deception":
          prof = skill[1] !== chaModifier;
          break;
        case "history":
          prof = skill[1] !== intModifier;
          break;
        case "insight":
          prof = skill[1] !== wisModifier;
          break;
        case "intimidation":
          prof = skill[1] !== chaModifier;
          break;
        case "investigation":
          prof = skill[1] !== intModifier;
          break;
        case "medicine":
          prof = skill[1] !== wisModifier;
          break;
        case "nature":
          prof = skill[1] !== intModifier;
          break;
        case "perception":
          prof = skill[1] !== wisModifier;
          break;
        case "performance":
          prof = skill[1] !== chaModifier;
          break;
        case "persuasion":
          prof = skill[1] !== chaModifier;
          break;
        case "religion":
          prof = skill[1] !== intModifier;
          break;
        case "sleightOfHand":
          prof = skill[1] !== dexModifier;
          break;
        case "stealth":
          prof = skill[1] !== dexModifier;
          break;
        case "survival":
          prof = skill[1] !== wisModifier;
          break;
      }

      let modifier = skill[1];
      let s = skill[0];

      mapSkill.push({
        proficiency: prof,
        modifier: modifier,
        skill: s,
      });
      // let bonus = modifier + (prof ? 2 : 0)
    });

    setMapSkill(mapSkill);
  }

  const strModifier =
    Math.floor((character?.strength - 10) / 2) >= 0
      ? "+" + Math.floor((character?.strength - 10) / 2)
      : Math.floor((character?.strength - 10) / 2);
  const dexModifier =
    Math.floor((character?.dexterity - 10) / 2) >= 0
      ? "+" + Math.floor((character?.dexterity - 10) / 2)
      : Math.floor((character?.dexterity - 10) / 2);
  const conModifier =
    Math.floor((character?.constitution - 10) / 2) >= 0
      ? "+" + Math.floor((character?.constitution - 10) / 2)
      : Math.floor((character?.constitution - 10) / 2);
  const intModifier =
    Math.floor((character?.intelligence - 10) / 2) >= 0
      ? "+" + Math.floor((character?.intelligence - 10) / 2)
      : Math.floor((character?.intelligence - 10) / 2);
  const wisModifier =
    Math.floor((character?.wisdom - 10) / 2) >= 0
      ? "+" + Math.floor((character?.wisdom - 10) / 2)
      : Math.floor((character?.wisdom - 10) / 2);
  const chaModifier =
    Math.floor((character?.charisma - 10) / 2) >= 0
      ? "+" + Math.floor((character?.charisma - 10) / 2)
      : Math.floor((character?.charisma - 10) / 2);

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

  function checkProficiency() {}

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
            <p>{character?.characterClass?.classType}</p>
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
            <h3 className={styles.hitDice}>{character?.hitDie}</h3>
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
              {mapSkill.map((skill, index) => {
                console.log(skill);
                return (
                  <tr>
                    <td>
                      <Checkbox.Root
                        className={styles.CheckboxRoot}
                        checked={skill["proficiency"]}
                        id="c1"
                      >
                        <Checkbox.Indicator
                          className={styles.CheckboxIndicator}
                        >
                          <CheckIcon />
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                    </td>
                    <td>{skill["modifier"]}</td>
                    <td>{skill["skill"]}</td>
                  </tr>
                );
              })}
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
