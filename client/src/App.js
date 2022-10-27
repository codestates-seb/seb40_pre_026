import React from 'react';
import './App.css';
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
