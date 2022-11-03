import { React, useState } from 'react';
import styled from 'styled-components';
import icon from '../image/github.png';
import useInput from './useInput';
import axios from 'axios';
import { url } from '../url';

const SignUpContain = styled.div`
  /* margin-top: 100px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 200px;
`;

const LeftContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 48px 0 0;
  /* margin: 220px 48px 120px 0; */
`;

const ContainHeader = styled.h1`
  font-weight: 500;
`;

const ContainContents = styled.div`
  margin: 10px 0;
  font-size: medium;
`;

const MiniContents = styled.div`
  margin: 10px 0;
  font-size: smaller;
`;

const RightContain = styled.div`
  display: flex;
  flex-direction: column;
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
const Icon = styled.img`
  vertical-align: baseline;
  margin-top: -0.3em;
  margin-bottom: -0.3em;
  margin-right: 0.3em;
  width: 18px;
  height: 18px;
`;
const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  border: none;
  padding: 10px 20px 50px 20px;
  background-color: white;
  box-shadow: 0 10px 24px hsla(0, 0%, 0%, 0.05),
    0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1);
  margin-bottom: 16px;
`;

const SignUpHead = styled.div`
  font-size: medium;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 0.6em 0.7em;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  background-color: white;
  color: hsl(210, 8%, 5%);
  font-size: 13px;
  width: 100%;
`;

const InputInfo = styled.div`
  color: #6a737c;
  font-size: smaller;
`;

const UsualLogin = styled.button`
  position: relative;
  display: inline-block;
  padding: 0.8em;
  border: 1px solid transparent;
  border-radius: 3px;
  outline: none;
  font-family: inherit;
  font-weight: normal;
  line-height: calc((13+2) / 13);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  background-color: hsl(206, 100%, 52%);
  color: white;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  margin: 20px 0 20px 0;
  &:hover {
    background-color: hsl(209, 100%, 37.5%);
  }
`;

const DN = styled.div`
  margin: 10px 0;
`;
const EM = styled.div`
  margin: 10px 0;
`;
const PW = styled.div`
  margin: 10px 0;
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

const Signup = () => {
  const [nicknameValue, nicknameBind, nicknameReset] = useInput('');
  const [emailValue, emailBind, emailReset] = useInput('');
  const [passwordValue, passwordBind, passwordReset] = useInput('');

  const handleSumbit = () => {
    let emailRule =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

    if (emailRule.test(emailValue) === false) {
      alert(`${emailValue} is not a valid email address.`);
      return;
    }

    let passwordRule = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,}$/;

    if (passwordRule.test(passwordValue) === false) {
      alert(`Password should contain one or more of letters and numbers`);
      return;
    }

    const signupInfo = {
      nickName: nicknameValue,
      email: emailValue,
      password: passwordValue,
    };

    axios
      .post(url + '/users/sign', signupInfo)
      .then((res) => {
        console.log('Sign Up!');
        console.log(res.data);
        nicknameReset();
        emailReset();
        passwordReset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <SignUpContain>
      <LeftContain>
        <ContainHeader>Join the Stack Overflow community</ContainHeader>
        <ContainContents>Get unstuck - ask a question</ContainContents>
        <ContainContents>
          Unlock new privileges like voting and commenting
        </ContainContents>
        <ContainContents>
          Save your favorite tags, filters, and jobs
        </ContainContents>
        <ContainContents>Earn reputation and badges</ContainContents>
        <MiniContents>
          Collaborate and share knowledge with a private group for FREE.
          <br />
          Get Stack Overflow for Teams free for up to 50 users.
        </MiniContents>
      </LeftContain>
      <RightContain>
        <GitHubLogin>
          <Icon src={icon} alt="github.png" />
          Log in with Github
        </GitHubLogin>
        <SignUpBox>
          <DN>
            <SignUpHead htmlFor="DisplayName">Display name</SignUpHead>
            <Input id="DisplayName" type="text" {...nicknameBind} />
          </DN>
          <EM>
            {' '}
            <SignUpHead htmlFor="Email">Email</SignUpHead>
            <Input id="Email" type="text" {...emailBind} />
          </EM>
          <PW>
            {' '}
            <SignUpHead htmlFor="Password">Password</SignUpHead>
            <Input id="Password" type="password" {...passwordBind} />
          </PW>

          <InputInfo>
            Passwords must contain at least eight <br /> characters, including
            at least 1 letter and 1 <br /> number.
          </InputInfo>
          <UsualLogin onClick={() => handleSumbit()}>Sign up</UsualLogin>
          <InputInfo>
            By clicking “Sign up”, you agree to our terms of <br /> service,
            privacy policy and cookie policy
          </InputInfo>
        </SignUpBox>
        <P>
          Already have an account? <A href="url">Log in</A>
        </P>
      </RightContain>
    </SignUpContain>
  );
};

export default Signup;
