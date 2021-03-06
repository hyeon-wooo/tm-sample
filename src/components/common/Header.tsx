import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import palette from "../../styles/palette";
import { Link } from "react-router-dom";

interface HeaderProps {
  user: {
    nickname: string;
    email: string;
    password: string;
  } | null;
  onLogout: () => void;
}

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  border-bottom: 1px solid ${palette.gray[2]};
`;

const HeaderBlock = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 20px 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user-info {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
      // Mobile
      @media screen and (max-width: 767px) {
        margin-right: 10px;
      }
      img {
        width: 30px;
        // Mobile
        @media screen and (max-width: 767px) {
          width: 20px;
        }
      }
    }
    .link-btn {
      text-decoration: underline;
    }
  }

  // Tablet
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 100%;
    padding: 20px 5%;
  }
  // Mobile
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 10px 5%;
  }
`;

const UserName = styled.div`
  margin-left: 10px;
  // Mobile
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Header = ({ user, onLogout }: HeaderProps) => {
  return (
    <Wrapper>
      <HeaderBlock>
        <Logo fontsize="16px" />
        {user ? (
          <div className="right">
            <span className="user-info">
              <img src="./images/default_profile.png" alt="profileImage" />
              <UserName>반가워요, {user.nickname} 님!</UserName>
            </span>
            <button className="link-btn" onClick={onLogout}>
              로그아웃
            </button>
          </div>
        ) : (
          <div className="right">
            <Link to="/login" className="link-btn">
              로그인
            </Link>
          </div>
        )}
      </HeaderBlock>
    </Wrapper>
  );
};

export default Header;
