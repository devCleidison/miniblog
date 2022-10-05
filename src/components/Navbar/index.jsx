import { NavLink } from "react-router-dom";
import { House, Plus, SignOut, SquaresFour, User, WarningCircle } from "phosphor-react";

import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

import { Container, Content, Navigation } from "./styles";

export const Navbar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <Container>
      <Content>
        <NavLink to="/" className="brand">
          Mini <span>Blog</span>
        </NavLink>

        <Navigation>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <House /> Home
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink
                  to="posts/create"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <Plus /> New Post
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="dashboard"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <SquaresFour /> Dashboard
                </NavLink>
              </li>
            </>
          )}
          {!user && (
            <li>
              <NavLink
                to="sign-in"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <User /> Sign in
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <WarningCircle /> About
            </NavLink>
          </li>
          {user && (
            <li>
              <button onClick={logout}>
                <SignOut /> Logout
              </button>
            </li>
          )}
        </Navigation>
      </Content>
    </Container>
  );
};
