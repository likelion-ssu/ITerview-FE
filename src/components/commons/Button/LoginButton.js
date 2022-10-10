import React from 'react'
import  styled  from 'styled-components';
import colors from '../../../styles/colors';

const LoginButtonStyle = styled.button`
    margin: 100px;
    width: 100%;
    width: 207.52px;
    height: 59.55px;

    background: ${colors.white_100};
    box-shadow: 0px 0px 12.9193px rgba(0, 0, 0, 0.1);
    border-radius: 76px;
    border: none;

    font-weight: 600;
    font-size: 25.8385px;
    line-height: 35px;
    letter-spacing: 0.05em;

    color: ${colors.black_100};

    :disabled {
        cursor: not-allowed;
        color: ${colors.black_30};
    }

    :active {
        filter: brightness(80%);;
    }
`

function LoginButton({ disabled, onClick }) {
  return (
    <LoginButtonStyle disabled={false}>로그인</LoginButtonStyle>
  )
}

export default LoginButton;