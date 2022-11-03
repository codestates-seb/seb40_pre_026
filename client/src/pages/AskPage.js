import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Ask from '../components/Ask';
import Footer from '../components/Footer';

const AskContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AskPage = () => {
  return (
    <AskContain>
      <Nav />
      <Ask></Ask>
      <Footer></Footer>
    </AskContain>
  );
};

export default AskPage;
