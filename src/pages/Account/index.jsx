import { useEffect, useState } from "react";

import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Modal } from "../../components/Modal";
import { Toast } from "../../components/Toast";

import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

import { toast } from "react-toastify";
import { Container, Content, Brand } from "./styles";

export const Account = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const [isShowModal, setIsShowModal] = useState(false);

  const { user } = useAuthValue();

  const handleSubmit = async (e) => {
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

    const res = await createUser(user);

    if (res) {
      handleModal();
    }
  };

  const handleModal = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    if (isShowModal) {
      setIsShowModal(false);
    } else {
      setIsShowModal(true);
    }
  };

  useEffect(() => {
    if (authError) {
      toast.error(authError, { className: "toast-alert" });
    }
  }, [authError]);

  return (
    <Container>
      <Toast />
      <Content>
        {!user && (
          <>
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

                  {!loading && <Input type="submit" value="Sign up" />}
                  {loading && <Input type="submit" value="Hold up" disabled />}
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
          </>
        )}
      </Content>
    </Container>
  );
};
