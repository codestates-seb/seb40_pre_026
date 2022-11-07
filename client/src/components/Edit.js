import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import stackoverflow_logo from '../image/logo-stackoverflow.png';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import { url } from '../url';
import useInput from './useInput';
import axios from 'axios';
import '@toast-ui/editor/dist/toastui-editor.css';
import {
  jwtTokenSelector,
  userIdSelector,
  questionTitleSelector,
  questionContentSelector,
  questionTagsSelector,
} from '../redux/hooks';
import { useSelector } from 'react-redux';
import Tag from './Tag';

const AskContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-color: solid 1px black;
  background-color: hsl(210, 8%, 95%);
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  box-sizing: border-box;
  margin: 10px 0px 40px 220px;
  padding: 0px 120px 0px 0px;
  width: 80%;
  height: 60px;
  border: 1px solid black none;
  color: black;
  font-size: 30px;
`;

const FlowLogo = styled.img`
  margin: 10px;
  padding: 6px 12px;
  width: 300px;
  height: 100px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  margin: 0px 220px;
  padding: 15px;
  width: 730px;
  height: 700px;
  border: 1px solid hsl(210, 8%, 85%);
  background-color: white;
`;

const Title = styled.div`
  .boldtitle {
    font-weight: bold;
    font-size: 18px;
  }
`;

const TitleInput = styled.input`
  margin-top: 10px;
  padding: 10px;
  height: 32px;
  width: 650px;
  border-radius: 5px;
  border: solid 1px hsl(210, 8%, 85%);

  &:focus {
    outline: none;
    border-color: hsl(206, 90%, 69.5%);
    box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
  }
`;

const Body = styled.div`
  margin-top: 10px;
  .boldtitle {
    font-weight: bold;
    font-size: 18px;
  }
`;

const Tags = styled.div`
  margin-top: 10px;
  .boldtitle {
    font-weight: bold;
    font-size: 18px;
  }
`;

const TagsInput = styled.input`
  margin-top: 10px;
  padding: 10px;
  height: 32px;
  width: 650px;
  border-radius: 5px;
  border: solid 1px hsl(210, 8%, 85%);
  &:focus {
    outline: none;
    border-color: hsl(206, 90%, 69.5%);
    box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
  }
`;

const SaveBtn = styled.button`
  margin: 40px 0px 40px 220px;
  width: 100px;
  height: 40px;
  background-color: #0a95ff;
  color: #ffffff;
  font-size: 13px;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  cursor: pointer;
  &:hover {
    background-color: hsl(205, 47%, 42%);
    font-size: 13px;
  }
`;

const BtnContain = styled.div`
  display: flex;
  flex-direction: row;
`;

const WritingBtn = styled.button`
  margin: 20px;
  width: 150px;
  height: 50px;
  background-color: #0a95ff;
  color: #ffffff;
  font-size: 13px;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  cursor: pointer;
  &:hover {
    background-color: hsl(205, 47%, 42%);
    font-size: 13px;
    &:focus {
      outline: none;
      box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
    }
  }
`;

const CancelBtn = styled.button`
  margin: 40px 0px 40px 30px;
  width: 100px;
  height: 40px;
  background-color: transparent;
  color: #0a95ff;
  font-size: 13px;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  cursor: pointer;
  &:hover {
    background-color: skyblue;
    font-size: 13px;
  }
`;

const Contain = styled.div`
  display: flex;
  flex-direction: row;
`;

const Edit = ({ questionI }) => {
  const navigate = useNavigate();
  console.log('Edit');
  const jwtToken = useSelector(jwtTokenSelector);
  const emailId = useSelector(userIdSelector);
  const title = useSelector(questionTitleSelector);
  const content = useSelector(questionContentSelector);
  const tags = useSelector(questionTagsSelector);

  const [titleValue, titleBind] = useInput(title);
  const [contentValue, contentBind] = useInput(content);
  const [tagList, setTagList] = useState(tags);
  const editorRef = useRef();

  const data = editorRef.current?.getInstance().getHTML(); // getHTML or getMarkdown

  const submit = async (questionI) => {
    console.log(questionI);
    if (titleValue === '' || data === '<p><br></p>') {
      alert('Title and body field required.');
      return;
    }

    if (jwtToken === -1 || emailId === -1) {
      alert('edits failed');
      return;
    }

    await axios
      .patch(
        url + `/questions/${questionI}`,
        { email: emailId, title: titleValue, content: data, tags: tagList },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then((_) => alert('Your question was successfully revised!'))
      .then(navigate(`/AnswerTheQuestions?q=${questionI}`));
  };

  // tagsInput에 태그 입력 후 쉼표 입력
  // 이때 쉼표 앞의 글자가 태그 컴포넌트로 변환되어 tagsInput 아래나 위에 추가됨
  // 목록.map()

  return (
    <AskContainer>
      <Head></Head>
      <TextContainer>
        <Title>
          <span className="boldtitle">Title</span>
          <br></br>
          <span>
            Be specific and imagine you&apos;re asking a question to another
            person
          </span>
          <br></br>
          <TitleInput
            type="text"
            placeholder="e.g. is there an R function for finding the index of an element in a vector?"
            {...titleBind}
          ></TitleInput>
        </Title>
        <Body>
          <span className="boldtitle">body</span>
          <br></br>
          <span>
            include all the information someone would need to answer you
            question
          </span>
          <Editor
            initialValue={content} // 초기 입력값
            previewStyle="vertical" // vertical로 설정시 미리보기 화면 분할가능
            height="300px"
            initialEditType="markdown" // markdown or wysiwyg
            ref={editorRef}
          />
        </Body>
        <Tags>
          <span className="boldtitle">Tags</span>
          <br></br>
          Add up to 5 tags to describe what your question is about
        </Tags>
        <Tag tagList={tagList} setTagList={setTagList} />
      </TextContainer>
      <Contain>
        <SaveBtn onClick={() => submit(questionI)}>Save edits</SaveBtn>
        <CancelBtn>Cancel</CancelBtn>
      </Contain>
    </AskContainer>
  );
};

export default Edit;
