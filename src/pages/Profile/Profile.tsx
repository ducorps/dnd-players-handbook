import { PersonIcon } from "@radix-ui/react-icons";
import styles from "./Profile.module.scss";
import * as Form from "@radix-ui/react-form";
import { useState } from "react";

export function Profile() {
  const [edit, setEdit] = useState(false);

  function handleSetEdit() {
    setEdit(!edit);
  }

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.icon}>
          <PersonIcon width="50" height="50" />
        </div>
        <h2 className={styles.title}>Profile</h2>
        <Form.Root className={styles.form}>
          <div className={styles.formFields}>
            <Form.Field name="name">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <Form.Label>Name</Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  value="Nome"
                  disabled={!edit}
                  type="text"
                  required
                />
              </Form.Control>
              <Form.Message match="valueMissing">
                Please enter your email
              </Form.Message>
            </Form.Field>

            <Form.Field name="email">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <Form.Label>E-mail</Form.Label>
              </div>
              <Form.Control asChild>
                <input
                  value="email@gmail.com"
                  disabled={!edit}
                  type="email"
                  required
                />
              </Form.Control>
              <Form.Message match="valueMissing">
                Please enter your email
              </Form.Message>
            </Form.Field>

            <Form.Field className={styles.formField} name="password">
              <div>
                <Form.Label>Password</Form.Label>
              </div>
              <Form.Control asChild>
                <input disabled={!edit} value="currentPassword" type="password" required />
              </Form.Control>
              <Form.Message match="valueMissing">
                Please enter your password
              </Form.Message>
            </Form.Field>

            {edit && (
              <Form.Field name="confirmPassword">
                <div>
                  <Form.Label>Confirm Your Password</Form.Label>
                </div>
                <Form.Control asChild>
                  <input type="confirmPassword" required />
                </Form.Control>
                <Form.Message match="valueMissing">
                  Please enter the password
                </Form.Message>
              </Form.Field>
            )}
          </div>

          <Form.Submit asChild>
            <button onClick={handleSetEdit}>
              {edit ? "Salvar" : "Editar"}
            </button>
          </Form.Submit>
        </Form.Root>
      </div>
    </div>
  );
}
