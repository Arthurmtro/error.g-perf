import { createGlobalStyle } from "styled-components";

import background from "../assets/landing-background.jpg"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    background-image: url(${background});
    background-position: center bottom;
    height: 90vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
  }

  .floating-image {
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
    img { width: 100%; height: auto; }
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }
`;