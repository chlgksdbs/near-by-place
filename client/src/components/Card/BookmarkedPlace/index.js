import React from "react";

import {Container, DetailContainer, PlaceImg} from "../Match/style";

const BookmarkedPlace = (props) => {
    const { placeImg, name, address, description } = props.place;

    return (
        <Container>
            <PlaceImg src={placeImg} />
            <DetailContainer>
                <div>
                    <span>이름:</span>
                    <span>{name}</span>
                </div>
                <div>
                    <span>주소:</span>
                    <span>{address}</span>
                </div>
                <div>
                    <span>설명:</span>
                    <span>{description}</span>
                </div>
            </DetailContainer>
        </Container>
    )
};

export default BookmarkedPlace;
