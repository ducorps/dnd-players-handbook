import { useEffect, useState } from "react";
import { api } from "../../api/api";
import * as Form from "@radix-ui/react-form";
import { useNavigate } from 'react-router-dom';

import styles from "./Login.module.scss";
import { PersonIcon } from "@radix-ui/react-icons";

export function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isNewAccount, setIsNewAccount] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await api.post('/auth/sign-in', credentials);
      const { token, refreshToken } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);

      navigate('/');
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const createNewAccount = async () => {
    const parameters = {
      ...credentials,
      role: ["user"]
    }
    
    const response = await api.post('auth/sign-up', parameters);

    alert(response.data.message)
    
    navigate("/login")
  };

  useEffect(() => {
    document.body.className = "loginBackground";
    return () => {
      document.body.className = "defaultBackground";
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <PersonIcon width="50" height="50" />
        </div>

        <Form.Root onSubmit={handleSubmit} className={styles.login}>
          <Form.Field className={styles.formField} name="email">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label>Username</Form.Label>
            </div>

            <Form.Control asChild>
              <input
                type="username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
              />
            </Form.Control>

            <Form.Message match="valueMissing">
              Please enter your username
            </Form.Message>
          </Form.Field>

          <Form.Field className={styles.formField} name="password">
            <div>
              <Form.Label>Password</Form.Label>
            </div>

            <Form.Control asChild>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </Form.Control>

            <Form.Message match="valueMissing">
              Please enter your password
            </Form.Message>
          </Form.Field>

          { isNewAccount === true &&
            <Form.Field className={styles.formField} name="password">
              <div>
                <Form.Label>E-mail</Form.Label>
              </div>

              <Form.Control asChild>
                <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                />
              </Form.Control>

              <Form.Message match="valueMissing">
                Please enter your email
              </Form.Message>
            </Form.Field>
          }

          { isNewAccount === false &&
            <Form.Submit asChild>
              <button disabled={loading} type="submit">
                {loading ? "Loading..." : "Login"}
              </button>
            </Form.Submit>
          }

          { isNewAccount === false &&
            <button onClick={() => setIsNewAccount(true)}>
              Create new account
            </button>
          }

          { isNewAccount === true &&
            <button onClick={() => createNewAccount}>
              Create
            </button>
          }

          { isNewAccount === true &&
            <button onClick={() => setIsNewAccount(false)}>
              Cancel
            </button>
          }
        </Form.Root>
      </div>
    </div>
  );
}
