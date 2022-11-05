import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {LiftUp} from "../../../styles/common";
import {BLUE, RED} from "../../../styles/color";

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 500px;
    margin-top: 100px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: #ffffff;
    z-index: 1;
`;

const MatchContainer = css`
    display: flex;
    flex-direction: row;
    margin: 20px 0 0 20px;
`;

const InputBar = css`
    border: none;
    height: 40px;
    border-radius: 10px;
    padding-left: 10px;
    font-size: 15px;
    background-color: #eeeeee;
`

export const MatchLeader = styled.div`  
    span {
        margin-top: 10px;
    }
  
    ${MatchContainer}
`;

export const MatchInfo = styled.span`
    min-width: 100px;
    font-weight: bold;
`;

export const MatchLeaderInput = styled.input`
    width: 300px;
    ${InputBar}
`;

export const MatchDescription = styled.div`    
    span {
        margin-top: 5px;
    }

    ${MatchContainer}
`;

export const MatchDescriptionArea = styled.textarea` 
    font-size: 15px;
    border-radius: 10px;
    padding: 10px 0 0 10px;
    border: none;
    background-color: #eeeeee;
`;

export const MatchNumber = styled.div`    
    span {
        margin-top: 10px;
    }

    ${MatchContainer}
`;

export const MatchNumberInput = styled.input`
    width: 100px;
    margin-right: 10px;
    ${InputBar}
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0 0 auto;
`;

const Button = css`
    width: 34px;
    font-weight: bold;
    cursor: pointer;
    margin-left: 20px;
    ${LiftUp}
`;

export const CancelButton = styled.div`
    margin-left: 40px;
    color: ${RED};
    border-bottom: 2px solid ${RED};
    ${Button}
`;

export const CompleteButton = styled.div`
    margin-right: 20px;
    color: ${BLUE};
    border-bottom: 2px solid ${BLUE};
    ${Button};
`;
