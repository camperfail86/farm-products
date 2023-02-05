import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    font-family: "Inter", "Arial", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #333333;
  }
`