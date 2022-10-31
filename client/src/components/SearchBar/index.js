import React from "react";

import {Container, SearchArea, SearchIcon} from "./style";
import Search from "../../assets/search.png";

const SearchBar = () => {
    return (
        <Container>
            <SearchArea placeholder="원하는 장소를 검색해보세요!" />
            <SearchIcon src={Search} />
        </Container>
    )
}

export default SearchBar;
