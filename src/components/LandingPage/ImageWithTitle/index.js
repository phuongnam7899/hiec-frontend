import React from "react";
import styled from "styled-components";

const ImageWithTitleContainer = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    cursor : pointer;
    &:hover > .title {
        color : #1ABC9C;
    }
    &:hover > .img {
        background-size : 105% 105%;
    }
`
const Img = styled.div`
    background-image : url(${props => props.imgSrc || null});
    background-size : 100% 100%;
    width: 100%;
    height : 70%;
    transition : background-size .3s;
}
`
const Title = styled.h2`
    font-size: ${props => props.type === "big" ?  "24px" : "20px"};
    margin : 8px 0px;
`
const Description = styled.div`
    font-size : 18px;
    margin : 8px 0px;
`
const Date = styled.div`
    font-size : 18px;
    color : #707070;
`

const ImageWithTitle = (props) => {
    return(
        <ImageWithTitleContainer>
            <Img imgSrc={props.imgUrl} className="img"></Img>
            <Title type={props.type} className="title">{props.title}</Title>
            {
                props.description ? <Description>{props.description}</Description> : null
            }
            <Date type={props.type}>{props.date}</Date>
        </ImageWithTitleContainer>
    )
}

export default ImageWithTitle