import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Logout from '../components/Logout';

const LogoutContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoutPages = () => {
  return (
    <LogoutContain>
      <Nav />
      <Logout />
    </LogoutContain>
  );
};

export default LogoutPages;
