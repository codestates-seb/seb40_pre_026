import React, { useEffect } from 'react';
import styled from 'styled-components';

const RenderContain = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 180px;
  width: 80%;
  height: 100%;
  border-left: 1px solid lightgray;
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const RenderHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const RenderHomeHead = styled.h1`
  margin: 20px;
  font-weight: 400;
`;

const SearchBtn = styled.button`
  text-align: center;
  margin: 20px;
  padding: 10px;
  font-weight: 500;
  width: 110px;
  height: 37px;
  background-color: #0a95ff;
  color: #ffffff;
  font-size: 13px;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  cursor: pointer;
  /* user-select: none; */

  &:hover {
    background-color: hsl(205, 47%, 42%);
    font-size: 13px;
  }
`;

const RenderSubHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 20px;
`;
const LeftOptionBtn = styled.button`
  width: auto;
  height: 33px;
  background-color: white;
  border-radius: 5px 0 0 5px;
  color: black;
  font-size: 13px;
  border: solid 1px #545c62;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
  &:hover {
    background-color: #e3e6e8;
  }
  cursor: pointer;
  font-size: 13px;
`;
const RightOptionBtn = styled.button`
  width: auto;
  height: 33px;
  background-color: white;
  border-radius: 0 5px 5px 0;
  color: black;
  font-size: 13px;
  border: solid 1px #545c62;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
  &:hover {
    background-color: #e3e6e8;
  }
  cursor: pointer;
  font-size: 13px;
`;

const OptionBtn = styled.button`
  width: auto;
  height: 33px;
  background-color: white;
  color: black;
  font-size: 13px;
  border: solid 1px #545c62;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
  &:hover {
    background-color: #e3e6e8;
  }
  cursor: pointer;
  font-size: 13px;
`;
const MainRenderSpace = styled.div`
  margin: 20px 0 0 0;
`;
const MainRender = styled.div`
  font-size: 100px;
  margin: 90px 0;
`;
const LastComment = styled.div`
  text-align: start;
  margin: 30px;
  font-size: 17px;
`;
const RenderLeft = styled.div``;
const Votes = styled.div``;
const SmallText = styled.div``;
const RenderRight = styled.div``;
const QuestionHeader = styled.div``;
const QuestionContent = styled.div``;
const Tags = styled.div``;

const RenderPage = () => {
  //   const [userCount, setUserCount] = useEffect('');

  return (
    <RenderContain>
      <RightSide>
        {' '}
        <RenderHead>
          <RenderHomeHead>Top Questions</RenderHomeHead>
          <SearchBtn> Ask Question</SearchBtn>
        </RenderHead>
        <RenderSubHead>
          <LeftOptionBtn>interesting</LeftOptionBtn>
          <OptionBtn>Active</OptionBtn>
          <OptionBtn>Bountied</OptionBtn>
          <OptionBtn>Hot</OptionBtn>
          <OptionBtn>Week</OptionBtn>
          <RightOptionBtn>Month</RightOptionBtn>
        </RenderSubHead>
        <MainRenderSpace>
          <MainRender>
            <RenderLeft>
              <Votes>0 votes</Votes>
              <SmallText>0 answers</SmallText>
              <SmallText>2 views</SmallText>
            </RenderLeft>
            <RenderRight>
              <QuestionHeader>Question Header</QuestionHeader>
              <QuestionContent>Question Contents</QuestionContent>
              <Tags>Tags</Tags>
            </RenderRight>
          </MainRender>
          <LastComment>
            Looking for more? Browse the complete list of questions, or popular
            tags. Help us answer unanswered
            <br /> questions.
          </LastComment>
        </MainRenderSpace>
      </RightSide>
    </RenderContain>
  );
};

export default RenderPage;
