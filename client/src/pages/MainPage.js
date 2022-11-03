import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Sidebar } from '../components/Sidebar';
import HomeRender from '../components/HomeRender';
import { Routes, Route } from 'react-router-dom';
import QuestionRenderPage from '../components/QuestionsRender';

const MainPage = () => {
  const [dropdownIsOpen, setOpen] = useState(false);
  const ModalItem = () => {
    setOpen(!dropdownIsOpen);
  };
  const modalCloseHandler = () => {
    setOpen(false);
  };
  return (
    <>
      <Nav
        ModalItem={ModalItem}
        modalCloseHandler={modalCloseHandler}
        dropdownIsOpen={dropdownIsOpen}
      />
      <Sidebar />
      <HomeRender modalCloseHandler={modalCloseHandler} />
      <Footer />
    </>
  );
};

export default MainPage;
