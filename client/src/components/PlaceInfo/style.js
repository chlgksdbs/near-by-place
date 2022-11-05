import styled from "@emotion/styled";
import EmptyHeart from "../../assets/emptyHeart.png";
import Heart from "../../assets/heart.png";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MainImage = styled.img`    
    max-width: 650px;
    max-height: 415px;
`;

export const SubImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 650px;
    margin-top: 30px;
`;

export const SubImage = styled.img`
    width: 90px;
    height: 90px;
    margin-right: 20px;
    cursor: pointer;
`;

export const InfoContainer = styled.div`
    padding-bottom: 20px;
    max-width: 650px;
    border-bottom: 2px solid #000;
`;

export const TitleBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    padding-bottom: 10px;
    border-bottom: 2px solid #000;
    justify-content: space-between;
    align-items: end;
  
    & > div {
        display: flex;
        flex-direction: row;
    }
`;

export const Title = styled.div`
    font-size: 22px;
    font-weight: 400;
`;

export const Grade = styled.div`
    font-size: 22px;
    font-weight: 540;
    color: #FF9900;
    margin-left: 10px;
`;

export const Bookmark = styled.div`
    width: 24px;
    height: 24px;
    background-image: url(${EmptyHeart});
    margin-right: auto;
    cursor: pointer;
  
    &.activate {
        background-image: url(${Heart});
    }
`;

export const DetailBox = styled.div`
    display: flex;
    flex-direction: row;
`;

export const DetailTitleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100px;
    margin-top: 10px;
`;

export const Detail = styled.div`
    display: flex;
    flex-direction: row;
    
    & > div {
        min-width: 30px;
        font-size: 13px;
        font-weight: 600;
        margin-right: 40px;
    }
`;
