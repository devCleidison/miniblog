import styled from "styled-components";

export const Container = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;

  min-height: calc(100vh - var(--nav-height));
  padding: 0 3rem 5rem;

  form {
    display: flex;
    flex-direction: column;

    padding-top: 2rem;
    padding-inline: 1rem;

    width: 40rem;
    max-width: 100%;

    textarea {
      border: none;
      border-radius: 0.6rem;

      padding: 1.2rem 1.6rem;
      margin-bottom: 2rem;

      box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.08);
      background-color: transparent;

      resize: none;

      &::placeholder {
        color: var(--gray-color);
      }
    }
  }

  @media (max-width: 600px) {
    padding: 0 2rem;
  }
`;
