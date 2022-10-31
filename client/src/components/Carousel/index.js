import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container, CarouselImage, CarouselSlider } from "./style";
import Carousel1 from "../../assets/carousel-image1.jpg";
import Carousel2 from "../../assets/carousel-image2.jpg";
import Carousel3 from "../../assets/carousel-image3.png";
import Carousel4 from "../../assets/carousel-image4.png";

const Carousel = () => {

    const carousel = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px"
    };

    return (
        <>
            <Container>
                <CarouselSlider {...carousel}>
                    { [Carousel1, Carousel2, Carousel3, Carousel4]
                        .map(image => <CarouselImage src={image} />) }
                </CarouselSlider>
            </Container>
        </>
    );
}

export default Carousel;
