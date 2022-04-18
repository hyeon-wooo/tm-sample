import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  CyanButtonStyle,
  GrayButtonStyle,
  SelectButtonStyle,
} from "../../styles/ButtonStyle";
import palette from "../../styles/palette";

const RegisterFinBlock = styled.div`
  .material-icons {
    display: block;
    margin-bottom: 52px;
    font-size: 32px;
    text-align: center;
    color: ${palette.gray[5]};
    font-weight: 900;
  }
  h2 {
    margin-bottom: 104px;
    font-size: 24px;
    text-align: center;
    b {
      font-weight: 600;
    }
  }
`;

const RegisterFin = () => {
  return (
    <RegisterFinBlock>
      <div className="material-icons">done</div>
      <h2>
        <b>회원가입</b>이 완료되었습니다.
      </h2>
      <SelectButtonStyle>
        <CyanButtonStyle>
          <button>
            <Link to="/login">로그인 페이지로 이동</Link>
          </button>
        </CyanButtonStyle>
        <GrayButtonStyle>
          <button>
            <Link to="/">메인 페이지로 이동</Link>
          </button>
        </GrayButtonStyle>
      </SelectButtonStyle>
    </RegisterFinBlock>
  );
};

export default RegisterFin;
