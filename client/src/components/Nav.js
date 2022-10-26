import React from 'react';
import styled from 'styled-components';
import stackoverflow_logo from '../image/logo-stackoverflow.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 10;
  width: 100%;
  display: flex;
  /* width: 1218px; */
  height: 58px;
  background-color: hsl(210, 8%, 95%);
  border-top: solid 5px hsl(27, 90%, 55%);
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);
`;

const FlowLogo = styled.img`
  margin: 5px;

  width: 166px;
  height: 47px;
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const AboutBtn = styled.button`
  margin: 2px;
  padding: 10px;
  border-radius: 10%;
  width: 57.98px;
  height: 29px;
  color: #525960;
`;

const ProductsBtn = styled.button`
  margin: 2px;
  padding: 10px;
  width: 166px;
  height: 47px;
`;

const ForTeamsBtn = styled.button`
  margin: 2px;
  padding: 10px;
  width: 166px;
  height: 47px;
`;
const SearchInput = styled.input`
  box-sizing: border-box;
  margin: 0px 8px;
  padding: 7.8px 9.1px 7.8px 32px;
  height: 48.19px;
  width: 709.55px;
`;
const LoginBtn = styled.button`
  margin: 2px;
  padding: 10px;
  width: 74.2px;
  height: 53.8px;
  background-color: #e1ecf4;
  font-size: 13px;
`;

const SignupBtn = styled.button`
  margin: 0px 0px 0px 4px;
  padding: 10px;
  width: 82.88px;
  height: 53.8px;
  background-color: #0a95ff;
  font-size: 13px;
`;

// https://stackoverflow.design/product/resources/icons/

function Nav() {
  return (
    <NavContainer>
      <FlowLogo src={stackoverflow_logo} alt="logo" />
      {/* <button className='logo'><img src={stackoverflow_logo} alt="logo" /></button>
            <button>"dfd"</button> */}

      <BtnContainer>
        <AboutBtn>About</AboutBtn>
        <ProductsBtn>Products</ProductsBtn>
        <ForTeamsBtn>For Teams</ForTeamsBtn>
      </BtnContainer>
      <SearchInput type="text" placeholder="Search...">
        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
      </SearchInput>
      <LoginBtn>Log in</LoginBtn>
      <SignupBtn>Sign up</SignupBtn>
    </NavContainer>
  );
}
export default Nav;
