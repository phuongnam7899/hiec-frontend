import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import convert2vw from "../../../utils/convert2vw"
import {breakpoint} from "../../../styles/mixin"
import BannerBG from "../../../static/images/web_banner.png"

const Title = styled.h1`
    font-size : 60px;
    font-weight : 600;
    ${breakpoint.ml`
    font-size : 30px;
    `}
`
const Description = styled.p`
    max-width : 45%;
    font-size : 22px;
    margin : 52px 0px;
    text-align: justify;
    font-weight : 400;
    ${breakpoint.ml`
    font-size : 16px;
    max-width : 75%;

    `}
`

const BannerContainer = styled.div`
    display : flex;
    flex-direction : column;
    color : #222222;
    justify-content : flex-end;
    max-width : 100vw;
    padding: 64px;
    height : 100vh;
    background-image : url(${BannerBG});
    background-size : 100% 100%;
    // margin-top : calc(0px + (13.6px - 1vw)*5);
    ${breakpoint.ls`
        background-size : cover;
        background-position : center;
    `}
`
const ButtonsContainer = styled.div`
    display : flex;
    justify-content : space-between;
    width : 30%;
    margin-bottom: 5vh;
    ${breakpoint.ls`
    width : 40%;
`}
    ${breakpoint.tb`
    width : 50%;
`}
    ${breakpoint.ml`
        width : 60%;
    `}
    ${breakpoint.ms`
    width : 70%;
`}
`
const Button = styled(NavLink)`
    display : block;
    text-decoration : none;
    min-width : 167px;
    min-height : 40px;
    border-radius : 10px;
    color : #ffffff;
    text-align:center;
    line-height : 48px;
    padding : 4px 10px;
    border : none;
    font-size : 24px;
    font-weight : 600;
    &:hover {
        transform : scale(1.02)
    }
    ${breakpoint.ml`
    min-width : 100px;
    min-height : 30px;
    line-height : 20px;
    font-size : 16px;
    padding : 8px 10px;
`}
`
const ButtonRed = styled(Button)`
    background-color : #a24d37;
        &:hover {
            background-color: #c25a40;
        }
`
const ButtonGreen = styled(Button)`
    background-color : #37a28d;
    &:hover {
        background-color: #3fbfa7;
    }
`

const goToLink = (href) => {
    // console.log(window.location.href)
}

const Banner = (props) => {

    const descriptionContent = !localStorage.getItem("hiec_user_token") ? "Global Community for Young Entrepreneurs - this platform is a global community designed to educate, inspire, and connect entrepreneurs." : "Global Community for Young Entrepreneurs - this platform is a global community designed to educate, inspire, and connect entrepreneurs."
    return(
        <BannerContainer>
            <Title>Beyond the Infinity</Title>

    <Description>{descriptionContent}</Description>
            {!localStorage.getItem("hiec_user_token") ? 
            <ButtonsContainer>
                <ButtonRed to="/sign-up">Đăng kí</ButtonRed>
                <ButtonGreen to="/sign-in" >Đăng nhập</ButtonGreen>
            </ButtonsContainer> : null }
        </BannerContainer>
    )
}

export default Banner