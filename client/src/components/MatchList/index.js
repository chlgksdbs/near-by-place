import React from "react";
import {Container, MatchArticle, MatchContainer, MatchDetail, MatchInfo, Title} from "./style";

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
    return (
        <Container>
            <Title>매칭 리스트</Title>
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
                    </MatchArticle>
                ))}
            </MatchContainer>
        </Container>
    )
};

export default MatchList;