import React from "react";
import {Container, InfoContainer, Menu, MenuBox, SideBar} from "./style";
import Header from "../../components/Header";

const MyPage = () => {
    const menu = [ "내 프로필", "매칭 현황", "매칭 이력", "즐겨찾기" ];

    return (
        <>
        <Header />
            <Container>
                <SideBar>
                    <MenuBox>
                        {menu.map(el => <Menu>{el}</Menu>)}
                    </MenuBox>
                </SideBar>
                <InfoContainer>

                </InfoContainer>
            </Container>
        </>
    )
};

export default MyPage;
