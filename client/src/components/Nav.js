import React, { useState } from 'react';
import styled from 'styled-components';
import stackoverflow_logo from '../image/logo-stackoverflow.png';
import MagnifyingGlass from '../image/magnifyingGlass.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faInbox,
  faCircleQuestion,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import {
  setId,
  setIsLoggedin,
  setToken,
  setSearchKeyword,
} from '../redux/userSlice';
import {
  userIdSelector,
  isLoggedInSelector,
  jwtTokenSelector,
} from '../redux/hooks';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import url from '../url';

const NavContainer = styled.div`
  /* box-sizing: border-box; */
  position: fixed;
  margin: 0px;
  width: 100%;
  display: flex;
  height: 58px;
  background-color: hsl(210, 8%, 97.5%);
  border-top: solid 3px hsl(27, 90%, 55%);
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);
`;

const NavBoxCotain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const FlowLogo = styled.img`
  margin: 10px;
  padding: 6px 12px;
  width: 150px;
  height: 41px;
  &:hover {
    background-color: hsl(210, 8%, 90%);
    height: 43px;
  }
  cursor: pointer;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const AboutBtn = styled.button`
  margin: 2px 7px 2px 5px;
  padding: 3px 3px;
  width: 50px;
  height: 43px;
  border-radius: 1000px;
  border: none;
  color: #525960;
  background-color: hsl(210, 8%, 97.5%);
  &:hover {
    background-color: hsl(210, 8%, 90%);
    border-radius: 1000;
  }
  cursor: pointer;
  font-size: 13px;
`;

const ProductsBtn = styled.button`
  margin: 2px 0px 2px 2px;
  padding: 3px 3px;
  width: 65px;
  height: 43px;
  border-radius: 1000px;
  border: none;
  color: #525960;
  background-color: hsl(210, 8%, 97.5%);
  &:hover {
    background-color: hsl(210, 8%, 90%);
  }
  cursor: pointer;
  font-size: 13px;
`;

const ForTeamsBtn = styled.button`
  margin: 2px -10px 2px 2px;
  padding: 3px 3px;
  width: 90px;
  height: 43px;
  border-radius: 1000px;
  border: none;
  color: #525960;
  background-color: hsl(210, 8%, 97.5%);
  &:hover {
    background-color: hsl(210, 8%, 90%);
  }
  cursor: pointer;
  font-size: 13px;
`;

const SearchContainer = styled.div`
  width: 710px;
  height: 32px;
  position: relative;
  border: 0;
  img {
    margin-right: 30px;
    position: absolute;
    width: 25px;
    height: 25px;
    left: 15px;
    top: 5px;
  }
`;
const SearchInput = styled.input`
  box-sizing: border-box;
  margin: 0px 10px;
  padding: 7.8px 9.1px 7.8px 32px;
  height: 32px;
  width: 700px;
  border-radius: 5px;
  border-top: solid 3px hsl(210, 8%, 55%);
  border-left: solid 3px hsl(210, 8%, 55%);
  border-right: solid 2.5px hsl(210, 8%, 75%);
  border-bottom: solid 2.5px hsl(210, 8%, 75%);
  &:focus {
    outline: none;
    border-color: hsl(206, 90%, 69.5%);
    box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
  }
  font-size: 15px;
  @media screen and (max-width: 1200px) {
    width: 95%;
  }
`;
const SearchItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 10px;
  padding: 0px;
  width: 700px;
  height: 250px;
  background-color: transparent;
`;

const SearchItem = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  margin-left: 10px;
  padding: 0px;
  width: 700px;
  height: 180px;

  background-color: white;
  border-color: black;
  border-radius: 7px 7px 0px 0px;
  box-shadow: 0px 0px 0px 2px hsl(210, 8%, 90%);
  .first {
    list-style: none;
    text-align: left;
    color: black;
  }
  .second {
    list-style: none;
    text-align: left;
    color: black;
  }
  .small_hint {
    color: gray;
  }
`;
const SearchItem_bottom = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  padding: 10px;
  width: 700px;
  height: 52px;
  color: #0074cc;
  box-shadow: 0px 0px 0px 2px hsl(210, 8%, 90%);
  border-top: 0px;
  border-radius: 0px 0px 7px 7px;

  .questionBtn {
    background-color: hsl(205, 46%, 92%);
    color: hsl(205, 47%, 42%);
    font-size: 13px;
    border: 1px solid transparent;
    border-color: hsl(205, 41%, 63%);
    border-radius: 3px;
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
    &:hover {
      background-color: hsl(205, 41%, 63%);
    }
  }
  .help {
    &:hover {
      color: hsl(206, 93%, 83.5%);
    }
    margin-top: 5px;
    font-size: 14px;
  }
`;

const LoginBtn = styled.button`
  margin: 4px 4px 4px 10px;
  padding: 5px;
  width: 59px;
  height: 33px;
  background-color: #e1ecf4;
  color: #39739d;
  font-size: 13px;
  border: solid 1px hsl(205, 41%, 63%);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
  &:hover {
    background-color: hsl(205, 56%, 76%);
  }
  cursor: pointer;
  font-size: 13px;
`;

