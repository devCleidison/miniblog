import { Link } from "react-router-dom";

import { Container } from "./styles";

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

      <Link to="/posts/create">Create Post</Link>
    </Container>
  );
};
