import React, {useState} from "react";

import {Container, InfoContainer, Menu, MenuBox, SideBar} from "./style";
import Header from "../../components/Header";
import Profile from "../../components/MyPage/Profile";
import MatchHistory from "../../components/MyPage/MatchHistory";
import Bookmark from "../../components/MyPage/Bookmark";

const MyPage = () => {
    const menu = [ "내 프로필", "매칭 현황", "매칭 이력", "즐겨찾기" ];
    const pages = [ "profile", "currentMatch", "matchHistory", "bookmark" ];
    const [selectedMenuIdx, setSelectedMenuIdx] = useState(0);

    const showUserInfo = (page) => {
        if (page === "profile") return <Profile />
        else if (page === "currentMatch") return <MatchHistory />
        else if (page === "matchHistory") return <MatchHistory />
        else return <Bookmark />
    }

    const handleMenu = (idx) => {
        setSelectedMenuIdx(idx);
    };

    return (
        <>
        <Header />
            <Container>
                <SideBar>
                    <MenuBox>
                        {menu.map((el, idx) =>
                            <Menu
                                className={selectedMenuIdx === idx ? 'selected' : ''}
                                onClick={() => handleMenu(idx)}
                            >
                                {el}
                            </Menu>)}
                    </MenuBox>
                </SideBar>
                <InfoContainer>
                    {showUserInfo(pages[selectedMenuIdx])}
                </InfoContainer>
            </Container>
        </>
    )
};

export default MyPage;
