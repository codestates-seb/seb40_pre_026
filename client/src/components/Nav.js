import React from 'react';
import styled from 'styled-components';
import stackoverflow_logo from '../image/logo-stackoverflow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import MagnifyingGlass from '../image/magnifyingGlass.png';

const NavContainer = styled.div`
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; */
  box-sizing: border-box;
  position: relative;
  margin: 0px;
  width: 100%;
  display: flex;
  /* width: 1218px; */
  height: 58px;
  background-color: hsl(210, 8%, 97.5%);
  border-top: solid 5px hsl(27, 90%, 55%);
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);
`;

const NavBoxCotain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 100px;
  width: 100%;
`;

const FlowLogo = styled.img`
  margin: 10px;
  padding: 6px 12px;
  width: 150px;
  height: 41px;
  &:hover {
    background-color: hsl(210, 8%, 90%);
    height: 43px;
  }
  cursor: pointer;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const AboutBtn = styled.button`
  margin: 2px 7px 2px 5px;
  padding: 3px 3px;
  width: 50px;
  height: 43px;
  border-radius: 1000px;
  border: none;
  color: #525960;
  background-color: hsl(210, 8%, 97.5%);
  &:hover {
    background-color: hsl(210, 8%, 90%);
    border-radius: 1000;
  }
  cursor: pointer;
  font-size: 13px;
`;

const ProductsBtn = styled.button`
  margin: 2px 0px 2px 2px;
  padding: 3px 3px;
  width: 65px;
  height: 43px;
  border-radius: 1000px;
  border: none;
  color: #525960;
  background-color: hsl(210, 8%, 97.5%);
  &:hover {
    background-color: hsl(210, 8%, 90%);
  }
  cursor: pointer;
  font-size: 13px;
`;

const ForTeamsBtn = styled.button`
  margin: 2px -10px 2px 2px;
  padding: 3px 3px;
  width: 90px;
  height: 43px;
  border-radius: 1000px;
  border: none;
  color: #525960;
  background-color: hsl(210, 8%, 97.5%);
  &:hover {
    background-color: hsl(210, 8%, 90%);
  }
  cursor: pointer;
  font-size: 13px;
`;

const SearchContainer = styled.div`
  margin: px;
  width: 710px;
  height: 32px;
  position: relative;
  border: 0;
  img {
    margin-right: 30px;
    position: absolute;
    width: 25px;
    height: 25px;
    left: 15px;
    top: 5px;
  }
`;
const SearchInput = styled.input`
  box-sizing: border-box;
  margin: 0px 10px;
  padding: 7.8px 9.1px 7.8px 32px;
  height: 32px;
  width: 700px;
  /* outline: none !important;
  border-color: hsl(210, 8%, 65%);
  box-shadow: 0 0 10px #d6a8e9; */
  /* border-color: solid 4px hsl(210, 8%, 75%); */
  border-radius: 5px;
  border-top: solid 3px hsl(210, 8%, 55%);
  border-left: solid 3px hsl(210, 8%, 55%);
  border-right: solid 2.5px hsl(210, 8%, 75%);
  border-bottom: solid 2.5px hsl(210, 8%, 75%);
  &:focus {
    outline: none;
    border-color: transparent hsl(206, 90%, 69.5%);
    box-shadow: 0px 0px 10px hsl(206, 90%, 69.5%);
  }
  font-size: 15px;
`;
const LoginBtn = styled.button`
  margin: 4px 4px 4px 10px;
  padding: 5px;
  width: 59px;
  height: 33px;
  background-color: #e1ecf4;
  color: #39739d;
  font-size: 13px;
  border: solid 1px hsl(205, 41%, 63%);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
  &:hover {
    background-color: hsl(205, 56%, 76%);
  }
  cursor: pointer;
  font-size: 13px;
`;

const SignupBtn = styled.button`
  text-align: center;
  margin: 0px 0px 0px 4px;
  padding: 10px;
  font-weight: 500;
  width: 69px;
  height: 33px;
  background-color: #0a95ff;
  color: #ffffff;
  font-size: 13px;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  cursor: pointer;
  /* user-select: none; */

  &:hover {
    background-color: hsl(205, 47%, 42%);
    font-size: 13px;
  }
`;

function Nav() {
  return (
    <NavContainer>
      <NavBoxCotain>
        <FlowLogo src={stackoverflow_logo} alt="logo" />
        <BtnContainer>
          <AboutBtn>About</AboutBtn>
          <ProductsBtn>Products</ProductsBtn>
          <ForTeamsBtn>For Teams</ForTeamsBtn>
        </BtnContainer>
        <SearchContainer>
          <img src={MagnifyingGlass} alt="searchicon" />
          <SearchInput type="text" placeholder="Search..." />
        </SearchContainer>
        <LoginBtn>Log in</LoginBtn>
        <SignupBtn>Sign up</SignupBtn>
      </NavBoxCotain>
    </NavContainer>
  );
}
export default Nav;
