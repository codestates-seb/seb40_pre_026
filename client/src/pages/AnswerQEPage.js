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

const AnswerTheQuestions = () => {
  let search = window.location.search;
  const params = new URLSearchParams(search);
  const questionI = params.get('q');
  console.log('쿼리는' + questionI);

  return (
    <AskContain>
      <Nav />
      <Sidebar />
      {/* <AskMain> */} <MainQuestions questionI={questionI} />{' '}
      {/* </AskMain> */}
      <Footer />
    </AskContain>
  );
};

export default AnswerTheQuestions;
