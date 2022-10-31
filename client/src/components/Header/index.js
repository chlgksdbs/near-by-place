import React from "react";

import { Container, Logo, Account } from './style';
import LogoImg from '../../assets/logo.png'
import AccountImg from '../../assets/account.png';

const Header = () => {

    return (
        <Container>
            <Logo src={LogoImg} />
            <Account src={AccountImg} />
        </Container>
    )

}

export default Header;
