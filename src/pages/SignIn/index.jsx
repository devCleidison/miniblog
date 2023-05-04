import { useEffect, useState } from "react";

import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { toast } from "../../components/Toast";

import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

import { Container, Content, Brand } from "./styles";

export const SignIn = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignInOrSignUp, setIsSignInOrSignUp] = useState(false);

  const { createUser, login, error: authError, setError, loading } = useAuthentication();
  const { user } = useAuthValue();

  const handleCreateUser = async (e) => {
    e.preventDefault();

    if (isSignInOrSignUp) {
      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }
    }

    const user = {
      displayName,
      email,
      password,
    };

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
      toast.error(authError);
    }

    return () => setError(null);
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
                  />
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
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
