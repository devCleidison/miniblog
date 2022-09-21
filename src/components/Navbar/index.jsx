import { NavLink } from "react-router-dom";
import { House, Plus, SquaresFour, User, WarningCircle } from "phosphor-react";

import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

import { Container, Content, Navigation } from "./styles";

export const Navbar = () => {
  const { user } = useAuthValue();

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
            <li>
              <NavLink
                to="posts/create"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <Plus /> New Post
              </NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink
                to="dashboard"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <SquaresFour /> Dashboard
              </NavLink>
            </li>
          )}
          {!user && (
            <li>
              <NavLink
                to="account"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <User /> Account
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
        </Navigation>
      </Content>
    </Container>
  );
};
