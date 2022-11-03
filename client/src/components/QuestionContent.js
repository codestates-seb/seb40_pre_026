import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userIdSelector, jwtTokenSelector } from '../redux/hooks';
import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { BasicButton, MyQuestionButton } from './BasicButton';
import axios from 'axios';
import { url } from '../url';

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
  margin: 20px 0;
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
  margin-bottom: 40px;
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

const AnswerContents = styled.div`
  font-size: 14px;
  width: 100%;
  word-break: keep-all;
  border-bottom: 1px solid lightgray;
  margin: 15px 0;
`;

const RenderHomeHead = styled.h1`
  font-weight: 400;
`;

const MainQuestions = ({ questionI }) => {
  const [text, setText] = useState('');
  const [qData, setQData] = useState();
  const [email, setEmail] = useState('');
  const editorRef = React.createRef();
  const jwtToken = useSelector(jwtTokenSelector);
  const emailId = useSelector(userIdSelector);

  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML(); // getHTML or getMarkdown
    setText(data);
    console.log(text);
  };

  const header = {
    headers: {
      'ngrok-skip-browser-warning': 'skip',
    },
  };

  const getQuestion = async () => {
    await axios
      .get(url + `/questions/${questionI}`, header)
      .then((res) => {
        setQData([res.data.body]);
        setEmail(res.data.body.question.user.email);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log('useEffect');
    getQuestion();
    console.log('질문하나 조회' + qData);
  }, []);

  //위에는 txt editor 용 복붙파일

  //todo - RenderSub contents 들 데이터 값 받아서 render 할 수 있도록 map 돌리기.
  const submit = async () => {
    const data = editorRef.current?.getInstance().getHTML(); // getHTML or getMarkdown
    console.log(data);
    // console.log(data);
    if (data === '<p><br></p>') {
      // <p> <br /> </p>
      alert('body field required.');
      return;
    }

    if (jwtToken === -1 || emailId === -1)
      return alert('로그인 후 이용해주세요.');

    await axios
      .post(
        url + `/questions/${questionI}/answers`,
        { email: 'qqq@naver.com', content: data },
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxcXFAbmF2ZXIuY29tIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTY2NzQ1MjYyMX0.YgT4yxRN7MLylYteEIbl3QM6S_GVpJoPEXmnJdcRVqP7UF523w7sSfhtxOAHb_P1vU_7QpM7ezrktCsFp5rlmw',
          },
        }
      )
      .then((_) => alert('Your Answer was successfully submitted!'));
    getQuestion();
  };

  return (
    <QuestionContain>
      {qData &&
        qData.map((x, idx) => {
          return (
            <>
              <RenderHead key={idx}>
                <QuestionTitle>{x.question.title}</QuestionTitle>
                <SearchBtn> Ask Question</SearchBtn>
              </RenderHead>
              <RenderSubHead>
                {/* <RenderSubTxt>Asked</RenderSubTxt>
                <RenderSubData>{x.question.created_at}</RenderSubData>
                <RenderSubTxt>Modified</RenderSubTxt>
                <RenderSubData>{x.question.updated_at}</RenderSubData> */}
                {/* <RenderSubTxt>Viewed</RenderSubTxt>
                <RenderSubData>{x.question.totalViewed} times</RenderSubData> */}
              </RenderSubHead>
              <Line />
              <QuestionContent
                key={x}
                dangerouslySetInnerHTML={{ __html: x.question.content }}
              ></QuestionContent>
              <TagContain>
                {/* {console.log(qData.question.tags)}
    {qData.question.tags &&
      qData.question.tags.map((tag, idx) => {
        console.log('a');
        return <Tags key={idx}>{tag}</Tags>;
      })} */}
              </TagContain>
              {email !== emailId ? (
                <BasicButton />
              ) : (
                <MyQuestionButton
                  questionI={questionI}
                  email={email}
                  jwtToken={jwtToken}
                />
              )}
            </>
          );
        })}
      <ContentsLine />
      {/* <RenderHomeHead>{qData[0].answers.length} Answer</RenderHomeHead> */}
      {qData &&
        qData[0].answers.map((x, idx, array) => {
          return (
            <>
              {/* <RenderHomeHead>{array.length} Answer</RenderHomeHead> */}
              <AnswerContents
                key={x}
                dangerouslySetInnerHTML={{ __html: x.content }}
              ></AnswerContents>
            </>
          );
        })}
      <QuestionTitle>Your Answer</QuestionTitle>
      <Editor
        initialValue="Input here" // 초기 입력값
        previewStyle="vertical" // vertical로 설정시 미리보기 화면 분할가능
        height="300px"
        initialEditType="markdown" // markdown or wysiwyg
        ref={editorRef}
        onChange={onChange}
      />
      <PostBtn onClick={submit}> Post Your Answer</PostBtn>
    </QuestionContain>
  );
};

export default MainQuestions;
