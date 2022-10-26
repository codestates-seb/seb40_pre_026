import logo from './logo.svg';
import React from 'react';
import Users from './components/Users';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Nav from './components/Nav';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Sidebar />
    </div>
  );
}

export default App;
