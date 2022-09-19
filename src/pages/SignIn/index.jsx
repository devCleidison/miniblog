import { useState } from "react";

import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Modal } from "../../components/Modal";

import { Container, Content, Logo } from "./styles";

export const SignIn = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [isShowModal, setIsShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleModal = () => {
    if (isShowModal) {
      setIsShowModal(false);
    } else {
      setIsShowModal(true);
    }
  };

  return (
    <Container>
      <Content>
        {isShowModal && (
          <Modal handleModal={handleModal}>
            <Form handleSubmit={handleSubmit}>
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

              <Input type="submit" value="Sign up" />
            </Form>
          </Modal>
        )}

        {!isShowModal && (
          <>
            <Logo>
              Mini <span>Blog</span>
            </Logo>

            <Form handleSubmit={handleSubmit}>
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

              <Input type="submit" value="Sign in" />
            </Form>

            <p>
              Dont't have an account?
              <Input type="button" value="Sign up" onClick={handleModal} />
            </p>
          </>
        )}
      </Content>
    </Container>
  );
};
