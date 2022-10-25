import React from 'react';
import styled from 'styled-components';
import icon from '../image/github.png';
import SignUp from './signup';

const SignUpContain = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LeftContain = styled.div`
  display: flex;
  flex-direction: column;
  margin: 220px 48px 120px 0;
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
  border-radius: 10px;
  border: none;
  padding: 10px 20px 50px 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
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

const SignUpPage = () => {
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
            <SignUpHead for="DisplayName">Display name</SignUpHead>
            <Input id="DisplayName" />
          </DN>
          <EM>
            {' '}
            <SignUpHead for="Email">Email</SignUpHead>
            <Input id="Email" />
          </EM>
          <PW>
            {' '}
            <SignUpHead for="Password">Password</SignUpHead>
            <Input id="Password" />
          </PW>

          <InputInfo>
            Passwords must contain at least eight <br /> characters, including
            at least 1 letter and 1 <br /> number.
          </InputInfo>
          <UsualLogin> Sign up</UsualLogin>
          <InputInfo>
            By clicking “Sign up”, you agree to our terms of <br /> service,
            privacy policy and cookie policy
          </InputInfo>
        </SignUpBox>
      </RightContain>
    </SignUpContain>
  );
};

export default SignUpPage;
