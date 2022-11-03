import React, { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Sidebar } from '../components/Sidebar';
import Edit from '../components/Edit';
import queryString from 'query-string';

const EditContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditPage = () => {
  const location = useLocation();
  const questionI = location.state.quiestionI.questionI;
  console.log(questionI);

  return (
    <EditContain>
      <Nav />
      <Edit questionI={questionI}></Edit>
      <Footer></Footer>
    </EditContain>
  );
};

export default EditPage;
