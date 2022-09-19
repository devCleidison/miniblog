import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;

  width: min(45rem, 100%);
  height: min(50rem, 100%);

  background-color: var(--bg-color);
  box-shadow: 0 0 .5rem rgba(0, 0, 0, 0.15);
  border-radius: .6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    color: var(--text-color);
    cursor: pointer;
  }
`