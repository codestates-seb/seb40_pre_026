import { React, useState, useRef } from 'react';
import styled from 'styled-components';

export const TagsInput = styled.div`
  margin: 10px 3px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 32px;
  width: 650px;
  padding: 0 8px;
  border: solid 1px hsl(210, 8%, 85%);
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: hsl(206, 90%, 69.5%);
    box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
  }
  .list {
    list-style: none;
  }

  /* margin-top: 10px;
  padding: 10px;
  height: 32px;
  width: 650px;
  border-radius: 5px;
  border: solid 1px hsl(210, 8%, 85%);
  &:focus {
    outline: none;
    border-color: hsl(206, 90%, 69.5%);
    box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
  } */

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: hsl(205, 47%, 42%);
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 6px;
      margin: 0 8px 8px 0;
      background: hsl(210, 8%, 85%);
      background-color: hsl(205, 46%, 92%);
      > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 13px;
        font-weight: 700;
        padding-top: 0.8px;
        margin-left: 8px;
        color: hsl(205, 47%, 42%);
        background-color: transparent;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
      }
      > span {
        color: black;
      }
    }
  }

  > input {
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;

    :focus {
      outline: transparent;
    }
  }

  &:focus-within {
    border: 1px solid black;
  }
`;

const Tag = ({ tagList, setTagList }) => {
  // const [tags, setTags] = useState([]);
  const removeTags = (indexToRemove) => {
    setTagList(tagList.filter((_, index) => index !== indexToRemove));
  };

  const addTags = (event) => {
    const filtered = tagList.filter((el) => el === event.target.value);
    if (event.target.value !== '' && filtered.length === 0) {
      setTagList([...tagList, event.target.value]);
      // selectedTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };

  return (
    <>
      <TagsInput>
        <ul>
          {tagList.map((tag, index) => (
            <li className="tag" key={index}>
              <span>{tag}</span>
              <span
                className="tag-close-icon"
                onClick={() => removeTags(index)}
                onKeyPress={() => {}}
                role="presentation"
              >
                &times;
              </span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
          placeholder="Press enter to add tags"
        />
      </TagsInput>
    </>
  );
};

export default Tag;
