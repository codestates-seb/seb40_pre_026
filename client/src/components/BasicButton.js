import React, { useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import EditPage from '../pages/EditPage';

const ButtonContain = styled.div`
  margin-right: 10px;
  padding: 10px;
  background-color: transparent;
`;
const ButtonLink = styled(Link)`
  // all: unset;
  font-size: 15px;
  margin-right: 5px;
  padding: 10px;
  &:hover {
    background-color: lightgray;
    cursor: pointer;
    border-radius: 15px;
    padding: 10px;
  }
`;

const FollowBtn = styled.button`
  // all: unset;
  border: 0;
  outline: 0;
  background-color: white;
  font-size: 15px;
  margin-right: 5px;
  padding: 10px;

  &:hover {
    background-color: lightgray;
    cursor: pointer;
    border-radius: 15px;
    padding: 10px;
  }
`;

export const BasicButton = ({ questionI }) => {
  const navigate = useNavigate();
  const clicked = () => {
    navigate('/edit', { state: { questionI: questionI } });
  };

  return (
    <>
      <ButtonContain>
        <button onClick={clicked}>Edit</button>
        {/* <ButtonLink to={`/AnswerTheQuestions?q=${questionI}/edit`}>
          Edit
        </ButtonLink> */}
        <FollowBtn>Follow</FollowBtn>
      </ButtonContain>
    </>
  );
};

export const MyQuestionButton = ({ questionI }) => {
  const navigate = useNavigate();
  const clicked = () => {
    navigate('/edit', { state: { questionI: questionI } });
  };

  return (
    <ButtonContain>
      <button onClick={clicked}>Edit</button>
      {/* <ButtonLink to={`/AnswerTheQuestions?q=${questionI}/edit`}>
        Edit
      </ButtonLink> */}
      <button>Delete</button>
    </ButtonContain>
  );
};
