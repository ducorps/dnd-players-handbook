import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./Modal.module.scss";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { api } from "../../api/api";

export function Modal({
  getInventory,
  inventoryId,
}: {
  getInventory: () => void;
  inventoryId: number | undefined;
}) {
  const [form, setForm] = useState({
    name: "",
  });

  async function saveItem() {
    await api
      .post(`/inventories/${inventoryId}/add-item`, form.name, {
        headers: { "Content-Type": "text/plain" },
      })
      .then(() => {
        getInventory();
      });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.DialogOverlay} />
      <Dialog.Content className={styles.DialogContent}>
        <Dialog.Title className={styles.DialogTitle}>
          Add Equipment
        </Dialog.Title>
        <Dialog.Description className={styles.DialogDescription}>
          Add your equipment here.
        </Dialog.Description>
        <form className={styles.form}>
          <label htmlFor="#type">Name:</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ex: handaxe"
          ></input>
          <Dialog.Close asChild>
            <button
              onClick={saveItem}
              disabled={!form.name}
              className={styles.saveButton}
            >
              Save
            </button>
          </Dialog.Close>
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
