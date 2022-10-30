import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Ask from '../components/Ask';

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
    </AskContain>
  );
};

export default AskPage;
