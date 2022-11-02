import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Buttons,
  LeftOptionBtn,
  OptionBtn,
  RightOptionBtn,
} from './QuestionsRender';

const TagsContain = styled.div`
  padding-top: 72px;
  display: flex;
  flex-direction: row;
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
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
const RenderSubHead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;
const Title = styled.h1`
  margin: 20px;
  font-weight: 400;
`;
const DescriptionContainer = styled(Title)`
  font-size: 17px;
`;
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 280px;
  border: 1px solid lightgray;
  margin-bottom: 20px;
  padding: 15px;
  font-size: 13px;
  border-radius: 3px;
`;

const Tagname = styled.span`
  background-color: hsl(205, 56%, 90%);
  color: hsl(205, 56%, 26%);
  padding: 3px;
  border-radius: 3px;
`;

const Explanation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: gray;
  font-size: 11px;
`;

const Description = () => (
  <DescriptionContainer>
    <article>
      A tag is a keyword or label that categorizes your question with other,
      similar questions. <br />
      Using the right tags makes it easier for others to find and answer your
      question.
    </article>
  </DescriptionContainer>
);

const TagsRender = () => {
  return (
    <TagsContain>
      <RightSide>
        <Header>
          <Title> Tags </Title>
          <Description />
        </Header>
        <RenderSubHead>
          <input placeholder="Filter by tag name" />
          <Buttons>
            <LeftOptionBtn>Popular</LeftOptionBtn>
            <OptionBtn>Name</OptionBtn>
            <RightOptionBtn>New</RightOptionBtn>
          </Buttons>
        </RenderSubHead>
        <CardContainer>
          {dummyData.map((each, i) => (
            <Card key={i}>
              <Tagname>&nbsp;{each.title}&nbsp;</Tagname>
              <p>{each.desc}</p>
              <Explanation>
                <div>
                  <p>
                    {each.total}
                    <br />
                    questions
                  </p>
                </div>
                <div>
                  <p>
                    {each.today} asked today
                    <br />
                    {each.week} this week
                  </p>
                </div>
              </Explanation>
            </Card>
          ))}
        </CardContainer>
      </RightSide>
    </TagsContain>
  );
};

const dummyData = [
  {
    title: 'javascript',
    desc: 'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in',
    total: '2441415',
    today: '682',
    week: '4060',
  },
  {
    title: 'python',
    desc: 'Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn',
    total: '2050494',
    today: '997',
    week: '6271',
  },
  {
    title: 'java',
    desc: `Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself`,
    total: '1872659',
    today: '364',
    week: '2098',
  },
  {
    title: 'c#',
    desc: `C# (pronounced "see sharp") is a high level, statically typed, multi-paradigm programming language developed by Microsoft. C# code`,
    total: '1565805',
    today: '282',
    week: '1665',
  },
  {
    title: 'javascript',
    desc: 'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in',
    total: '2441415',
    today: '682',
    week: '4060',
  },
  {
    title: 'python',
    desc: 'Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn',
    total: '2050494',
    today: '997',
    week: '6271',
  },
  {
    title: 'java',
    desc: `Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself`,
    total: '1872659',
    today: '364',
    week: '2098',
  },
  {
    title: 'c#',
    desc: `C# (pronounced "see sharp") is a high level, statically typed, multi-paradigm programming language developed by Microsoft. C# code`,
    total: '1565805',
    today: '282',
    week: '1665',
  },
  {
    title: 'javascript',
    desc: 'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in',
    total: '2441415',
    today: '682',
    week: '4060',
  },
  {
    title: 'python',
    desc: 'Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn',
    total: '2050494',
    today: '997',
    week: '6271',
  },
  {
    title: 'java',
    desc: `Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself`,
    total: '1872659',
    today: '364',
    week: '2098',
  },
  {
    title: 'c#',
    desc: `C# (pronounced "see sharp") is a high level, statically typed, multi-paradigm programming language developed by Microsoft. C# code`,
    total: '1565805',
    today: '282',
    week: '1665',
  },
  {
    title: 'javascript',
    desc: 'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in',
    total: '2441415',
    today: '682',
    week: '4060',
  },
  {
    title: 'python',
    desc: 'Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn',
    total: '2050494',
    today: '997',
    week: '6271',
  },
  {
    title: 'java',
    desc: `Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself`,
    total: '1872659',
    today: '364',
    week: '2098',
  },
  {
    title: 'c#',
    desc: `C# (pronounced "see sharp") is a high level, statically typed, multi-paradigm programming language developed by Microsoft. C# code`,
    total: '1565805',
    today: '282',
    week: '1665',
  },
  {
    title: 'javascript',
    desc: 'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in',
    total: '2441415',
    today: '682',
    week: '4060',
  },
  {
    title: 'python',
    desc: 'Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn',
    total: '2050494',
    today: '997',
    week: '6271',
  },
  {
    title: 'java',
    desc: `Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself`,
    total: '1872659',
    today: '364',
    week: '2098',
  },
  {
    title: 'c#',
    desc: `C# (pronounced "see sharp") is a high level, statically typed, multi-paradigm programming language developed by Microsoft. C# code`,
    total: '1565805',
    today: '282',
    week: '1665',
  },
];

export default TagsRender;
