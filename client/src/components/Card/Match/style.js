import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 410px;
    height: 150px;
    border-radius: 20px;
    background-color: #c4c4c4;
`;

export const PlaceImg = styled.img`
    width: 110px;
    height: 110px;
    margin-left: 20px;
`;

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 250px;
    height: 110px;
    margin-left: 10px;
    border-radius: 10px;
    background-color: #fff;
  
    & > div > span {
        font-size: 15px;
        margin-left: 10px;
    }
  
    & > div > span:first-child {
        font-weight: bold;
    }
`;
