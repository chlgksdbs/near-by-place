import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 420px;
`;

export const UserInfoBox = styled.div`
    display: flex;
    flex-direction: row;
  
    & > span {
        font-weight: bold;
        margin-right: 20px;
    }
`;

export const UserInfo = styled.div`
    width: 300px;
    border-bottom: 2px solid #000;
`;

export const UserDescription = styled.div`
    width: 450px;
    height: 170px;
    border: 2px solid #000;
`;
