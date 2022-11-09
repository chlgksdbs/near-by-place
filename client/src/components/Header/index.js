import React, { useState } from "react";

import { Container, Logo, Account, LoginButton } from './style';
import LogoImg from '../../assets/logo.png'
import LoginModal from '../Modal/Login';
import AccountImg from '../../assets/account.png';

const Header = () => {
    const [loginModalOn, setLoginModalOn] = useState(false);

    const openLoginModal = () => {
        setLoginModalOn(true);
    };

    const closeLoginModal = () => {
        setLoginModalOn(false);
    }

    return (
        <>
            <Container>
                <Logo src={LogoImg} />
                <LoginButton onClick={openLoginModal}>로그인</LoginButton>
                <LoginModal loginModalOn={loginModalOn} closeLoginModal={closeLoginModal} />
                <Account src={AccountImg} />
            </Container>
        </>
    )
}

export default Header;
