import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Login from '../components/Login';

const LoginContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginPages = () => {
  return (
    <LoginContain>
      <Nav />
      <Login />
    </LoginContain>
  );
};

export default LoginPages;
