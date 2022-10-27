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
  margin: 20px 0 20px 20px;
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
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;

const TotalQuestions = styled.div``;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;

const SmallButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

const SmallNumb = styled.div`
  font-size: 11px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  width: 30px;
  margin: 0 0 0 3px;
  color: white;
  background-color: #0074cc;
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
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
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

const FilterBtn = styled.button`
  margin: 0 20px 0 20px;
  width: auto;
  border-radius: 5px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const PageNation = styled.div`
  text-align: start;
  margin: 30px;
  font-size: 17px;
`;
const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgray;
`;
const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;
  margin: 20px 10px 20px 0;
`;
const RenderLeft = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  margin-right: 10px;
  width: 150px;
  height: auto;
  margin-top: 3px;
`;
const Votes = styled.div`
  margin: 3px 0;
  font-size: 12px;
`;
const SmallText = styled.div`
  margin: 3px 0;
  font-size: 12px;
  color: gray;
`;
const RenderRight = styled.div`
  margin-left: 10px;
  width: 100%;
  height: auto;
  text-align: start;
`;
const QuestionHeader = styled.div`
  font-size: large;
  color: #1774cb;
  margin-bottom: 5px;
  &:hover {
    color: #0a95ff;
  }
`;
const QuestionContent = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

const TagContain = styled.div`
  display: flex;
  flex-direction: row;
`;
const Tags = styled.button`
  margin: 8px 20px 20px 0px;
  width: auto;
  border-radius: 5px;
  height: 20px;
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
const BottomContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const QuestionRenderPage = () => {
  //   const [userCount, setUserCount] = useEffect('');

  return (
    <RenderContain>
      <RightSide>
        <RenderHead>
          <RenderHomeHead>All Questions</RenderHomeHead>
          <SearchBtn> Ask Question</SearchBtn>
        </RenderHead>
        <RenderSubHead>
          <TotalQuestions>questions length</TotalQuestions>
          <Buttons>
            <LeftOptionBtn>Newest</LeftOptionBtn>
            <OptionBtn>Active</OptionBtn>
            <SmallButtons>
              <OptionBtn>
                Bountied<SmallNumb>274</SmallNumb>
              </OptionBtn>
            </SmallButtons>
            <OptionBtn>Unanswered</OptionBtn>
            <RightOptionBtn>More</RightOptionBtn>
            <FilterBtn>Filter</FilterBtn>
          </Buttons>
        </RenderSubHead>
        <Line />
        <MainRenderSpace>
          <MainRender>
            <ContentsBox>
              <RenderLeft>
                <Votes>0 votes</Votes>
                <SmallText>0 answers</SmallText>
                <SmallText>2 views</SmallText>
              </RenderLeft>
              <RenderRight>
                <QuestionHeader>Question Header</QuestionHeader>
                <QuestionContent>Question Contents</QuestionContent>
                <TagContain>
                  <Tags>Tags</Tags>
                </TagContain>
              </RenderRight>
            </ContentsBox>
            <ContentsBox>
              <RenderLeft>
                <Votes>0 votes</Votes>
                <SmallText>0 answers</SmallText>
                <SmallText>2 views</SmallText>
              </RenderLeft>
              <RenderRight>
                <QuestionHeader>Question Header</QuestionHeader>
                <QuestionContent>Question Contents</QuestionContent>
                <TagContain>
                  <Tags>Tags</Tags>
                </TagContain>
              </RenderRight>
            </ContentsBox>{' '}
            <ContentsBox>
              <RenderLeft>
                <Votes>0 votes</Votes>
                <SmallText>0 answers</SmallText>
                <SmallText>2 views</SmallText>
              </RenderLeft>
              <RenderRight>
                <QuestionHeader>Question Header</QuestionHeader>
                <QuestionContent>Question Contents</QuestionContent>
                <TagContain>
                  <Tags>Tags</Tags>
                </TagContain>
              </RenderRight>
            </ContentsBox>
          </MainRender>
          <BottomContents>
            <PageNation>PageNation space</PageNation>
            <PageNation>PageNation space</PageNation>
          </BottomContents>
        </MainRenderSpace>
      </RightSide>
    </RenderContain>
  );
};

export default QuestionRenderPage;
