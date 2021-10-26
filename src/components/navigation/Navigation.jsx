import React from 'react';
import styled from 'styled-components';

const Navigation = () => {
  return (
    <NavigationStyled>
      <RoutesList>
      <LI>Learn More</LI>
      <LI>How to Work</LI>
      <LI>Home</LI>
      <LI>Plans & Pricing</LI>
      <LI>Contact us</LI>
      </RoutesList>      
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  width: 100%;
  display: flex;
  align-items: flex-start;
  position: absolute;
  bottom: 0;
  padding-bottom: 75px;
`;

const RoutesList = styled.ul`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const LI = styled.li`
  color: #FFF;
  list-style: none;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  cursor: pointer;
  &:nth-child(1) {
    color: #00DAFF;
    position: relative;
  }
  &:nth-child(1)::after {
    content: '';
    width: 100%;
    position: absolute;
    bottom: -5px;
    left: 0;
    background: #00d9ff34;
    height: 5px;
    border-radius: 50%;
  }
`;

export default Navigation
