import React, { MutableRefObject, useEffect } from "react";
import styled from "styled-components";
import palette from "../../styles/palette";
import Input from "../common/Input";
import { ErrorMessage } from "./Register";
import { CyanButtonStyle, SelectButtonStyle } from "../../styles/ButtonStyle";
import { Link } from "react-router-dom";

interface LoginProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  initialUid: MutableRefObject<string>;
  error: string | null;
}

const LoginBlock = styled.div`
  h2 {
    margin-bottom: 52px;
    font-size: 24px;
    text-align: center;
  }
  .sub-login {
    font-size: 14px;
    color: ${palette.gray[5]};
  }
  .sub-login-1 {
    margin-bottom: 26px;
    > label:last-child {
      margin-left: 10px;
    }
  }
  .sub-login-2 {
    margin-bottom: 52px;
    display: flex;
    justify-content: space-between;
    > a:first-child {
      &:hover {
        color: ${palette.gray[4]};
      }
    }
    > a:last-child {
      color: ${palette.cyan[5]};
      &:hover {
        color: ${palette.cyan[3]};
      }
    }
  }
  .login-btn {
    margin-bottom: 26px;
  }
  > span {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: ${palette.gray[5]};
    margin-bottom: 26px;
    &::before,
    &::after {
      content: "";
      flex-grow: 1;
      background: ${palette.gray[5]};
      height: 0.5px;
      font-size: 0px;
      line-height: 0px;
    }
    &::before {
      margin-right: 15px;
    }
    &::after {
      margin-left: 15px;
    }
  }
  .sns-login {
    button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
  .sns-btn {
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }
  .google-btn {
    margin-bottom: 13px;
    border: 1px solid ${palette.gray[5]};
  }
  .naver-btn {
    margin-bottom: 13px;
    color: #fff;
    background: #00bf18;
  }
  .kakao-btn {
    background: #ffeb3b;
  }
`;

const Login = ({ onSubmit, initialUid, error }: LoginProps) => {
  useEffect(() => {
    // @ts-ignore
    var naver_id_login: any = new window.naver_id_login(
      "UzhGpoYO5JtK5jDfEdJg",
      "https://tm-sample.vercel.app/naver-login-cb"
    );
    var state = naver_id_login.getUniqState();
    naver_id_login.setButton("white", 2, 40);
    naver_id_login.setDomain("https://tm-sample.vercel.app");
    naver_id_login.setState(state);
    naver_id_login.setPopup();
    naver_id_login.init_naver_id_login();
  }, []);
  return (
    <LoginBlock>
      <h2>???????????????!</h2>
      <form onSubmit={onSubmit}>
        <Input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="?????????"
          defaultValue={initialUid.current}
        />
        <Input
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="????????????"
        />
        <div className="sub-login sub-login-1">
          <label>
            <input type="checkbox" name="save-id" id="save-id" />
            ????????? ??????
          </label>
          <label>
            <input type="checkbox" name="save-id" id="keep-login" />
            ????????? ??????
          </label>
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <CyanButtonStyle>
          <button type="submit" className="login-btn">
            ?????????
          </button>
        </CyanButtonStyle>
      </form>
      <div className="sub-login sub-login-2">
        <Link to="/findPw">???????????? ??????</Link>
        <Link to="/privacyPolicy">????????????</Link>
      </div>
      <span>??????</span>
      <div className="sns-login">
        <button className="sns-btn google-btn">
          <img src="./images/google_icon.png" alt="google" />
          ?????? ?????????
        </button>
        {/* <button className="sns-btn naver-btn">
          <img src="./images/naver_icon.png" alt="naver" />
          ????????? ?????????
        </button> */}
        <div id="naver_id_login" className="sns-btn"></div>
        <button className="sns-btn kakao-btn">
          <img src="./images/kakao_icon.png" alt="kakao" />
          ????????? ?????????
        </button>
      </div>
    </LoginBlock>
  );
};

export default Login;
