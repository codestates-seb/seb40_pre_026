import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { BasicButton, MyQuestionButton } from './BasicButton';

const QuestionContain = styled.div`
  padding-top: 60px;
  margin-left: 190px;
  border-left: 1px solid lightgray;
  padding-left: 30px;
`;
const RenderHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const RenderSubHead = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -15px;
  margin-bottom: 50px;
`;

const RenderSubTxt = styled.div`
  color: #8a9198;
  margin-right: 5px;
`;
const RenderSubData = styled.div`
  margin-right: 15px;
`;

const QuestionTitle = styled.h1`
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
const PostBtn = styled.button`
  text-align: center;
  margin: 20px 0 20px 20px;
  padding: 10px;
  font-weight: 500;
  width: 150px;
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

const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgray;
  margin-top: -30px;
  margin-bottom: 20px;
`;
const ContentsLine = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgray;
`;
const QuestionContent = styled.div`
  font-size: 16px;
  width: 60%;
  margin-bottom: 20px;
  word-break: keep-all;
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

const MainQuestions = ({ questionI }) => {
  const [text, setText] = useState('');
  const editorRef = React.createRef();
  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML(); // getHTML or getMarkdown
    setText(data);
    console.log(text);
  };

  // 더미 데이터 (삭제 예정)
  const question = {
    status: 'OK',
    data: [
      {
        questionI: 1,
        user: {
          created_at: '2022-10-27T15:47:39.073703',
          updated_at: '2022-10-27T15:47:39.073703',
          userI: 1,
          nickName: 'dsaf',
          email: 'chlrh',
        },
        title: '제목 : 26하조',
        content: '내용 들어갈 자리',
        totalLike: 0,
        totalViewed: 0,
        totalAnswers: 0,
        created_at: '2022-10-27T15:47:43.986145',
        updated_at: '2022-10-27T15:47:43.986145',
        tags: ['javascript', 'java', 'spring'],
      },
    ],
  };

  // const header = {
  //   headers: {
  //     Authorization:
  //       'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGxyaEBuYXZlci5jb20iLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjY3Mjc4MzgzfQ.fhx2-AbwtG8-twi8JY5FQac_LHvuqxPgEtrQDp_JHg7NUnyyiQjhyvwmTITd2kRmcOT6jiQB56RPtZqIXP5rdw',
  //   },
  // };

  // useEffect(() => {
  //   async () => {
  //     await axios.get(url + `/question/${questionI}`, header).then((res) => setText(res.data) console.log(res.data))
  //   };
  // }, [questionI]);

  //위에는 txt editor 용 복붙파일

  return (
    <QuestionContain>
      {' '}
      <RenderHead>
        <QuestionTitle>{question.data[0].title}</QuestionTitle>
        <SearchBtn> Ask Question</SearchBtn>
      </RenderHead>
      <RenderSubHead>
        <RenderSubTxt>Asked</RenderSubTxt>
        <RenderSubData>Today</RenderSubData>
        <RenderSubTxt>Modified</RenderSubTxt>
        <RenderSubData>Today</RenderSubData>
        <RenderSubTxt>Viewed</RenderSubTxt>
        <RenderSubData>2 times</RenderSubData>
      </RenderSubHead>
      <Line />
      <QuestionContent>{question.data[0].content}</QuestionContent>
      <TagContain>
        {console.log(question.data[0].tags)}
        {question.data[0].tags &&
          question.data[0].tags.map((tag, idx) => {
            <Tags key={idx}>{tag}</Tags>;
          })}
      </TagContain>
      <BasicButton />
      <QuestionTitle>0 Answer</QuestionTitle>
      <ContentsLine />
      <QuestionTitle>Your Answer</QuestionTitle>
      <Editor
        initialValue="<strong>Testing</strong>" // 초기 입력값
        previewStyle="vertical" // vertical로 설정시 미리보기 화면 분할가능
        height="300px"
        initialEditType="markdown" // markdown or wysiwyg
        ref={editorRef}
        onChange={onChange}
      />
      <PostBtn> Post Your Answer</PostBtn>
    </QuestionContain>
  );
};

export default MainQuestions;
