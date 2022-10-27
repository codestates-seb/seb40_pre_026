import { React, useState } from 'react';
import styled from 'styled-components';
import icon from '../image/github.png';
import logo from '../SOFLogo.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 288.45px;
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

const Login = () => {
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
        <Form action="api/url/" method="POST">
          <InputContainer>
            <Label for="email">Email</Label>
            <Input id="email" />
          </InputContainer>
          <InputContainer>
            <PwLabelReset>
              <Label for="password">Password</Label>
              <A href="url">Forgot password?</A>
            </PwLabelReset>
            <Input id="password" />
          </InputContainer>
          <InputContainer>
            <UsualLogin> Log in </UsualLogin>
          </InputContainer>
        </Form>
      </Card>

      <P>
        Don&apos;t have an account? <A href="url">Sign up</A>
      </P>
    </Container>
  );
};

export default Login;
