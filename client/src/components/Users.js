import React from 'react';
import styled from 'styled-components';
import Login from './Login';

const Background = styled.div`
  background-color: rgb(239, 240, 242);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
`;

const Users = () => {
  return (
    <Background>
      <Login />
    </Background>
  );
};

export default Users;
