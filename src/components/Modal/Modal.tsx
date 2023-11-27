import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./Modal.module.scss";
import { useState } from "react";

export function Modal() {
  const [type, setType] = useState<"armor" | "weapon" | "other">("other");

  function onSelectType(type: any) {
    console.log(type);
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.DialogOverlay} />
      <Dialog.Content className={styles.DialogContent}>
        <Dialog.Title className={styles.DialogTitle}>
          Add Equipment
        </Dialog.Title>
        <Dialog.Description className={styles.DialogDescription}>
          Add your equipment here. Click save when you're done.
        </Dialog.Description>
        <form className={styles.form}>
          <label htmlFor="#type">Type:</label>
          <select onChange={onSelectType} value={type} id="type">
            <option>Other</option>
            <option>Weapon</option>
            <option>Armor</option>
          </select>

          <input id="name" placeholder="Name"></input>

          <input id="value" placeholder="Value"></input>

          <input id="weight" placeholder="Weight"></input>

          {type === "armor" && (
            <>
              <input placeholder="Damage"></input>
              <input placeholder="Properties"></input>
            </>
          )}
          {type === "weapon" && (
            <>
              <input placeholder="Strength"></input>
              <input placeholder="Stealth"></input>
              <input placeholder="Armor Class"></input>
              <input placeholder="Armor Type"></input>
            </>
          )}
        </form>
        <Dialog.Close asChild>
          <button className={styles.IconButton} aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
