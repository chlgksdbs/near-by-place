import React from "react";

import TestPlaceImg from "../../../assets/test-place.png";
import {Container} from "./style";
import Match from "../../Card/Match";

const testCurrentMatchList = [
    {
        placeImage: TestPlaceImg,
        placeName: "보정동 풋살장",
        startAt: "2022-11-06",
        endAt: "2022-11-06",
        currentMember: 3,
        maxMember: 8
    },
    {
        placeImage: TestPlaceImg,
        placeName: "보정동 풋살장",
        startAt: "2022-11-06",
        endAt: "2022-11-06",
        currentMember: 3,
        maxMember: 8
    },
    {
        placeImage: TestPlaceImg,
        placeName: "보정동 풋살장",
        startAt: "2022-11-06",
        endAt: "2022-11-06",
        currentMember: 3,
        maxMember: 8
    }
];

const MatchHistory = () => {
    return (
        <Container>
            {testCurrentMatchList.map(el => <Match matchDetail={el} />)}
        </Container>
    )
};

export default MatchHistory;
