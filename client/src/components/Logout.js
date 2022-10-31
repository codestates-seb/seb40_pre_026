import React from 'react';
import styled from 'styled-components';
import { userIdSelector, isLoggedInSelector } from '../redux/hooks';
import { setId, setIsLoggedin, setToken } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import url from '../url';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 500px;
  margin-top: 300px;
`;

const P = styled.p`
  flex: 1 auto;
  font-size: 15px;
  font-weight: 500;
`;

const Header = styled(P)`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;

const Desc = styled(P)`
  font-size: 11px;
  color: gray;
`;

const A = styled.a`
  text-decoration: none;
  color: hsl(206, 100%, 40%);
  cursor: pointer;
  user-select: auto;
`;

const PContainer = styled.div`
  border-bottom: 0.5px solid gray;
`;

const Card = styled.div`
  width: 288.45px;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  padding: 24px;
  margin-bottom: 16px;
`;

const LogoutButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 0.8em;
  border: 1px solid transparent;
  border-radius: 3px;
  outline: none;
  font-family: inherit;
  font-size: 13px;
  font-weight: normal;
  line-height: calc((13+2) / 13);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  background-color: hsl(206, 100%, 52%);
  color: white;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  &:hover {
    background-color: hsl(209, 100%, 37.5%);
  }
  margin: 13px 3px 13px 0;
`;

const CancelButton = styled(LogoutButton)`
  background-color: transparent;
  color: hsl(206, 100%, 52%);
  &:hover {
    background-color: hsl(206, 96%, 90%);
  }
`;

const Logout = () => {
  const navigate = useNavigate();
  const email = useSelector(userIdSelector);
  const loggedIn = useSelector(isLoggedInSelector);
  const dispatch = useDispatch();
  console.log(loggedIn);

  const logoutRequestHandler = () => {
    const loggedInToken = window.localStorage.getItem('jwtToken');
    const loggedInEmail = window.localStorage.getItem('email');

    if (loggedInToken === null || loggedInEmail === null) return;

    dispatch(setId(-1));
    dispatch(setToken(-1));
    dispatch(setIsLoggedin(false));
    window.localStorage.removeItem('email');

    // const jwtToken = window.localStorage.getItem('jwtToken');
    // if (jwtToken === undefined) return;

    return axios
      .post(
        url + '/users/logout',
        { email: loggedInEmail },
        {
          headers: {
            Authorization: `Bearer ${loggedInToken}`,
          },
        }
      )
      .then(() => {
        window.localStorage.removeItem('jwtToken');
        window.localStorage.removeItem('email');
        dispatch(setId(-1));
        dispatch(setIsLoggedin(false));
        //TODO: redux, 로컬스토리지로 로그인 정보 초기화, 토큰 삭제
        //이후 메인 화면으로 리다이렉트
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <Header>
        Clicking &ldquo;Log out&ldquo; will log you out of the following domains
        on this device:
      </Header>
      <Card>
        <PContainer>
          <P>
            <A>codestates.com</A>
          </P>
          <P>
            <A>google.com</A>
          </P>
          <P>
            <A>youtube.com</A>
          </P>
          <P>
            <A>naver.com</A>
          </P>
        </PContainer>
        <LogoutButton onClick={logoutRequestHandler}>Log out</LogoutButton>
        <CancelButton>Cancel</CancelButton>
        <Desc>
          If you&apos;re on a shared computer, remember to log out of your Open
          ID provider (Facebook, Google, Stack Exchange, etc.) as well.
        </Desc>
      </Card>
    </Container>
  );
};

export default Logout;
