import { NavLink } from "react-router-dom";
import { House, User, WarningCircle } from "phosphor-react";

import { Container, Content, Navigation } from "./styles";

export const Navbar = () => {
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
          <li>
            <NavLink
              to="account"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <User /> Account
            </NavLink>
          </li>
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
