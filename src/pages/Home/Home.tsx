import { PersonIcon } from "@radix-ui/react-icons";
import styles from "./Home.module.scss";
import * as Form from "@radix-ui/react-form";

export function Home() {
  return (
    <>
      <div className={styles.logo}>
        <h1>LOGO</h1>
      </div>

      <div className={styles.card}>
        <PersonIcon width="50" height="50" />
        <Form.Root className={styles.login}>
          <Form.Field className={styles.formField} name="email">
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
              <input type="email" required />
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
              <input required />
            </Form.Control>
            <Form.Message match="valueMissing">
              Please enter your password
            </Form.Message>
          </Form.Field>

          <Form.Submit asChild>
            <button>Login</button>
          </Form.Submit>
        </Form.Root>
      </div>
    </>
  );
}
