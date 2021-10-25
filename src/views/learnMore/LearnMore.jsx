import React from 'react';
import styled from 'styled-components';

import particlesImg from '../../assets/images/Particles-0.1s-1917px.svg';

import Main from './Main';
import Navigation from '../../components/navigation/Navigation';


const LearnMore = () => {
  return (
    <LearnMoreStyled>
      <TopBar>
        <BtnBox>
          <Button login={true}><P>Login</P></Button>
          <Button><P>Sign up</P></Button>
        </BtnBox>
      </TopBar>
      <Logo>Genius.</Logo>
      <Main />
      <Navigation />
    </LearnMoreStyled>
  )
}

const LearnMoreStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: url(${particlesImg});
`;

const Logo = styled.h2`
  width: 100%;
  line-height: 48px;
  font-size: 53px;
  font-weight: bold;
  font-family: sans-serif;
  display: block;
  text-align: center;
  background: linear-gradient(89.46deg, #0080FF -3.4%, #00DAFF 99.53%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -5px;
`;

const TopBar = styled.div`
  width: 100%;
  height: auto;
  padding-top: 55px;
  padding-right: 53px;
  display: flex;
  justify-content: flex-end;
`;

const BtnBox = styled.div`
  display: flex;
`;

const Button = styled.div`
  width: 80px;
  height: 28px;
  border-radius: 25px;
  background: ${({login}) => login ? 'linear-gradient(89.46deg, #0080FF -3.4%, #00DAFF 99.53%)' : 'tarnsprent'};
  color: ${({login}) => login ? '#FFF' : '#00DAFF'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const P = styled.p``;

export default LearnMore
