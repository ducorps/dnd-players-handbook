import * as Separator from '@radix-ui/react-separator';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import styles from './CharacterInfo.module.scss'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { api } from '../../api/api';
import { useNavigate } from "react-router-dom";

type InfoProps = {
    characterSaved: any
}

export default function CharacterInfo({characterSaved}: InfoProps) {
    const navigate = useNavigate();
    const [character, setCharacter] = useState();
    const [characterName, setCharacterName] = useState();
    const [attributes] = useState({
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
    });

    const strModifier = Math.floor((characterSaved?.strength - 10)/2) >= 0 ? ("+"+Math.floor((characterSaved?.strength - 10)/2)) : (Math.floor((characterSaved?.strength - 10)/2));
    const dexModifier = Math.floor((characterSaved?.dexterity - 10)/2) >= 0 ? ("+"+Math.floor((characterSaved?.dexterity - 10)/2)) : (Math.floor((characterSaved?.dexterity - 10)/2));
    const conModifier = Math.floor((characterSaved?.constitution - 10)/2) >= 0 ? ("+"+Math.floor((characterSaved?.constitution - 10)/2)) : (Math.floor((characterSaved?.constitution - 10)/2));
    const intModifier = Math.floor((characterSaved?.intelligence - 10)/2) >= 0 ? ("+"+Math.floor((characterSaved?.intelligence - 10)/2)) : (Math.floor((characterSaved?.intelligence - 10)/2));
    const wisModifier = Math.floor((characterSaved?.wisdom - 10)/2) >= 0 ? ("+"+Math.floor((characterSaved?.wisdom - 10)/2)) : (Math.floor((characterSaved?.wisdom - 10)/2));
    const chaModifier = Math.floor((characterSaved?.charisma - 10)/2) >= 0 ? ("+"+Math.floor((characterSaved?.charisma - 10)/2)) : (Math.floor((characterSaved?.charisma - 10)/2));


    useEffect(() => {
        setCharacter(characterSaved);
    }, [])


    async function saveFinalStep() {
        await api.post(`characters/${character?.id}/final-step` , {...attributes, name: characterName}, {headers: {'Content-Type': 'application/json'}})
          .then((res) => {
            setCharacter(res.data);
            navigate(`/character/${res.data.id}/sheet`)
          });

    }

    function handleStrChange(event) {
        attributes.strength = event.target.value
    }
    function handleDexChange(event) {
        attributes.dexterity = event.target.value
    }
    function handleConChange(event) {
        attributes.constitution = event.target.value
    }
    function handleIntChange(event) {
        attributes.intelligence = event.target.value
    }
    function handleWisChange(event) {
        attributes.wisdom = event.target.value
    }
    function handleChaChange(event) {
        attributes.charisma = event.target.value
    }

    function handleNameChange(event) {
        setCharacterName(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        await saveFinalStep();
    }

    return(
        <ScrollArea.Root className="ScrollAreaRoot">
            <ScrollArea.Viewport className="ScrollAreaViewport">
                <div className={styles.characterInfoContainer} >
                <div className={styles.characterImage}>
                    <img src="/src/assets/races/100px-Race_Human.png" />
                </div>

                <form onSubmit={handleSubmit}>
                    <div className={styles.characterAspects}>
                        <input 
                            name='characterName' 
                            className={styles.characterNameInput} 
                            type="text" 
                            placeholder='Insert your character name...'
                            onChange={handleNameChange}
                        />
                        <div style={{fontWeight: 'bold'}}>LVL {character?.level} - {character?.characterClass?.classType}</div>
                    </div>

                    <div className={styles.characterAttributes} >
                        <div className={styles.attributes}>
                            <div>STR</div>
                            <div>{strModifier}</div>
                            <input type="text" placeholder='0' onChange={handleStrChange}/>
                        </div>
                        <div className={styles.attributes}>
                            <div>DEX</div>
                            <div>{dexModifier}</div>
                            <input type="text" placeholder='0' onChange={handleDexChange}/>
                        </div>
                        <div className={styles.attributes}>
                            <div>CON</div>
                            <div>{conModifier}</div>
                            <input type="text" placeholder='0' onChange={handleConChange}/>
                        </div>
                        <div className={styles.attributes}>
                            <div>INT</div>
                            <div>{intModifier}</div>
                            <input type="text" placeholder='0' onChange={handleIntChange}/>
                        </div>
                        <div className={styles.attributes}>
                            <div>WIS</div>
                            <div>{wisModifier}</div>
                            <input type="text" placeholder='0' onChange={handleWisChange}/>
                        </div>
                        <div className={styles.attributes}>
                            <div>CHA</div>
                            <div>{chaModifier}</div>
                            <input type="text" placeholder='0' onChange={handleChaChange}/>
                        </div>
                    </div>
                    <div style={{display:'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <button className={styles.saveAtributesButton}>Save</button>
                    </div>
                </form>

            </div>
            </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
                    <ScrollArea.Thumb className="ScrollAreaThumb"/>
                </ScrollArea.Scrollbar>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
                    <ScrollArea.Thumb className="ScrollAreaThumb"/>
                </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="ScrollAreaCorner" />
      </ScrollArea.Root>
        
    )
}