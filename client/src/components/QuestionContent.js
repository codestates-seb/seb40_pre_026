import React, { useState } from 'react';
import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

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

const RenderHomeHead = styled.h1`
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
const MainQuestion = styled.div`
  font-size: 14px;
  width: 60%;
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

const MainQuestions = () => {
  const [text, setText] = useState('');
  const editorRef = React.createRef();
  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML(); // getHTML or getMarkdown
    setText(data);
    console.log(text);
  };
  return (
    <QuestionContain>
      {' '}
      <RenderHead>
        <RenderHomeHead>All Questions</RenderHomeHead>
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
      <MainQuestion>
        {`For a homework assignment, I am required to take a .txt file with
        1,000,000 integers and condense them into 100 sub-lists of 10,000
        integers and then sort 50 of those lists with 1 sorting algorithm and
        send 50 to another. I can't seem to find a way to split a list of lists
        ex.`}
        <br />
        <br />
        {`[[1, 2, 3] , [4, 7, 9] , [5, 1, 10] , [12, 19, 22]] To [[1, 2, 3] , [4,
        7, 9]] , [[5, 1, 10] , [12, 19, 22]]`}
        <br />
        <br />
        {`What is the easiest way to split them?`}
        <br />
        <br />
        {`I tried looping through the lists in sub-list and for each list,
        place it into a temp list until that has filled, then fill the second
        temp with the remainder. When I ran that, it placed each integer into
        that temp list and combined all lists into 1 instead of moving 50 lists
        separately.`}
      </MainQuestion>
      <TagContain>
        <Tags>JS Script</Tags>
      </TagContain>
      <RenderHomeHead>0 Answer</RenderHomeHead>
      <ContentsLine />
      <RenderHomeHead>Your Answer</RenderHomeHead>
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
