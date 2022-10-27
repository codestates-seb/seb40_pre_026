import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Sidebar } from '../components/Sidebar';
import HomeRender from '../components/HomeRender';
import QuestionRenderPage from '../components/QuestionsRender';

const MainPage = () => {
  return (
    <>
      <Nav />
      <Sidebar />
      <HomeRender />
      {/* <QuestionRenderPage /> */}
      <Footer />
    </>
  );
};

export default MainPage;
