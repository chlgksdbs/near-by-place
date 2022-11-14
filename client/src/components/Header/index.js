import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Logo, Account, LoginButton } from './style';
import LogoImg from '../../assets/logo.jpg'
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
                <Link to="/">
                    <Logo src={LogoImg} />
                </Link>
                <LoginButton onClick={openLoginModal}>로그인</LoginButton>
                <LoginModal loginModalOn={loginModalOn} closeLoginModal={closeLoginModal} />
                <Link to="/mypage">
                    <Account src={AccountImg} />
                </Link>
            </Container>
        </>
    )
}

export default Header;
