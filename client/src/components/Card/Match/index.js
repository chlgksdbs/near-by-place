import React from "react";

import {Container, DetailContainer, PlaceImg} from "./style";

const Match = (props) => {
    const { placeImage, placeName, startAt, endAt, currentMember, maxMember } = props.matchDetail;

    return (
        <Container>
            <PlaceImg src={placeImage} />
            <DetailContainer>
                <div>
                    <span>장소:</span>
                    <span>{placeName}</span>
                </div>
                <div>
                    <span>날짜:</span>
                    <span>{startAt} ~ {endAt}</span>
                </div>
                <div>
                    <span>인원:</span>
                    <span>{currentMember} / {maxMember}</span>
                </div>
            </DetailContainer>
        </Container>
    )
};

export default Match;
