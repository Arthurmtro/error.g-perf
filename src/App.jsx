import React, { useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/GlobalStyles';

import theme from './theme/schema.json'

import { Card } from './Card';

import laptop from './assets/laptop.png';
import server from './assets/server.png';
import astronaute from './assets/astronaute.png';

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: [theme.font]
      }
    });
  });

  const d = new Date(), n = d.getFullYear();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Laptop src={laptop} className="floating-image" alt="laptop g-perf" />
      <Server src={server} className="floating-image" alt="server g-perf" />
      <Astronaute src={astronaute} className="floating-image" alt="astronaute g-perf" />
      <Container style={{ fontFamily: theme.font }}>
        <Card theme={theme} />
      </Container>
      <Copyright>© Copyright {n} - <a style={{ color: theme.colors.body }} href="https://github.com/Arthurmtro">arthur monteiro</a> </Copyright>
    </ThemeProvider >
  );
}

const Container = styled.div`
  margin: auto;
  width: 80%;
  z-index: 20;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const absoluteImg = styled.img`
  position: fixed;
  z-index: -2;
`;

const Laptop = styled(absoluteImg)`
  top: 40px;
  right: 50px;
  @media (max-width: 800px) {
    right: 2px;
  }
`;

const Server = styled(absoluteImg)`
  bottom: 40px;
  right: 10px;
  @media (max-width: 800px) {
    right: 0px;
  }
`;

const Astronaute = styled(absoluteImg)`
  top: 40vh;
  left: 50px;
  @media (max-width: 800px) {
    left: 0px;
  }
`;

const Copyright = styled.p`
  position: fixed;
  z-index: -2;
  bottom: 2px;
  @media (max-width: 800px) {
    left: 0px;
  }
  color: ${theme.colors.body};
`;

export default App;
