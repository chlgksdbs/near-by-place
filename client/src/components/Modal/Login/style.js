import styled from "@emotion/styled";
import { css } from "@emotion/react";

const LoginInputBar = css`
    border-radius: 2px;
    width: 100%;
    height: 40px;
    border: 1px solid #e5e5e5;
    padding: 9px 12px;
    outline: none;
    box-sizing: border-box;
`;

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 1;
`;

export const Container = styled.div`
    position: relative;
    width: 480px;
    height: 621px;
    background: #ffffff;
    box-sizing: border-box;
    padding: 20px;
    margin: 50px auto;
`;

export const CloseIcon = styled.img`
    float: right;
    width: 25px;
    height: 25px;

    cursor: pointer;
`;

export const ModalContent = styled.div`
    margin: 0 auto;
    margin-top: 30px;
    width: 100%
    position: relative;
    padding: 0 20px 32px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const LoginLogo = styled.img`
    margin: auto;
    display: block;
    width: 250px;
    height: 100px;
`;

export const LoginIdInput = styled.input`
    margin-top: 30px;

    ${LoginInputBar}
`;

export const LoginPwInput = styled.input`
    margin-top: 15px;
    
    ${LoginInputBar}
`;

export const LoginMid = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
`;

export const AutoLogin = styled.div`
    font-size: 12px;
    color: #8d8d8d;
    line-height: 3;

    cursor: pointer;
`;

export const AutoLoginBox = styled.input`
    cursor: pointer;
`;

export const SocialBox = styled.img`
    margin: auto;
    display: block;
    width: 360px;
    height: 60px;
    
    cursor: pointer;
`;

export const LoginEnd = styled.div`
    text-align: center;
    font-size: 11px;
    margin-top: 20px;
`;

export const LoginLine = styled.div`
    color: #bcbcbc;
    font-size: 11px;
    display: flex;
    justify-content: center;
`;

export const SignUpLink = styled.div`
    color: black;
    text-decoration: underline;
    cursor: pointer;
`;
