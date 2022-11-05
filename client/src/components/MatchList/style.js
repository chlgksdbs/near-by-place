import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 600px;
    background-color: #d9d9d9;
    border-radius: 10px;
    margin: 30px 0 0 0;
`;

export const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    margin: 30px 0 0 40px;
`;

export const MatchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    overflow-y: scroll;
`;

export const MatchArticle = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 10px 0;
    border-radius: 10px;
    padding: 15px 20px 10px 20px;
    background-color: #eeeeee;
    justify-content: space-around;
    cursor: pointer;

    :hover {
        animation: lift-up 0.2s forwards;
    }
  
    @keyframes lift-up {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(-6px);
        }
    }
`;

export const MatchDetail = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
`;

export const MatchInfo = styled.div`
    font-size: 15px;
    font-weight: bold;
    min-width: 75px;
    margin-right: 15px;
`;
