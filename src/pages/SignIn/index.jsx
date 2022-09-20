import { useState } from "react";

import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Modal } from "../../components/Modal";
import { Toast } from "../../components/Toast";

import { toast } from "react-toastify";
import { Container, Content, Brand } from "./styles";

export const SignIn = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isShowModal, setIsShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      displayName,
      email,
      password,
    };

    if (isShowModal) {
      if (password !== confirmPassword) {
        toast.error("Passwords do not match", { className: "toast-alert" });
        return;
      }
    }

    console.log(user);
  };

  const handleModal = () => {
    if (isShowModal) {
      setIsShowModal(false);
    } else {
      setIsShowModal(true);
    }
  };

  return (
    <Container>
      <Toast />
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

              <Input type="submit" value="Sign up" />
            </Form>
          </Modal>
        )}

        {!isShowModal && (
          <>
            <Brand>
              Mini <span>Blog</span>
            </Brand>

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
