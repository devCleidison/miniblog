import { useEffect, useState } from "react";

import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Toast } from "../../components/Toast";

import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

import { toast } from "../../components/Toast";
import { Container, Content, Brand } from "./styles";

export const SignIn = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignInOrSignUp, setIsSignInOrSignUp] = useState(false);

  const { createUser, login, error: authError, loading } = useAuthentication();
  const { user } = useAuthValue();

  const handleCreateUser = async (e) => {
    e.preventDefault();

    const user = {
      displayName,
      email,
      password,
    };

    if (isSignInOrSignUp) {
      if (password !== confirmPassword) {
        toast.error("Passwords do not match", { className: "toast-alert" });
        return;
      }
    }

    const res = await createUser(user);

    if (res) {
      handleSignInOrSignUp();
    }
  };

  const handleUserLogin = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    const res = await login(user);
  };

  const handleSignInOrSignUp = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    if (isSignInOrSignUp) {
      setIsSignInOrSignUp(false);
    } else {
      setIsSignInOrSignUp(true);
    }
  };

  useEffect(() => {
    if (authError) {
      toast.error(authError, { className: "toast-alert" });
    }
  }, [authError]);

  return (
    <Container>
      <Content>
        {!user && (
          <>
            {isSignInOrSignUp && (
              <>
                <Brand>
                  Mini <span>Blog</span>
                </Brand>

                <Form handleSubmit={handleCreateUser}>
                  <span>Create your account</span>

                  <Input
                    type="text"
                    placeholder="Name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />

                  {!loading && <Input type="submit" value="Sign up" />}
                  {loading && <Input type="submit" value="Hold up" disabled />}
                </Form>

                <p>
                  Do you have an account?
                  <Input
                    type="button"
                    value="Sign in"
                    onClick={handleSignInOrSignUp}
                  />
                </p>
              </>
            )}

            {!isSignInOrSignUp && (
              <>
                <Brand>
                  Mini <span>Blog</span>
                </Brand>

                <Form handleSubmit={handleUserLogin}>
                  <span>Login to your account</span>

                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  {!loading && <Input type="submit" value="Sign in" />}
                  {loading && <Input type="submit" value="Hold up" disabled />}
                </Form>

                <p>
                  Don't have an account?
                  <Input
                    type="button"
                    value="Sign up"
                    onClick={handleSignInOrSignUp}
                  />
                </p>
              </>
            )}
          </>
        )}
      </Content>
    </Container>
  );
};
