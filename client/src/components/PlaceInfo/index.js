import React, {useState} from "react";

import TestImg from "../../assets/test.png";
import {
    Bookmark,
    Container, Detail,
    DetailBox, DetailTitleBox,
    Grade,
    InfoContainer,
    MainImage,
    SubImage,
    SubImageContainer,
    Title,
    TitleBox
} from "./style";

const testPlace = {
    images: [ TestImg, TestImg, TestImg, TestImg, ],
    name: "보정동 농구장",
    address: "경기도 용인시 기흥구 보정동",
    description: " 3x3 경기, 5x5 풀코트 경기 가능 3x3 경기, 5x5 풀코트 경기 가능 3x3 경기, 5x5 풀코트 경기 가능",
    grade_avg: 4.8,
};

const PlaceInfo = () => {
    const ACTIVATE = "activate";
    const [mainImage, setMainImage] = useState(testPlace.images[0]);

    const handleMageImage = (image) => {
        setMainImage(image);
    };

    const handleBookmark = (event) => {
        const classList = event.target.classList;
        const isActivate = classList.contains(ACTIVATE);

        isActivate ? classList.remove(ACTIVATE) : classList.add(ACTIVATE);
    }

    return (
        <Container>
            <MainImage src={mainImage} />
            <SubImageContainer>
                {testPlace.images
                    .map(place => <SubImage src={place} onClick={() => handleMageImage(place)} />)}
            </SubImageContainer>
            <InfoContainer>
                <TitleBox>
                    <div>
                        <Title>{testPlace.name}</Title>
                        <Grade>{testPlace.grade_avg}</Grade>
                    </div>
                    <div>
                        <Bookmark onClick={handleBookmark} />
                    </div>
                </TitleBox>
                <DetailBox>
                    <DetailTitleBox>
                        <Detail>
                            <div>주소</div>
                            <div>{testPlace.address}</div>
                        </Detail>
                        <Detail>
                            <div>설명</div>
                            <div>{testPlace.description}</div>
                        </Detail>
                    </DetailTitleBox>
                </DetailBox>
            </InfoContainer>
        </Container>
    )
};

export default PlaceInfo;
