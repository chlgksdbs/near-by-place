import React from "react";

import TestPlaceImg from "../../../assets/test-place2.jpg";
import {Container} from "../MatchHistory/style";
import BookmarkedPlace from "../../Card/BookmarkedPlace";

const testBookmark = [
    {
        placeImg: TestPlaceImg,
        name: "체이스 센터",
        address: "경기도 용인시 수지구 죽전동",
        description: "농구장"
    },
    {
        placeImg: TestPlaceImg,
        name: "체이스 센터",
        address: "경기도 용인시 수지구 죽전동",
        description: "농구장"
    }
];

const Bookmark = () => {
    return (
        <Container>
            {testBookmark.map(el => <BookmarkedPlace place={el} />)}
        </Container>
    )
};

export default Bookmark;
