import React, { useState } from 'react';
import styled from 'styled-components';

const TagsContain = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  margin-left: 190px;
  padding-top: 72px;
`;

const TagsContents = styled.div`
  font-size: 100px;
`;

const TagsRender = () => {
  return (
    <TagsContain>
      <TagsContents>구현중</TagsContents>
    </TagsContain>
  );
};

export default TagsRender;
