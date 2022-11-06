import React from 'react';

import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import SearchBar from "../../components/SearchBar";
import Card from "../../components/Card/RecommendedPlace";
import PlaceImg from "../../assets/place.png";
import LocationImg from "../../assets/location.png";
import {CardBox, CardContainer, CardTitle, Container, MoreButton} from "./style";

const Home = () => {
    return (
        <Container>
            <Header />
            <Carousel />
            <SearchBar />
            <CardContainer>
                <CardTitle>
                    <h3>추천 장소</h3>
                </CardTitle>
                <CardBox>
                    {[PlaceImg, PlaceImg, PlaceImg]
                        .map(img => <Card image={img} />)}
                </CardBox>
                <MoreButton>
                    <img src={LocationImg} sizes={20} height={20} />
                    <div>More</div>
                </MoreButton>
            </CardContainer>
        </Container>
    )

}

export default Home;
