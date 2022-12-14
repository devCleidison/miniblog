import styled from "styled-components";

export const Container = styled.input`
  box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.08);
  background-color: transparent;

  &::placeholder {
    color: var(--gray-color);
  }

  &[type="text"],
  &[type="email"],
  &[type="password"],
  &[type="submit"] {
    border: none;
    border-radius: 0.6rem;

    padding: 1.2rem 1.6rem;
    margin-bottom: 2rem;
  }

  &[type="submit"] {
    background-color: var(--primary-color);
    color: var(--bg-color);
    margin-top: 2rem;
    padding: 1.4rem 1.6rem;

    box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.15);
    cursor: pointer;

    transition: background-color 300ms;
    &:hover {
      background-color: var(--primary-hover);
    }

    &:disabled {
      background-color: var(--gray-color);
    }
  }

  &[type="button"] {
    border: none;
    box-shadow: none;

    cursor: pointer;
  }
`;
