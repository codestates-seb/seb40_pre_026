import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const RenderContain = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 72px;
  margin-left: 190px;
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
  color: #838c95;
  font-size: 13px;
  border: solid 1px #838c95;
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
  color: #838c95;
  font-size: 13px;
  border: solid 1px #838c95;
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
  color: #838c95;
  font-size: 13px;
  border: solid 1px #838c95;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
  &:hover {
    background-color: #e3e6e8;
  }
  cursor: pointer;
  font-size: 13px;
`;
const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgray;
  margin-bottom: -20px;
`;
const MainRenderSpace = styled.div`
  margin: 20px 0 0 0;
`;
const MainRender = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LastComment = styled.div`
  text-align: start;
  margin: 30px;
  font-size: 17px;
`;
const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px 0 40px 0;
  border-bottom: 1px solid lightgray;
  /* margin: 10px 0; */
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

const TagAndUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TagContain = styled.div`
  display: flex;
  flex-direction: row;
`;
const Tags = styled.button`
  margin: 8px 5px 5px 0px;
  width: auto;
  border-radius: 3px;
  height: 20px;
  background-color: #e3e6e8;
  color: black;
  font-size: 13px;
  border: none;

  &:hover {
    background-color: #d0e2f0;
  }
  cursor: pointer;
  font-size: 13px;
`;

const User = styled.div`
  font-size: 15px;
  margin-right: 10px;
  color: gray;

  .user {
    margin-right: 10px;
  }
`;

const RenderPage = ({ modalCloseHandler }) => {
  const navigate = useNavigate();
  //   const [userCount, setUserCount] = useEffect('');

  // 더미 데이터 (삭제 예정)
  const dummyData = {
    status: 'OK',
    data: [
      {
        questionI: 1,
        user: {
          created_at: '2022-11-01T13:57:50.315993',
          updated_at: '2022-11-01T13:53:30.315993',
          userI: 1,
          nickName: 'dsaf',
          email: 'chlrh',
        },
        title: '제목 : 26하조 ',
        content: '내용 들어갈 자리',
        totalLike: 0,
        totalViewed: 0,
        totalAnswers: 0,
        created_at: '2022-10-27T14:48:47.484629',
        updated_at: '2022-10-27T14:48:47.484629',
        tags: ['javascript', 'java', 'spring'],
      },
      {
        questionI: 2,
        user: {
          created_at: '2022-10-27T14:48:44.315993',
          updated_at: '2022-10-27T14:48:44.315993',
          userI: 1,
          nickName: 'dsaf',
          email: 'chlrh',
        },
        title: '제목 : 26하조 ',
        content: '내용 들어갈 자리',
        totalLike: 0,
        totalViewed: 0,
        totalAnswers: 0,
        created_at: '2022-10-27T14:48:48.202426',
        updated_at: '2022-10-27T14:48:48.202426',
        tags: ['javascript', 'java', 'spring'],
      },
    ],
  };

  function Timediff(writtenTime) {
    // const writtenTime = )new Date(dummyData.data[0].user.created_at;
    const now = new Date();
    let time = now.getTime() - writtenTime.getTime();
    let unit = '';
    if (parseInt(time / 1000) < 60) {
      return parseInt(time / 1000) + ' secs';
    } else if (parseInt(time / (1000 * 60)) < 60) {
      return parseInt(time / (1000 * 60)) + ' mins';
    } else if (parseInt(time / (1000 * 60 * 60)) < 60) {
      return parseInt(time / (1000 * 60 * 60)) + ' hours';
    }
  }

  return (
    <RenderContain onClick={modalCloseHandler}>
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
        <Line />
        <MainRenderSpace>
          <MainRender>
            {dummyData.data.map((question, idx) => {
              return (
                <ContentsBox key={idx}>
                  <RenderLeft>
                    <Votes>{question.totalLike} votes</Votes>
                    <SmallText>{question.totalAnswers} answers</SmallText>
                    <SmallText>{question.totalViewed} views</SmallText>
                  </RenderLeft>
                  <RenderRight>
                    <QuestionHeader
                      onClick={(e) =>
                        navigate(`/AnswerTheQuestions?q=${question.questionI}`)
                      }
                    >
                      {question.title}
                    </QuestionHeader>
                    <QuestionContent>{question.content}</QuestionContent>
                    <TagAndUser>
                      <TagContain>
                        {question.tags &&
                          question.tags.map((x, idx) => (
                            <Tags key={idx}>{x}</Tags>
                          ))}
                      </TagContain>
                      <User>
                        <span className="user">{question.user.nickName}</span>
                        <span className="user">
                          asked{' '}
                          {Timediff(
                            new Date(dummyData.data[0].user.created_at)
                          )}{' '}
                          ago
                        </span>
                      </User>
                    </TagAndUser>
                  </RenderRight>
                </ContentsBox>
              );
            })}
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
