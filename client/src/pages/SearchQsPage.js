import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Sidebar } from '../components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import SearchQsRender from '../components/SearchQsRender';

const SearchQsPage = () => {
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
      <SearchQsRender modalCloseHandler={modalCloseHandler} />
      <Footer />
    </>
  );
};

export default SearchQsPage;
