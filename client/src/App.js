import React from 'react';
import MainPage from './pages/MainPage';
import QuestionsPage from './pages/QuestionsPage';
import TagsPages from './pages/TagsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPages from './pages/LoginPage';
import LogoutPages from './pages/LogoutPage';
import SignupPages from './pages/SignupPage';
import { useEffect } from 'react';
import { setId, setIsLoggedin } from './redux/userSlice';
import { userIdSelector, isLoggedInSelector } from './redux/hooks';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const loggedInEmail = window.localStorage.getItem('email');
    if (loggedInEmail !== null) {
      dispatch(setId(loggedInEmail));
      dispatch(setIsLoggedin(true));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/tags" element={<TagsPages />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/logout" element={<LogoutPages />} />
        <Route path="/signup" element={<SignupPages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
