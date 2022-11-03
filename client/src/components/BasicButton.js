import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { url } from '../url';
import { useNavigate } from 'react-router-dom';

const ButtonContain = styled.div`
  button {
    all: unset;
    font-size: 15px;
    margin-right: 5px;
    padding: 10px;
    &:hover {
      background-color: lightgray;
      cursor: pointer;
      border-radius: 15px;
      padding: 10px;
    }
  }
`;

export const BasicButton = () => {
  return (
    <ButtonContain>
      {/* <button>Share</button> */}
      <button>Edit</button>
      <button>Follow</button>
    </ButtonContain>
  );
};

export const MyQuestionButton = ({ questionI, email, jwtToken }) => {
  const navigate = useNavigate();
  const deleteContent = (questionI, email, jwtToken) => {
    axios
      .delete(
        url + `/questions/${questionI}`,
        {
          data: {
            email: email,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then((_) => {
        alert('Your question was deleted');
        navigate('/');
      });
    // console.log(questionI);
  };

  return (
    <ButtonContain>
      {/* <button>Share</button> */}
      <button>Edit</button>
      <button
        onClick={() => {
          deleteContent(questionI, email, jwtToken);
        }}
      >
        Delete
      </button>
    </ButtonContain>
  );
};
