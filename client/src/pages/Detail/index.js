import React from "react";

import PlaceInfo from "../../components/PlaceInfo";
import MatchList from "../../components/MatchList";
import Header from "../../components/Header";
import {Container, DetailContainer} from "./style";

const Detail = () => {
    return (
        <Container>
            <Header />
            <DetailContainer>
                <PlaceInfo />
                <MatchList />
            </DetailContainer>
        </Container>
    )
};

export default Detail;
