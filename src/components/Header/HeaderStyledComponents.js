import styled from "styled-components";
import { Link } from "react-router-dom";
import "typeface-muli";
export const HeaderContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  background: #fff;
  box-shadow: 0 2px 4px #00000012;
  position: fixed;
  z-index: 9;
  align-items: center;
  height: 64px;
`;

export const Logo = styled.img`
  height: 64px;
`;

export const NavContainer = styled.ul`
  display: flex;
  flex-direction: row;
  height: 64px;
  align-items: center;
`;

export const NavItem = styled.li`
  font-family: "Muli", sans-serif;
  height: 50px;
  font-style: normal;
  font-size: 16px;
  line-height: 22px;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  letter-spacing: 0.18px;
  position: relative;
  white-space: nowrap;
  border-bottom: 3px solid #ffffff;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid blue;
    color:blue;
  `}
`;

export const ProfileIconContainer = styled.div`
  font-family: "Muli", sans-serif;
  height: 50px;
  font-style: normal;
  font-size: 20px;
  line-height: 22px;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  letter-spacing: 0.18px;
  position: relative;
  font-weight: 700;
  white-space: nowrap;
  border-bottom: 3px solid #ffffff;
`;

export const Profile = styled.img`
  height: 55px;
  width: 55px;
  border-radius: 100px;
  margin-left: 10px;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
`;
