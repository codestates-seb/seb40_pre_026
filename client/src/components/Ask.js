import React, { useState } from 'react';
import styled from 'styled-components';
import stackoverflow_logo from '../image/logo-stackoverflow.png';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

// new window.stacksEditor.StacksEditor(
//   document.querySelector('#editor-container'),
//   '*Your* **markdown** here',
//
// );

const AskContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-color: solid 1px black;
  background-color: hsl(210, 8%, 95%);
`;
// const HeadContain = styled.div`
//   display: flex;
//   flex-direction: row;
//   box-sizing: border-box;
//   width: 100%;
//   height: 100%;
// `;
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
  width: 600px;
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
  width: 600px;
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

const Ask = () => {
  const [text, setText] = useState('');
  const editorRef = React.createRef();
  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML(); // getHTML or getMarkdown
    setText(data);
    console.log(text);
  };
  //   new window.stacksEditor.StacksEditor(
  //     document.querySelector('#editor-container'),
  //     '*Your* **markdown** here',
  //     {}
  //   );
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
            initialValue="<strong>hi</strong>" // 초기 입력값
            previewStyle="vertical" // vertical로 설정시 미리보기 화면 분할가능
            height="300px"
            initialEditType="markdown" // markdown or wysiwyg
            ref={editorRef}
            onChange={onChange}
          />
        </Body>
        <Tags>
          <span className="boldtitle">Tags</span>
          <br></br>
          Add up to 5 tags to describe what your question is about
        </Tags>
        <TagsInput
          type="text"
          placeholder="e.g (node.js vba android)"
        ></TagsInput>
      </TextContainer>
      <ReviewBtn>Review your question</ReviewBtn>
    </AskContainer>
  );
};

export default Ask;
