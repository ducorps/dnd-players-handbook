import * as Separator from '@radix-ui/react-separator';
import styles from './ThirdStep.module.scss';
import { useEffect, useState } from 'react';

type ThirdStepProps = {
    changeBackground: (background: string) => void;
};

const descriptions = {
    ACOLYTE: "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric – performing sacred rites is not the same thing as channeling divine power.",
    CHARLATAN: "You have always had a way with people. You know what makes them tick, you can tease out their hearts' desires after a few minutes of conversation, and with a few leading questions you can read them like they were children's books. It's a useful talent, and one that you're perfectly willing to use for your advantage.",
    CRIMINAL: "You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You're far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.",
    ENTERTAINER: "You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them. Your poetics can stir the hearts of those who hear you, awakening grief or joy, laughter or anger. Your music raises their spirits or captures their sorrow. Your dance steps captivate, your humor cuts to the quick. Whatever techniques you use, your art is your life.",
    FOLKHERO: "You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.",
    GUILD_ARTISAN: "You are a member of an artisan's guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order. You learned your skills as an apprentice to a master artisan, under the sponsorship of your guild, until you became a master in your own right.",
    HERMIT: "You lived in seclusion – either in a sheltered community such as a monastery, or entirely alone – for a formative part of your life. In your time apart from the clamor of society, you found quiet, solitude, and perhaps some of the answers you were looking for.",
    NOBLE: "You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them.",
    OUTLANDER: "You grew up in the wilds, far from civilization and the comforts of town and technology. You've witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction. The wilds are in your blood, whether you were a nomad, an explorer, a recluse, a hunter-gatherer, or even a marauder. Even in places where you don't know the specific features of the terrain, you know the ways of the wild.",
    SAGE: "You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.",
    SAILOR: "You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths. Your first love is the distant line of the horizon, but the time has come to try your hand at something new.",
    SOLDIER: "War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war.",
    URCHIN: "You grew up on the streets alone, orphaned, and poor, You had no one to watch over you or to provide for you, so you learned to provide for yourself. You fought fiercely over food and kept a constant watch out for other desperate souls who might steal from you. You slept on rooftops and in alleyways, exposed to the elements, and endured sickness without the advantage of medicine or a place to recuperate. You've survived despite all odds, and did so through cunning, strength, speed, or some combination of each.",
}

export default function ThirdStep({ changeBackground }: ThirdStepProps ) {
    const [description, setDescription] = useState(descriptions.ACOLYTE);
    const [title, setTitle] = useState("ACOLYTE");

    const saveBackground = (background: string) => {
        setDescription(descriptions[background]);
        setTitle(background);

        changeBackground(background)
    }

    return (
        <div className={styles.firstStepContainer}>
            <div className={styles.classesContainer}>
                <div onClick={() => saveBackground("ACOLYTE")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/acolyte.svg"/>
                </div>
                <div onClick={() => saveBackground("CHARLATAN")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/charlatan.svg"/>
                </div>
                <div onClick={() => saveBackground("CRIMINAL")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/criminal.svg"/>
                </div>
                <div onClick={() => saveBackground("ENTERTAINER")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/entretainer.svg"/>
                </div>
                <div onClick={() => saveBackground("FOLKHERO")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/folkhero.svg"/>
                </div>
                <div onClick={() => saveBackground("GUILD_ARTISAN")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/guildartesain.svg"/>
                </div>
                <div onClick={() => saveBackground("HERMIT")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/hermit.svg"/>
                </div>
                <div onClick={() => saveBackground("NOBLE")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/noble.svg"/>
                </div>
                <div onClick={() => saveBackground("OUTLANDER")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/outlander.svg"/>
                </div>
                <div onClick={() => saveBackground("SAGE")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/sage.svg"/>
                </div>
                <div onClick={() => saveBackground("SAILOR")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/sailor.svg"/>
                </div>
                <div onClick={() => saveBackground("SOLDIER")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/soldier.svg"/>
                </div>
                <div onClick={() => saveBackground("URCHIN")} className={styles.classIcon}>
                    <img src="/src/assets/bgs/urchin.svg"/>
                </div>
            </div>

            <Separator.Root orientation="vertical" decorative={true} className={styles.SeparatorRoot}/>

            <div className={styles.classDescriptionContainer}>
                <div className={styles.classTitle}>{title}</div>
                <div className={styles.classDescription}>{description}</div>
            </div>
        </div>
    )
}
