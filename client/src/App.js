import React from 'react';
import MainPage from './pages/MainPage';
import QuestionsPage from './pages/QuestionsPage';
import TagsPages from './pages/TagsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPages from './pages/LoginPage';
import LogoutPages from './pages/LogoutPage';
import SignupPages from './pages/SignupPage';
import AskPage from './pages/AskPage';
import SearchQsPage from './pages/SearchQsPage';
import AnswerTheQuestions from './pages/AnswerQEPage';
import { useEffect } from 'react';
import { setId, setIsLoggedin, setToken } from './redux/userSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInToken = window.localStorage.getItem('jwtToken');
    const loggedInEmail = window.localStorage.getItem('email');

    if (loggedInToken !== null || loggedInEmail !== null) {
      // 새로고침을or 브라우저를 다시 켰을때 로그인 정보 남아있는지 확인
      console.log(loggedInToken);
      console.log(typeof loggedInToken);
      dispatch(setToken(loggedInToken));
      dispatch(setId(loggedInEmail));
      dispatch(setIsLoggedin(true));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/search" element={<SearchQsPage />} />
        <Route path="/tags" element={<TagsPages />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/logout" element={<LogoutPages />} />
        <Route path="/signup" element={<SignupPages />} />
        <Route path="/AnswerTheQuestions" element={<AnswerTheQuestions />} />
        <Route path="/ask" element={<AskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
