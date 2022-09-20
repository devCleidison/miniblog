import styled from "styled-components";

export const Container = styled.section`
  padding-inline: 2rem;

  @media (min-width: 500px) {
    padding-inline: 3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-height: calc(100vh - var(--nav-height));
  max-width: 40rem;
  margin: 0 auto;

  position: relative;

  form {
    display: flex;
    flex-direction: column;
    padding-inline: 1rem;

    span {
      margin-bottom: 2rem;
      font-size: 1.6rem;
      font-weight: 500;
    }
  }

  p {
    text-align: center;
    color: var(--gray-color);

    margin-top: 4rem;

    input {
      color: var(--primary-color);
      margin-left: 0.6rem;
    }
  }
`;

export const Brand = styled.span`
  font-size: 3rem;
  margin-bottom: 4rem;

  text-align: center;
  font-weight: 700;

  span {
    color: var(--primary-color);
  }
`;
