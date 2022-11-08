import React from 'react';
import { 
    Background, 
    Container, 
    CloseIcon, 
    ModalContent, 
    LoginLogo,
    LoginIdInput, 
    LoginPwInput, 
    LoginMid, AutoLogin, AutoLoginBox,
    SocialBox,
    LoginEnd, LoginLine, SignUpLink
} from './style';

import CloseImg from '../../../assets/close.png';
import FaviconImg from '../../../assets/logo.png';
import EmailImg from '../../../assets/EmailLoginButton.png';
import KakaoImg from '../../../assets/kakaoLoginButton.png';
import GoogleImg from '../../../assets/googleLoginButton.png';


const Login = (props) => {
    return (
        <>
            {props.loginModalOn ? (
                <Background onClick={props.closeLoginModal}>
                    <Container>
                        <CloseIcon src={CloseImg} onClick={props.closeLoginModal} />
                        <ModalContent onClick={props.loginModalOn}>
                            <LoginLogo src={FaviconImg} />
                            <LoginIdInput type="text" placeholder="아이디" />
                            <LoginPwInput type="password" placeholder="비밀번호" />
                            
                            <LoginMid>
                                <AutoLogin for="hint">
                                    {" "}
                                    <AutoLoginBox type="checkbox" id="hint" /> 로그인 유지하기
                                </AutoLogin>
                                <AutoLogin>아이디/비밀번호 찾기</AutoLogin>
                            </LoginMid>
                            
                            <SocialBox src={EmailImg} />
                            <SocialBox src={KakaoImg} />
                            <SocialBox src={GoogleImg} />

                            <LoginEnd>
                                <LoginLine>
                                    회원이 아니신가요? <SignUpLink to="/singup">회원가입</SignUpLink>
                                </LoginLine>
                            </LoginEnd>
                        </ModalContent>
                    </Container>
                </Background> 
            ) : null}
        </>
    )
}

export default Login;
