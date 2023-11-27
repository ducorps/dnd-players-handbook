import { useEffect, useState } from "react";
import styles from "./FirstStep.module.scss";
import * as Separator from "@radix-ui/react-separator";

type FirstStepProps = {
  handleSaveRace: (race: string) => void;
};

const descriptions = {
  DRAGONBORN:
    "Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life.",
  DWARF:
    "Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs – these common threads unite all dwarves.",
  ELF: "Elves are a magical people of otherworldly grace, living in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry.",
  GNOME:
    "A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.",
  HALF_ELF:
    "Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves.",
  HALF_ORC:
    "When alliances between humans and orcs are sealed by marriages, half-orcs are born. Some half-orcs rise to become proud chiefs of orc tribes, their human blood giving them an edge over their full-blooded orc rivals. Some venture into the world to prove their worth among humans and other more civilized races. Many of these become adventurers, achieving greatness for their mighty deeds and notoriety for their barbaric customs and savage fury.",
  HALFLING:
    "The comforts of home are the goals of most halflings' lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies. Others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. Halflings work readily with others, and they are loyal to their friends, whether halfling or otherwise. They can display remarkable ferocity when their friends, families, or communities are threatened.",
  HUMAN:
    "In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that's why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
  TIEFLING:
    "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus, overlord of the Nine Hells (and many of the other powerful devils serving under him) into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children's children will always be held accountable.",
};

export default function FirstStep({ handleSaveRace }: FirstStepProps) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    saveRace("DRAGONBORN")
  }, [])

  const saveRace = async (race: string) => {
    setDescription(descriptions[race]);
    setTitle(race);

    handleSaveRace(race);
  };

  return (
    <div className={styles.firstStepContainer}>
      <div className={styles.classesContainer}>
        <div
          onClick={() => saveRace("DRAGONBORN")}
          className={styles.classIcon}
        >
          <img src="/src/assets/races/100px-Race_Dragonborn.png" />
        </div>
        <div onClick={() => saveRace("DWARF")} className={styles.classIcon}>
          <img src="/src/assets/races/100px-Race_Dwarf.png" />
        </div>
        <div onClick={() => saveRace("ELF")} className={styles.classIcon}>
          <img src="/src/assets/races/100px-Race_Elf.png" />
        </div>
        <div onClick={() => saveRace("GNOME")} className={styles.classIcon}>
          <img src="/src/assets/races/100px-Race_Gnome.png" />
        </div>
        <div onClick={() => saveRace("HALF_ELF")} className={styles.classIcon}>
          <img src="/src/assets/races/100px-Race_Half-Elf.png" />
        </div>
        <div onClick={() => saveRace("HALF_ORC")} className={styles.classIcon}>
          <img src="/src/assets/races/100px-Race_Half-Orc.png" />
        </div>
        <div onClick={() => saveRace("HALFLING")} className={styles.classIcon}>
          <img src="/src/assets/races/100px-Race_Halfling.png" />
        </div>
        <div onClick={() => saveRace("HUMAN")} className={styles.classIcon}>
          <img src="/src/assets/races/100px-Race_Human.png" />
        </div>
        <div onClick={() => saveRace("TIEFLING")} className={styles.classIcon}>
          <img src="/src/assets/races/100px-Race_Tiefling.png" />
        </div>
      </div>

          <Separator.Root
            orientation="vertical"
            decorative={true}
            className={styles.SeparatorRoot}
          />
          <div className={styles.classDescriptionContainer}>
            <div className={styles.classTitle}>
              {title && title}
            </div>
            <div className={styles.classDescription}>
              {description && description}
            </div>
          </div>
    </div>
  );
}
