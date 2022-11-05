import React from "react";

import {Container, InfoContainer, ProfileImage, UserDescription, UserInfo, UserInfoBox} from "./style";
import TestProfileImg from "../../../assets/test-profile.jpg";

const testUser = {
    nickname: "므쨍이",
    address: "경기도 용인시 수지구 죽전동",
    description: "안녕하세요!"
}

const Profile = () => {
    return (
        <Container>
            <ProfileImage src={TestProfileImg} />
            <InfoContainer>
                <UserInfoBox>
                    <span>닉네임</span>
                    <UserInfo>{testUser.nickname}</UserInfo>
                </UserInfoBox>
                <UserInfoBox>
                    <span>주소지</span>
                    <UserInfo>{testUser.address}</UserInfo>
                </UserInfoBox>
                <UserInfoBox>
                    <span>소개글</span>
                    <UserDescription>{testUser.description}</UserDescription>
                </UserInfoBox>
            </InfoContainer>
        </Container>
    )
};

export default Profile;
