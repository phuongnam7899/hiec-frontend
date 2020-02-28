import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom"

const ImageWithTitleContainer = styled(NavLink)`
    color : #000000;
    text-decoration : none;
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
    height : 75%;
    transition : background-size .3s;
}
`
const Title = styled.h2`
    font-size: ${props => props.type === "big" ?  "24px" : "16px"};
    margin : 8px 0px;
    max-width : 100%;
    overflow-wrap : break-word;
`
const Description = styled.div`
    font-size : 18px;
    margin : 8px 0px;
`
const Date = styled.div`
    font-size : 14px;
    color : #707070;
`

const ImageWithTitle = (props) => {
    return(
        <ImageWithTitleContainer to ={props.toHref} >
            <Img imgSrc={props.imgUrl} className="img"></Img>
            {
                props.title ? <Title type={props.type} className="title">{props.title}</Title> : null
            }
            {
                props.description ? <Description>{props.description}</Description> : null
            }
            {
                props.date ? <Date type={props.type}>{props.date}</Date> : null
            }
            
        </ImageWithTitleContainer>
    )
}

export default ImageWithTitle