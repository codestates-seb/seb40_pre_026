import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Sidebar } from '../components/Sidebar';
import HomeRender from '../components/HomeRender';
import { Routes, Route } from 'react-router-dom';
import QuestionRenderPage from '../components/QuestionsRender';

const MainPage = () => {
  return (
    <>
      <Nav />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomeRender />} />
        {/* <Route path="/:id" element={<Details />} /> */}
        <Route path="/questions" element={<QuestionRenderPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainPage;
