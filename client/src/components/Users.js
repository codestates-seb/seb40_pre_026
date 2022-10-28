import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Login from './Login';
import Logout from './Logout';
import Signup from './Signup';

const Background = styled.div`
  background-color: rgb(239, 240, 242);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
`;

// 컴포넌트 전환용 더미버튼
const Switch = styled.button`
  position: fixed;
  font-size: 20px;
  top: 0px;
  width: 100px;
  height: 50px;
  background-color: hsl(206, 100%, 52%);
`;

const Users = () => {
  // 컴포넌트 전환용 객체
  const UserComponents = {
    0: <Signup />,
    1: <Login />,
    2: <Logout />,
  };

  // 컴포넌트 전환용 state
  const [pointer, setPointer] = useState(0);
  const setPointerHandler = () => {
    const newPointer = (pointer + 1) % 3;
    setPointer(newPointer);
  };

  return (
    <Background>
      <Switch
        onClick={() => {
          setPointerHandler();
        }}
      >
        Switch!
      </Switch>
      {UserComponents[pointer]}
    </Background>
  );
};

export default Users;
