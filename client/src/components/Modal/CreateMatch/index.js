import React from "react";
import {
    Container,
    MatchLeader,
    MatchDescription,
    MatchDescriptionArea,
    MatchInfo,
    MatchNumber, MatchLeaderInput, MatchNumberInput, ButtonContainer, CancelButton, CompleteButton
} from "./style";

const CreateMatch = () => {
    return (
        <Container>
            <MatchLeader>
                <MatchInfo>모집자</MatchInfo>
                <MatchLeaderInput type="text" placeholder="모집자 이름 혹은 아이디를 입력하세요."/>
            </MatchLeader>
            <MatchDescription>
                <MatchInfo>모집내용</MatchInfo>
                <MatchDescriptionArea cols={35} rows={16} placeholder="모집 내용을 입력하세요." />
            </MatchDescription>
            <MatchNumber>
                <MatchInfo>최대 인원수</MatchInfo>
                <MatchNumberInput type="text" />
                <MatchInfo>명</MatchInfo>
            </MatchNumber>
            <ButtonContainer>
                <CancelButton>취소</CancelButton>
                <CompleteButton>완료</CompleteButton>
            </ButtonContainer>
        </Container>
    )
};

export default CreateMatch;
