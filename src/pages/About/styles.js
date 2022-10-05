import styled from "styled-components";

export const Container = styled.section`
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;

  min-height: calc(100vh - var(--nav-height));
  padding: 0 3rem 5rem;

  p {
    color: var(--gray-color);
    margin-bottom: 2rem;
  }

  a {
    display: block;
    margin-top: 1.5rem;
    padding: 1rem 3rem;

    background-color: var(--primary-color);
    box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.15);
    color: var(--bg-color);
    border-radius: 0.6rem;

    transition: background-color 300ms;
    &:hover {
      background-color: var(--primary-hover);
    }
  }

  @media (max-width: 600px) {
    padding: 0 2rem;
  }
`;
