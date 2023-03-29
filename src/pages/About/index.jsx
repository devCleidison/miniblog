import { Browsers, GithubLogo, LinkedinLogo } from "phosphor-react";
import { Link, NavLink } from "react-router-dom";

import { Container, DevContainer } from "./styles";

export const About = () => {
  return (
    <Container>
      <h2>
        About the Mini <span>Blog</span>
      </h2>
      <p>
        This project consist in a blog maked with ReactJS on fron-end and
        Firebase on back-end.
      </p>

      <Link to="/posts/create" className="btn-primary">
        Create Post
      </Link>

      <DevContainer>
        <img src="https://github.com/devCleidison.png" alt="Developer photo" />
        <span>
          Developed by <span>Cleidison Silva</span>
        </span>

        <div>
          <NavLink
            to="//github.com/devCleidison"
            target="_blank"
            title="Github"
          >
            <GithubLogo />
          </NavLink>

          <NavLink
            to="//www.linkedin.com/in/cleidison-silva/"
            target="_blank"
            title="LinkedIn"
          >
            <LinkedinLogo />
          </NavLink>

          <NavLink
            to="//devcleidison-portfolio.netlify.app/"
            target="_blank"
            title="Portfolio"
          >
            <Browsers />
          </NavLink>
        </div>
      </DevContainer>
    </Container>
  );
};
