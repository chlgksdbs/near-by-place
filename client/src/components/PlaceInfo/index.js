import React from "react";

import TestImg from "../../assets/test.png";
import { Container, MainImage, SubImage, SubImageContainer } from "./style";

const testPlace = {
    images: [ TestImg, TestImg, TestImg, TestImg, ],
    name: "보정동 농구장",
    address: "경기도 용인시 기흥구 보정동",
    description: "3x3 경기, 5x5 풀코트 경기 가능",
    grade_avg: 4.8,
};

const PlaceInfo = () => {
    return (
        <Container>
            <MainImage src={testPlace.images[0]} />
            <SubImageContainer>
                {testPlace.images
                    .slice(1)
                    .map(place => <SubImage src={place} />)}
            </SubImageContainer>
        </Container>
    )
};

export default PlaceInfo;
