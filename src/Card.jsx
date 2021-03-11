import React, { useEffect } from 'react';
import styled from "styled-components";

import { data } from './utils/data';

import logo from './assets/logo.png'

const addLineBreaks = (str) => {
  let text = document.getElementById("card-content-text");
  text.innerHTML = str.replace(/(?:\r\n|\r|\n)/g, '<br />');
}

export const Card = ({ theme }) => {
  useEffect(() => {
    addLineBreaks(data.cardBody);
  });

  return (
    <Wrapper>
      <IMG src={logo} alt="logo" />
      <Container style={{ backgroundColor: `${theme.colors.body}`, color: `${theme.colors.text}`, fontFamily: `${theme.font}` }}>
        <H1>{data.cardTitle}</H1>
        <P id="card-content-text" />
      </Container>
    </Wrapper>
  )
}

const H1 = styled('h1')`
  text-align: center;
  font-size: 2.4em;
`;

const P = styled.p`
  font-size: 1.2em;
`;

const IMG = styled.img`
  width: 200px;  
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
`

const Wrapper = styled.div`
  margin-top: 5vh;

  @media (max-width: 1250px) {
    margin-top: 5vh;
  }

  @media (max-width: 800px) {
    margin-top: 5vh;
    margin-bottom: 10vh;
  }
`;

const Container = styled.div`
  padding: 15px 48px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (max-width: 1250px) {
    padding: 15px 25px;
  }

  @media (max-width: 800px) {
    padding: 15px 20px;
  }
`;