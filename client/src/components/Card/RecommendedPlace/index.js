import React from "react";

import {CardImage, Container} from "./style";

const Card = (props) => {
    return (
        <>
            <Container>
                <CardImage src={props.image} />
            </Container>
        </>
    )
}

export default Card;
