import React from 'react';
import MainPage from './pages/MainPage';
import QuestionsPage from './pages/QuestionsPage';
import TagsPages from './pages/TagsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPages from './pages/LoginPage';
import LogoutPages from './pages/LogoutPage';
import SignupPages from './pages/SignupPage';
import AskPage from './pages/AskPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/tags" element={<TagsPages />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/logout" element={<LogoutPages />} />
        <Route path="/signup" element={<SignupPages />} />
        <Route path="/ask" element={<AskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
