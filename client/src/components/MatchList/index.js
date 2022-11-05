import React, {useState} from "react";

import {
    Container, CreateButton,
    MatchArticle,
    MatchContainer,
    MatchDetail,
    MatchInfo,
    ParticipateButton,
    Title,
    TitleContainer
} from "./style";
import CreateMatchModal from "../Modal/CreateMatch";

const testMatchList = [
    {
        leader: "kykapple",
        startAt: "2022-11-05",
        endAt: "2022-11-06",
        currentMember: 3,
        maxMember: 8,
        description: "재밌게 농구하실 분들 구합니다!"
    },
    {
        leader: "kykapple",
        startAt: "2022-11-07",
        endAt: "2022-11-07",
        currentMember: 6,
        maxMember: 10,
        description: "5x5 풀코드 농구하실 분들 구합니다!"
    },
    {
        leader: "kykapple",
        startAt: "2022-11-12",
        endAt: "2022-11-12",
        currentMember: 1,
        maxMember: 6,
        description: "3x3 재밌게 농구하실 분들 구합니다!"
    },
    {
        leader: "kykapple",
        startAt: "2022-11-12",
        endAt: "2022-11-12",
        currentMember: 1,
        maxMember: 6,
        description: "3x3 재밌게 농구하실 분들 구합니다!"
    }
]

const MatchList = () => {
    const [createMatchModalVisible, setCreateMatchModalVisible] = useState(false);

    const handleCreateMatch = (match) => {
        setCreateMatchModalVisible(prev => !prev);
    };

    return (
        <>
            <Container>
                <TitleContainer>
                    <Title>매칭 리스트</Title>
                    <CreateButton onClick={handleCreateMatch}>추가</CreateButton>
                </TitleContainer>
                <MatchContainer>
                    {testMatchList.map((match) => (
                        <MatchArticle>
                            <MatchDetail>
                                <MatchInfo>모집자 :</MatchInfo>
                                <div>{match.leader}</div>
                            </MatchDetail>
                            <MatchDetail>
                                <MatchInfo>기간 :</MatchInfo>
                                <div>{match.startAt} ~ {match.endAt}</div>
                            </MatchDetail>
                            <MatchDetail>
                                <MatchInfo>인원 :</MatchInfo>
                                <div>{match.currentMember} / {match.maxMember}</div>
                            </MatchDetail>
                            <MatchDetail>
                                <MatchInfo>모집 내용 :</MatchInfo>
                                <div>{match.description}</div>
                            </MatchDetail>
                            <ParticipateButton>참여</ParticipateButton>
                        </MatchArticle>
                    ))}
                </MatchContainer>
            </Container>
            {!createMatchModalVisible ? <CreateMatchModal /> : null}
        </>
    )
};

export default MatchList;
