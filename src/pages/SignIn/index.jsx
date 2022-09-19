import { useState } from "react";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";

import { Container, Content, Logo } from "./styles";

export const SignIn = () => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  return (
    <Container>
      <Content>
        <Logo>
          Mini <span>Blog</span>
        </Logo>

        <Form>
          <span>Login to your account</span>

          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />

          <Input type="submit" text="Sign in" />
        </Form>

        <p>
          Dont't have an account?
          <Input type="button" text="Sign up" />
        </p>
      </Content>
    </Container>
  );
};
