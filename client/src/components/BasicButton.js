import React from 'react';
import styled from 'styled-components';

const ButtonContain = styled.div`
  button {
    all: unset;
    font-size: 15px;
    margin-right: 5px;
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

export const MyQuestionButton = () => {
  return (
    <ButtonContain>
      {/* <button>Share</button> */}
      <button>Edit</button>
      <button>Delete</button>
    </ButtonContain>
  );
};
