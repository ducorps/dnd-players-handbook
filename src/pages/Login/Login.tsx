import { useEffect, useState } from "react";
import { api } from '../../api/api'
import * as Form from "@radix-ui/react-form";
import { useNavigate } from 'react-router-dom';

import styles from "./Login.module.scss";
import { PersonIcon } from "@radix-ui/react-icons";

export function Login() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      const response = await api.post('/auth/sign-in', credentials);
      const { token, refreshToken } = response.data;
  
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);

      navigate('/');
    } catch (error) {
      // Handle error, show pop-up with error message
      console.log(error)
    }
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
                justifyContent: "space-between"
              }}
            >
              <Form.Label>E-mail</Form.Label>
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
              Please enter your email
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

          <Form.Submit asChild>
            <button type="submit">Login</button>
          </Form.Submit>
        </Form.Root>
      </div>
    </div>
  );
}
