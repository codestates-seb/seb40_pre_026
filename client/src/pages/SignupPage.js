import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Signup from '../components/Signup';

const SignupContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignupPages = () => {
  return (
    <SignupContain>
      <Nav />
      <Signup />
    </SignupContain>
  );
};

export default SignupPages;
