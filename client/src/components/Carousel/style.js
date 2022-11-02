import styled from "@emotion/styled";
import Slider from "react-slick";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 400px;
    justify-content: space-around;
`;

export const CarouselSlider = styled(Slider)`
    width: 60%;
    height: 400px;
  
    .slick-list {
        height: 400px;
    }
`;

export const CarouselImage = styled.img`
    width: 100%;
    height: 400px;
    object-fit: fill;
`;