const LogoutBtn = styled.button`
  margin: 4px 4px 4px 10px;
  padding: 5px;
  width: 70px;
  height: 33px;
  background-color: #e1ecf4;
  color: #39739d;
  font-size: 13px;
  border: solid 1px hsl(205, 41%, 63%);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
  &:hover {
    background-color: hsl(205, 56%, 76%);
  }
  cursor: pointer;
  font-size: 13px;
`;

const SignupBtn = styled.button`
  margin: 0px 0px 0px 4px;
  padding: 5px;
  font-weight: 500;
  width: 69px;
  height: 33px;
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

const IconContain = styled.div`
  margin: 7px;
  .icon {
    margin: 10px 10px 5px 10px;
    padding: 0px 0px 10px 0px;
    &:hover {
      background-color: hsl(210, 8%, 90%);
    }
    cursor: pointer;
  }
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 60px;
  padding: 0px;
  width: 700px;
  height: 250px;
  background-color: gray;
`;

const BarModal = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 200px 50px 50px 50px;
  padding: 0px;
  width: 70px;
  height: 130px;
  background-color: white;
  border: solid 1px red;
`;

function Nav({ ModalItem, dropdownIsOpen }) {
  const [BarOn, setBarOn] = useState(false);
  const BarHandler = () => {
    setBarOn(!BarOn);
  };
  // const closeModal = () => {
  //   setBarOn(false);
  // };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');

  const search = () => {
    if (searchInput === '') return;
    dispatch(setSearchKeyword(searchInput));
    window.sessionStorage.setItem('keyword', searchInput);
    navigate('/search');
  };

  // 토큰을 로컬스토리지에서 get
  //window.localStorage.getItem('jwtToken');
  //로그아웃시 토큰 삭제
  //window.localStorage.removeItem('jwtToken');

  // 로그인 확인
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  // const jwtTokenSelector = (state) => state.user.token;

  const Token = window.localStorage.getItem('jwtToken');

  const logoutHandler = () => {
    dispatch(setToken(-1));
    localStorage.removeItem(Token);
    navigate('/');
  };

  return (
    <NavContainer>
      <NavBoxCotain>
        <FlowLogo
          src={stackoverflow_logo}
          alt="logo"
          onClick={(e) => navigate('/')}
        />
        <BtnContainer>
          {!isLoggedIn && (
            <>
              <AboutBtn>About</AboutBtn>
            </>
          )}
          <ProductsBtn>Products</ProductsBtn>
          {!isLoggedIn && (
            <>
              <ForTeamsBtn>For Teams</ForTeamsBtn>
            </>
          )}
        </BtnContainer>
        <SearchContainer>
          <img src={MagnifyingGlass} alt="searchicon" />
          <SearchInput
            type="text"
            placeholder="Search..."
            onClick={ModalItem}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={(e) => (e.key === 'Enter' ? search() : null)}
          />
          {dropdownIsOpen ? (
            <SearchItemContainer>
              <SearchItem>
                <li className="first">
                  <ul>
                    [tag]
                    <span className="small_hint"> search within a tag</span>
                  </ul>
                  <ul>
                    user:1234
                    <span className="small_hint"> search by author</span>
                  </ul>
                  <ul>
                    &quot;words here&quot;
                    <span className="small_hint"> exact phrase</span>
                  </ul>
                  <ul>
                    collective: &quot;Name&quot;
                    <span className="small_hint"> collective content</span>
                  </ul>
                </li>
                <li className="second">
                  <ul>
                    answers:0
                    <span className="small_hint"> unanswered questions</span>
                  </ul>
                  <ul>
                    score:3
                    <span className="small_hint"> posts with a 3+ score</span>
                  </ul>
                  <ul>
                    is:questsion
                    <span className="small_hint"> type of post</span>
                  </ul>
                  <ul>
                    isaccepted:yes
                    <span className="small_hint"> search within status</span>
                  </ul>
                </li>
              </SearchItem>
              <SearchItem_bottom>
                <button
                  className="questionBtn"
                  onClick={(e) => navigate('/ask')}
                >
                  ask a question
                </button>
                {/* <Link to="stackoverflow.com/help/searching"> */}
                <span className="help">Search help</span>
                {/* </Link> */}
              </SearchItem_bottom>
            </SearchItemContainer>
          ) : null}
        </SearchContainer>
        {!isLoggedIn ? (
          <>
            <LoginBtn onClick={(e) => navigate('/login')}>Log in</LoginBtn>
            <SignupBtn onClick={(e) => navigate('/signup')}>Sign up</SignupBtn>
          </>
        ) : (
          <>
            <IconContain>
              <FontAwesomeIcon icon={faUser} className="icon" size="lg" />
              <FontAwesomeIcon icon={faInbox} className="icon" size="lg" />
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="icon"
                size="lg"
              />
              <FontAwesomeIcon
                icon={faBars}
                className="icon"
                size="lg"
                onClick={BarHandler}
              />
              {/* <BarContainer>
                <BarModal>
                  <li>
                    <ul>dd</ul>
                  </li>
                </BarModal>
              </BarContainer> */}
            </IconContain>

            <LogoutBtn onClick={(e) => navigate('/logout')}>LogOut</LogoutBtn>
          </>
        )}
      </NavBoxCotain>
    </NavContainer>
  );
}
export default Nav;

{
  /* <LogoutBtn onClick={(e) => navigate('/logout')}>LogOut</LogoutBtn> */
}
