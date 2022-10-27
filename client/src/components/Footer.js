import React from 'react';
import styled from 'styled-components';
import LogoSrc from '../image/SOFLogo.png';

const FooterContain = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #232628;
  height: 330px;
`;
const Logo = styled.img.attrs({
  src: `${LogoSrc}`,
})`
  width: 40px;
  height: auto;
  margin-top: 20px;
`;
const LogoLineContain = styled.div`
  display: flex;
  flex-direction: row;
`;
const FooterLineContain = styled.div`
  margin: 30px 35px;
`;
const FooterContentHead = styled.div`
  color: #babfc4;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
`;
const FooterContentLineHead = styled.div`
  color: white;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
`;
const FooterContents = styled.div`
  color: white;
`;
const TopLine = styled.div`
  display: flex;
  color: white;
  font-size: 12px;
`;
const TopContents = styled.div`
  color: #7d8289;
  margin: 0 5px;
`;
const BottomLine = styled.div`
  color: #7d8289;
  font-size: 12px;
`;
const BottomContents = styled.div`
  color: #7d8289;
`;
const InsideContents = styled.div`
  color: #7d8289;
  font-size: 14px;
  margin-bottom: 6px;
`;

const Footer = () => {
  return (
    <FooterContain>
      <LogoLineContain>
        <FooterContentHead>
          <Logo />
        </FooterContentHead>
        <FooterLineContain>
          <FooterContentHead>STACK OVERFLOW</FooterContentHead>
          <InsideContents>Questions</InsideContents>
          <InsideContents>Help</InsideContents>
        </FooterLineContain>
      </LogoLineContain>
      <FooterLineContain>
        <FooterContentHead>PRODUCTS</FooterContentHead>
        <InsideContents>Teams</InsideContents>
        <InsideContents>Advertising</InsideContents>
        <InsideContents>Collectives</InsideContents>
        <InsideContents>Talent</InsideContents>
      </FooterLineContain>
      <FooterLineContain>
        <FooterContentHead>COMPANY</FooterContentHead>
        <InsideContents>About</InsideContents>
        <InsideContents>Press</InsideContents>
        <InsideContents>Work Here</InsideContents>
        <InsideContents>Legal</InsideContents>
        <InsideContents>Privacy Policy</InsideContents>
        <InsideContents>Terms of Service</InsideContents>
        <InsideContents>Contact Us</InsideContents>
        <InsideContents>Cookie Settings</InsideContents>
        <InsideContents>Cookie Policy</InsideContents>
      </FooterLineContain>
      <FooterLineContain>
        <FooterContentHead>STACK EXCHANGE NETWORK</FooterContentHead>
        <InsideContents>Technology</InsideContents>
        <InsideContents>Culture&recreation</InsideContents>
        <InsideContents>Life&arts</InsideContents>
        <InsideContents>Science</InsideContents>
        <InsideContents>Professional</InsideContents>
        <InsideContents>Business</InsideContents>
        <br />
        <InsideContents>API</InsideContents>
        <InsideContents>Data</InsideContents>
      </FooterLineContain>
      <FooterLineContain>
        <FooterContentLineHead>
          <TopLine>
            <TopContents>Blog</TopContents>
            <TopContents>Facebook</TopContents>
            <TopContents>Twitter</TopContents>
            <TopContents>LinkedIn</TopContents>
            <TopContents>Instagram</TopContents>
          </TopLine>
          <BottomLine>
            <BottomContents>
              Site design / logo © 2022 Stack Exchange Inc; user <br />{' '}
              contributions licensed under CC BY-SA.
              <br /> rev 2022.10.24.21846
            </BottomContents>
          </BottomLine>
        </FooterContentLineHead>
      </FooterLineContain>
    </FooterContain>
  );
};

export default Footer;
