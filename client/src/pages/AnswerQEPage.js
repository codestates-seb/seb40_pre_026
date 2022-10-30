import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import { Sidebar } from '../components/Sidebar';
import Footer from '../components/Footer';
import MainQuestions from '../components/QuestionContent';

const AskContain = styled.div`
  display: flex;
  flex-direction: column;
`;

// const AskMain = styled.div`
//   margin-top: 200px;
//   margin-left: 190px;
// `;

const AskTheQuestions = () => {
  return (
    <AskContain>
      <Nav />
      <Sidebar />
      {/* <AskMain> */} <MainQuestions /> {/* </AskMain> */}
      <Footer />
    </AskContain>
  );
};

export default AskTheQuestions;
