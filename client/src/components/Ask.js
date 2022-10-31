import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import stackoverflow_logo from '../image/logo-stackoverflow.png';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import url from '../url';
import useInput from './useInput';
import axios from 'axios';
import '@toast-ui/editor/dist/toastui-editor.css';
import {
  userIdSelector,
  isLoggedInSelector,
  jwtTokenSelector,
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
  margin: 100px 0px 40px 220px;
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

const ReviewBtn = styled.button`
  margin: 40px 0px 40px 220px;
  width: 150px;
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

const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 100px;
  padding: 40px 40px 0px 40px;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid hsl(210, 8%, 85%);
  border-radius: 10px;
  width: 500px;
  height: 500px;
  z-index: 2;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);

  .list {
    list-style: none;
  }
  .listNumber {
    font-weight: bold;
    color: #0074cc;
  }
  .infoHeader {
    font-weight: bold;
    font-size: 30px;
  }
  .searchsite {
    color: #0074cc;
  }
`;
const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1833px;
  height: 1020px;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;

  background-color: rgba(0, 0, 0, 0.5);
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

const NoBtn = styled.button`
  margin: 20px;
  width: 300px;
  height: 50px;
  background-color: transparent;
  border: none;
  color: #0074cc;
  &:hover {
    color: hsl(206, 93%, 83.5%);
  }
`;

const Ask = () => {
  // const [bodyValue, bodyBind, bodyReset] = useInput('');
  // const [tagsValue, tagsBind, tagsReset] = useInput('');
  // const onChange = () => {
  //   setText(data);
  // };

  const jwtToken = useSelector(jwtTokenSelector);
  const email = useSelector(userIdSelector);
  const [titleValue, titleBind] = useInput('');
  const [tagList, setTagList] = useState([]);
  const editorRef = useRef();
  const [modalOn, setModalOn] = useState(true);

  const closeModal = () => {
    setModalOn(false);
  };

  const submit = () => {
    const data = editorRef.current?.getInstance().getHTML(); // getHTML or getMarkdown

    if (titleValue === '' || data === '<p><br></p>') {
      alert('Title and body field required.');
      return;
    }

    if (jwtToken === -1 || email === -1) return;

    axios
      .post(
        url + '/questions/register',
        { email: email, title: titleValue, content: data, tags: tagList },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then((_) => alert('Your question was successfully submitted!'));
  };

  // tagsInput에 태그 입력 후 쉼표 입력
  // 이때 쉼표 앞의 글자가 태그 컴포넌트로 변환되어 tagsInput 아래나 위에 추가됨
  // 목록.map()

  return (
    <AskContainer>
      <Head>
        Ask a public question
        <FlowLogo src={stackoverflow_logo} alt="logo"></FlowLogo>
      </Head>

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

        {modalOn ? (
          <ModalBackdrop onClick={closeModal}>
            <Modal>
              <span className="infoHeader">Asking a good question</span>
              <br />
              <br />
              <span>
                You&apos;re ready to ask your first programming-related question
                and the community is here to help! To get you the best answers,
                we&apos;ve provided some guidance
              </span>
              <br />
              <br />
              <span>
                Before you post,{' '}
                <span className="searchsite">search the site </span>to make sure
                your question hasn&apos;t been answered
              </span>
              <li className="list">
                <ul>
                  <span className="listNumber">1.</span>Summarize the problem
                </ul>
                <ul>
                  <span className="listNumber">2.</span>Describe what
                  you&apos;ve tried
                </ul>
                <ul>
                  <span className="listNumber">3.</span>When appropriate, show
                  some code
                </ul>
              </li>
              <span>You&apos;ll find more tips in the sidebar</span>
              <BtnContain>
                <WritingBtn onClick={closeModal}>Start Writing</WritingBtn>
              </BtnContain>
            </Modal>
          </ModalBackdrop>
        ) : null}
        <Body>
          <span className="boldtitle">body</span>
          <br></br>
          <span>
            include all the information someone would need to answer you
            question
          </span>
          <Editor
            initialValue="<strong>hi</strong>" // 초기 입력값
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
        {/* <TagsInput
          type="text"
          placeholder="e.g (node.js vba android)"
          {...tagsBind}
        ></TagsInput> */}
        <Tag tagList={tagList} setTagList={setTagList} />
      </TextContainer>
      <ReviewBtn
        onClick={() => {
          submit();
        }}
      >
        Review your question
      </ReviewBtn>
    </AskContainer>
  );
};

export default Ask;
