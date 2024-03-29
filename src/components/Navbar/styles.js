import styled from "styled-components";

export const Container = styled.nav`
  box-shadow: rgba(0, 0, 0, 0.15) 0px -2px 10px 0px;
  z-index: 50;

  @media (max-width: 660px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    .brand {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: var(--nav-height);
  max-width: 112rem;

  margin: 0 auto;
  padding-inline: 3rem;

  .brand {
    font-size: 2.2rem;
    font-weight: 700;

    span {
      color: var(--primary-color);
    }
  }
`;

export const Navigation = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 3rem;

  li a,
  li button {
    &.active {
      color: var(--primary-color);
    }

    svg {
      display: none;
    }
  }

  @media (max-width: 660px) {
    justify-content: space-around;

    width: 100%;

    li a,
    li button {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 0.2rem;
      font-size: 1rem;

      &.active {
        color: var(--primary-color);
      }

      svg {
        font-size: 2.2rem;
        display: initial;
      }
    }
  }
`;
