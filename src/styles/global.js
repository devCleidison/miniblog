import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --font: 'Poppins', sans-serif;

    --bg-color: #f9fafb;
    --text-color: #242424;

    --gray-color: #6c757d;

    --primary-color: #16a34a;
    --secondary-color: #e11d48;

    --primary-shadow: #a7f3d0;

    --desktop-size: 1.6rem;
    --tablet-size: 1.5rem;
    --mobile-size: 1.4rem;

    --nav-height: 8vh;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: var(--text-color);
    background-color: var(--bg-color);

    min-width: 28rem;
    min-height: 100vh;

    position: relative;
  }

  body, button, input, textarea {
    font-family: var(--font);
    font-weight: 400;
    font-size: var(--mobile-size);
    -webkit-font-smoothing: antialiased;

    @media (min-width: 500px) {
      font-size: var(--tablet-size);
    }

    @media (min-width: 700px) {
      font-size: var(--desktop-size);
    }
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  
`