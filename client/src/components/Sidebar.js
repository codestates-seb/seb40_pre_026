import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEarthAmericas,
  faCircleInfo,
  faCertificate,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons';

const SidebarContainer = styled.nav`
  background-color: #fff;
  width: 220px;
  padding: 20px 0px 10px 10px;
  margin: 0;
  position: fixed;
  height: 100%;
  overflow: auto;
  font-size: 15px;
  padding-top: 30px;
  padding-left: 10px;
`;

const SidebarList = styled.li`
  margin-bottom: 15px;
  list-style-type: none;
  text-align: left;
  color: gray;

  .info {
    display: flex;
    text-align: center;
    justify-content: space-between;
  }

  .icon {
    margin: 0 5px 0 0;
  }

  .color {
    color: rgb(241, 130, 37);
  }

  .public {
    text-align: left;
    padding-left: 35px;
  }
`;

const NavLinkStyle = styled(NavLink)`
  display: block;
  padding: 10px;
  color: rgb(43, 43, 43);
  &:link {
    text-decoration: none;
  }
  &:hover {
    color: black;
    font-weight: 600;
  }
  &.active {
    color: black;
    font-weight: 700;
    background-color: rgb(82, 89, 96, 10%);
    position: relative;
    top: 2px;
    border-right: 5px solid rgb(245, 162, 9);
  }
`;

export function Sidebar() {
  return (
    <SidebarContainer>
      <ul>
        <SidebarList>
          <NavLinkStyle end to="/">
            Home
          </NavLinkStyle>
        </SidebarList>
        <SidebarList>PUBLIC</SidebarList>
        <SidebarList>
          <NavLinkStyle exact="true" to="/questions">
            <FontAwesomeIcon icon={faEarthAmericas} className="icon" />
            Questions
          </NavLinkStyle>
        </SidebarList>
        <SidebarList>
          <NavLinkStyle exact="true" to="/tags" className="link public">
            Tags
          </NavLinkStyle>
        </SidebarList>
        <SidebarList>
          <NavLinkStyle end to="/users" className="link public">
            Users
          </NavLinkStyle>
        </SidebarList>
        <SidebarList>
          <NavLinkStyle end to="/companies" className="link public">
            Companies
          </NavLinkStyle>
        </SidebarList>
        <SidebarList>
          <div className="info">
            COLLECTIVES
            <FontAwesomeIcon icon={faCircleInfo} />
          </div>
        </SidebarList>
        <SidebarList>
          <NavLinkStyle end to="/explore" className="link">
            <FontAwesomeIcon icon={faCertificate} className="icon color" />
            Explore Collectives
          </NavLinkStyle>
        </SidebarList>
        <SidebarList>
          <div className="info">
            TEAMS
            <FontAwesomeIcon icon={faCircleInfo} />
          </div>
        </SidebarList>
        <SidebarList>
          <NavLinkStyle end to="/team" className="link">
            <FontAwesomeIcon icon={faSuitcase} className="icon color" />
            Create free Team
          </NavLinkStyle>
        </SidebarList>
      </ul>
    </SidebarContainer>
  );
}
