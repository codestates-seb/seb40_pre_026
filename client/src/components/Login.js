RawBlame;

import { React, useState } from 'react';
import styled from 'styled-components';
import icon from '../image/github.png';
import logo from '../SOFLogo.png';
import { setId, setIsLoggedin, setToken } from '../redux/userSlice';
import {
  userIdSelector,
  isLoggedInSelector,
  jwtTokenSelector,
} from '../redux/hooks';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { url } from '../url';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 288.45px;
  margin: 300px;
`;

const GitHubLogin = styled.button`
  flex: 1 auto;
  background-color: rgb(48, 51, 55);
  color: white;
  position: relative;
  display: inline-block;
  padding: 0.8em;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;
  font-family: inherit;
  font-weight: normal;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  font-size: 13px;
  line-height: calc((13+2) / 13);
  font-weight: 500;
  margin-bottom: 16px;
`;

const UsualLogin = styled.button`
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
`;

const Icon = styled.img`
  vertical-align: baseline;
  margin-top: -0.3em;
  margin-bottom: -0.3em;
  margin-right: 0.3em;
  width: 18px;
  height: 18px;
`;

const Logo = styled(Icon)`
  width: 40px;
  height: 37px;
`;

const Card = styled.div`
  flex: 1 auto;
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  padding: 24px;
  margin-bottom: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 0;
  margin-right: 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 0 6px 0;
`;

const PwLabelReset = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  margin: 4px 4px 4px 0;
  cursor: pointer;
  font-size: 1.15384615rem;
  font-weight: 600;
  padding: 0 2px;
`;

const Input = styled.input`
  padding: 0.6em 0.7em;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  background-color: white;
  color: hsl(210, 8%, 5%);
  font-size: 13px;
`;

const P = styled.p`
  flex: 1 auto;
  text-align: center;
  font-size: 13px;
`;

const A = styled.a`
  text-decoration: none;
  color: hsl(206, 100%, 40%);
  cursor: pointer;
  user-select: auto;
  font-size: 12px;
`;

// const [isLogin, setIsLogin] = useState(false) 리덕스로 관리

const Login = () => {
  const id = useSelector(userIdSelector);
  const loggedIn = useSelector(isLoggedInSelector);
  console.log(id);
  console.log(loggedIn);
  const dispatch = useDispatch();
  // const userId = useSelector((state) => state.id);
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const loginRequestHandler = () => {
    if (!loginInfo.email || !loginInfo.password) {
      alert('Please check your email and password.'); //TODO: 추가 작업 필요
      return;
    }

    console.log(loginInfo);

    // Test
    // dispatch(setId(loginInfo.email));
    // dispatch(setIsLoggedin(true));
    // window.localStorage.setItem('email', loginInfo.email);

    return axios
      .post(url + '/users/login', loginInfo)
      .then((res) => {
        //res로 받아온 user정보와 jwt토큰을 redux와 로컬스토리지로 처리
        window.localStorage.setItem('email', res.data.body.email);
        window.localStorage.setItem(
          'jwtToken',
          res.data.body.tokenInfo.accessToken
        );
        dispatch(setId(res.data.body.email));
        dispatch(setToken(res.data.body.tokenInfo.accessToken));
        dispatch(setIsLoggedin(true));
      })
      .then((_) => {
        alert('Login success');
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        alert('로그인 실패');
      });
  };

  return (
    <Container>
      <P>
        <A href="url">
          <Logo src={logo} alt="SOFLogo.png"></Logo>
        </A>
      </P>

      <GitHubLogin>
        <Icon src={icon} alt="github.png" />
        Log in with Github
      </GitHubLogin>

      <Card>
        <Form onSubmit={(e) => e.preventDefault()}>
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="text"
              onChange={handleInputValue('email')}
            />
          </InputContainer>
          <InputContainer>
            <PwLabelReset>
              <Label htmlFor="password">Password</Label>
              <A href="url">Forgot password?</A>
            </PwLabelReset>
            <Input
              id="password"
              type="password"
              onChange={handleInputValue('password')}
            />
          </InputContainer>
          <InputContainer>
            <UsualLogin type="submit" onClick={loginRequestHandler}>
              {' '}
              Log in{' '}
            </UsualLogin>
          </InputContainer>
        </Form>
      </Card>

      <P>
        Don&apos;t have an account?{' '}
        <A
          onClick={() => {
            navigate('/signup');
          }}
        >
          Sign up
        </A>
      </P>
    </Container>
  );
};

export default Login;
