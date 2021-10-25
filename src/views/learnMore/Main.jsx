import React from 'react';
import styled from 'styled-components';
import { MdWeb, MdOutlineDesktopWindows, MdAutoFixHigh } from 'react-icons/md';

const Main = () => {
  return (
    <MainStyled>
      <Rectangle>
        <Table>
          <MdAutoFixHigh 
          style={{
            color: '#fff',
            width: '60px',
            height: '60px'
          }}
          />
          <TTitle>Designin Your Website</TTitle>
          <TP>Begin by gathering all the information, photos, videos, media, etc, that you would like Genius, to add to your website´s first draft, if you´re ready please click here.</TP>
        </Table>
        <Table>
          <MdWeb 
          style={{
            color: '#fff',
            width: '60px',
            height: '60px'
          }}
          />
          <TTitle>Building Your Website</TTitle>
          <TP>With the information and media provided, Genius. will build you a draft website.</TP>
        </Table>
        <Table>
          <MdOutlineDesktopWindows
          style={{
            color: '#fff',
            width: '60px',
            height: '60px'
          }}
          />
          <TTitle>Going Live</TTitle>
          <TP>After you final appreval, Genius. will match a comprehensive pricing plan that best fits your online needs.</TP>
        </Table>
      </Rectangle>
      <Box>
          <Gstarted>Getting Started.</Gstarted>
          <GSP>Hi, i'am Genius, a super advanced interactive service, powered by A.I. With the power of your voice, i can build your website, connect your personalized domain, set up your professional email and, much more.</GSP>
      </Box>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  width: 100%;
  height: 646px;
  padding: 0 154px 0 240px;
  display: flex;
  justify-content: space-between;
  margin-top: 5em;
`;

const Rectangle = styled.div`
  width: 698px;
  height: 646px;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.025) 0%, rgba(196, 196, 196, 0) 100.02%);
  border-left: 4px solid #f3f3f3;
  padding-left: 32px;
`;

const Table = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const TTitle = styled.h4`
  font-weight: 600;
  color: #fff;
  text-align: start;
  padding-top: .6em;
  font-size: 14px;
  line-height: 18px;
`;

const TP = styled.p`
  font-weight: 400;
  color: #fff;
  text-align: start;
  font-size: 14px;
  padding-top: .6em;
  line-height: 18px;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 342px;
`;

const Gstarted = styled.h2`
  color: #fff;
  font-weight: 400;
  font-size: 80px;
  line-height: 108px;
`;

const GSP = styled.p`
  width: 594px;
  color: #fff;
  font-weight: 400px;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 10%;
  text-align: start;
  padding-left: .6em;
`;

export default Main
