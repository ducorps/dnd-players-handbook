import * as Separator from '@radix-ui/react-separator';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import styles from './CharacterInfo.module.scss'

export default function CharacterInfo() {
    return(
        <ScrollArea.Root className="ScrollAreaRoot">
            <ScrollArea.Viewport className="ScrollAreaViewport">
                <div className={styles.characterInfoContainer} >
                <div className={styles.characterImage}>
                    <img src="./src/assets/races/100px-Race_Human.png" />
                </div>

                <div className={styles.characterAspects}>
                    <input className={styles.characterNameInput} type="text" placeholder='Insert your character name...'/>
                    <div style={{fontWeight: 'bold'}}>LV 1 - Barbarian</div>
                </div>

                <div className={styles.characterAttributes} >
                    <div className={styles.attributes}>
                        <div>CON</div>
                        <div>+1</div>
                        <input type="text" placeholder='0'/>
                    </div>
                    <div className={styles.attributes}>
                        <div>CON</div>
                        <div>+1</div>
                        <input type="text" placeholder='0'/>
                    </div>
                    <div className={styles.attributes}>
                        <div>CON</div>
                        <div>+1</div>
                        <input type="text" placeholder='0'/>
                    </div>
                    <div className={styles.attributes}>
                        <div>CON</div>
                        <div>+1</div>
                        <input type="text" placeholder='0'/>
                    </div>
                    <div className={styles.attributes}>
                        <div>CON</div>
                        <div>+1</div>
                        <input type="text" placeholder='0'/>
                    </div>
                    <div className={styles.attributes}>
                        <div>CON</div>
                        <div>+1</div>
                        <input type="text" placeholder='0'/>
                    </div>
                </div>

                <Separator.Root orientation="horizontal" decorative={true} className={styles.SeparatorRoot}/>

                <div className={styles.characterSummary}>
                    <div className={styles.characterSummaryItem}>
                        <span>Weapons</span> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam voluptatem ut quibusdam! Perferendis consequuntur eveniet assumenda maiores   at praesentium, odio nulla recusandae illum exercitationem sed officia, qui ab sunt!
                    </div>

                    <div className={styles.characterSummaryItem}>
                        <span>Armor</span> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam voluptatem ut quibusdam! Perferendis consequuntur eveniet assumenda maiores at praesentium, odio nulla recusandae illum exercitationem sed officia, qui ab sunt!
                    </div>

                    <div className={styles.characterSummaryItem}>
                        <span>Skills</span> - Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ullam voluptatem ut quibusdam! Perferendis consequuntur eveniet assumenda maiores at praesentium, odio nulla recusandae illum exercitationem sed officia, qui ab sunt!
                    </div>
                </div>
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