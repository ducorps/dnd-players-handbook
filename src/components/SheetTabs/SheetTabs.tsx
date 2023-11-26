import styles from "./SheetTabs.module.scss";
import * as Tabs from "@radix-ui/react-tabs";
import * as Accordion from "@radix-ui/react-accordion";
import * as RadixHoverCard from "@radix-ui/react-hover-card";
import { AccordionItem } from "../AccordionItem/AccordionItem";
import { HoverCard } from "../HoverCard/HoverCard";

export function SheetTabs() {
  return (
    <Tabs.Root className={styles.tabsRoot} defaultValue="tab1">
      <Tabs.List className={styles.tabsList} aria-label="Manage your account">
        <Tabs.Trigger className={styles.tabsTrigger} value="tab1">
          <h3>Features</h3>
        </Tabs.Trigger>
        <Tabs.Trigger className={styles.tabsTrigger} value="tab2">
          <h3>Equipment</h3>
        </Tabs.Trigger>
        <Tabs.Trigger className={styles.tabsTrigger} value="tab4">
          <h3>Spells</h3>
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content className={styles.tabsContent} value="tab1">
        <h3 className={styles.tabTitle}>Class Features</h3>
        <Accordion.Root
          className={styles.accordionRoot}
          type="single"
          collapsible
        >
          <AccordionItem title="Rage" value="item-1">
            In battle, you fight with primal ferocity. On your turn, you can
            enter a rage as a bonus action. While raging, you gain the following
            benefits if you aren’t wearing heavy armor: You have advantage on
            Strength checks and Strength saving throws. When you make a melee
            weapon attack using Strength, you gain a bonus to the damage roll
            that increases as you gain levels as a barbarian, as shown in the
            Rage Damage column of the Barbarian table. You have resistance to
            bludgeoning, piercing, and slashing damage. If you are able to cast
            spells, you can’t cast them or concentrate on them while raging.
            Your rage lasts for 1 minute. It ends early if you are knocked
            unconscious or if your turn ends and you haven’t attacked a hostile
            creature since your last turn or taken damage since then. You can
            also end your rage on your turn as a bonus action. Once you have
            raged the number of times shown for your barbarian level in the
            Rages column of the Barbarian table, you must finish a long rest
            before you can rage again.
          </AccordionItem>
        </Accordion.Root>

        <h3 className={styles.tabTitle}>Racial Traits</h3>
        <Accordion.Root
          className={styles.accordionRoot}
          type="single"
          collapsible
        >
          <AccordionItem title="Stonecunning" value="item-1">
            Whenever you make an Intelligence (History) check related to the
            origin of stonework, you are considered proficient in the History
            skill and add double your proficiency bonus to the vcheck, instead
            of your normal proficiency bonus.
          </AccordionItem>
        </Accordion.Root>

        <h3 className={styles.tabTitle}>Feats</h3>
        <Accordion.Root
          className={styles.accordionRoot}
          type="single"
          collapsible
        >
          <AccordionItem title="Darkvision" value="item-1">
            Accustomed to twilit forests and the night sky, you have superior
            vision in dark and dim conditions. You can see in dim light within
            60 feet of you as if it were bright light, and in darkness as if it
            were dim light. You can’t discern color in darkness, only shades of
            gray.
          </AccordionItem>
        </Accordion.Root>

        <h3 className={styles.tabTitle}>Proficiencies & Languages</h3>
        <p>
          <b>Armor:</b> Light armor, medium armor, shields (druids will not wear
          armor or use shields made of metal)
        </p>
        <p>
          <b>Weapons:</b> Clubs, daggers, darts, javelins, maces, quarterstaffs,
          scimitars, sickles, slings, spears
        </p>
        <p>
          <b>Tools:</b> Herbalism kit
        </p>
      </Tabs.Content>

      <Tabs.Content className={styles.tabsContent} value="tab2">
        <div className={styles.equipment}>
          <div className={styles.icons}>
            <div>
              <img src="src/assets/icons/coins.svg" />
              <p>150 GP</p>
            </div>
            <div>
              <img src="src/assets/icons/shield.svg" />
              <p>16 AC</p>
            </div>
            <div>
              <img src="src/assets/icons/weight.svg" />
              <p>85.40 lb</p>
            </div>
          </div>
          <div>
            <h3>Items</h3>
            <table cellSpacing="0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Weight</th>
                  <th>Value</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <RadixHoverCard.Root>
                  <RadixHoverCard.Trigger asChild>
                    <tr>
                      <td>name</td>
                      <td>4lb</td>
                      <td>100GP</td>
                      <td>1</td>
                    </tr>
                  </RadixHoverCard.Trigger>
                  <HoverCard>
                    <p style={{color: "black"}}>outras propriedades do item</p>
                  </HoverCard>
                </RadixHoverCard.Root>
              </tbody>
            </table>
          </div>
        </div>
      </Tabs.Content>

      <Tabs.Content className={styles.tabsContent} value="tab4">
        <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
        <div className={styles.spells}>
          <div className={styles.spellsAttributes}>
              <div className={styles.abilityName}>CHAR</div>
              <div className={styles.fieldName}>Spellcasting Ability</div>
          </div>    
          <div className={styles.spellsAttributes}>
              <div className={styles.abilityName}>14</div>
              <div className={styles.fieldName}>Spellsave DC</div>
          </div>  
          <div className={styles.spellsAttributes}>
              <div className={styles.abilityName}>+2</div>
              <div className={styles.fieldName}>Spellattack Bonus</div>
          </div>  
        </div>

        <div className={styles.spellSlotsContainer}>
          <div className={styles.spellSlots}>
            <div className={styles.spellSlotsHeader}>
              <div>Cantrips</div>
            </div>
            <div style={{display: "flex", height: '100%'}}>
              <ul>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
              </ul>
            </div>
          </div>

          <div className={styles.spellSlots}>
            <div className={styles.spellSlotsHeader}>
              <div>Lv: 1</div>
              <div>Slots: 2</div>
              <div>Used: 0</div>
            </div>
            <div>
              <ul>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
              </ul>
            </div>
          </div>

          <div className={styles.spellSlots}>
            <div className={styles.spellSlotsHeader}>
              <div>Lv: 1</div>
              <div>Slots: 2</div>
              <div>Used: 0</div>
            </div>
            <div>
              <ul>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
              </ul>
            </div>
          </div>

          <div className={styles.spellSlots}>
            <div className={styles.spellSlotsHeader}>
              <div>Lv: 1</div>
              <div>Slots: 2</div>
              <div>Used: 0</div>
            </div>
            <div>
              <ul>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
              </ul>
            </div>
          </div>

          <div className={styles.spellSlots}>
            <div className={styles.spellSlotsHeader}>
              <div>Lv: 1</div>
              <div>Slots: 2</div>
              <div>Used: 0</div>
            </div>
            <div>
              <ul>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
              </ul>
            </div>
          </div>

          <div className={styles.spellSlots}>
            <div className={styles.spellSlotsHeader}>
              <div>Lv: 1</div>
              <div>Slots: 2</div>
              <div>Used: 0</div>
            </div>
            <div>
              <ul>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
              </ul>
            </div>
          </div>
          
          <div className={styles.spellSlots}>
            <div className={styles.spellSlotsHeader}>
              <div>Lv: 1</div>
              <div>Slots: 2</div>
              <div>Used: 0</div>
            </div>
            <div>
              <ul>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
              </ul>
            </div>
          </div>
          <div className={styles.spellSlots}>
            <div className={styles.spellSlotsHeader}>
              <div>Lv: 1</div>
              <div>Slots: 2</div>
              <div>Used: 0</div>
            </div>
            <div>
              <ul>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
              </ul>
            </div>
          </div>

          <div className={styles.spellSlots}>
            <div className={styles.spellSlotsHeader}>
              <div>Lv: 1</div>
              <div>Slots: 2</div>
              <div>Used: 0</div>
            </div>
            <div>
              <ul>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
              </ul>
            </div>
          </div>

          <div className={styles.spellSlots}>
            <div className={styles.spellSlotsHeader}>
              <div>Lv: 1</div>
              <div>Slots: 2</div>
              <div>Used: 0</div>
            </div>
            <div>
              <ul>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
                <li>spell1</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
}
