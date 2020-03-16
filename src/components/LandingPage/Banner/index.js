import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import convert2vw from "../../../utils/convert2vw"
import {breakpoint} from "../../../styles/mixin"

const Title = styled.h1`
    font-size : 72px;
    font-weight : 700;
    text-align : center;
    ${breakpoint.ml`
    font-size : 30px;
    `}
`
const Description = styled.p`
    max-width : 45%;
    font-size : 22px;
    margin : 52px 0px;
    text-align : center;
    font-weight : 500;
    ${breakpoint.ml`
    font-size : 16px;
    max-width : 75%;

    `}
`

const BannerContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    color : #eeeeee;
    justify-content : center;
    max-width : 100vw;
    height : 100vh;
    background-image : url(https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/84351595_2573974126212653_3668950583970103296_n.png?_nc_cat=103&_nc_ohc=oTJvSlhv-FMAX-Df-tl&_nc_ht=scontent.fhan2-4.fna&oh=5d03e3e3be2a4282d12a20e306b58cc8&oe=5ED98D91);
    background-size : cover;
    margin-top : calc(0px + (13.6px - 1vw)*5);
`
const ButtonsContainer = styled.div`
    display : flex;
    justify-content : space-between;
    width : 30%;
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
    color : #eeeeee;
    text-align:center;
    line-height : 48px;
    padding : 4px 10px;
    border : none;
    font-size : 24px;
    font-weight : 900;
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
    background-color : #D06145;
        &:hover {
            background-color: #c25a40;
        }
`
const ButtonGreen = styled(Button)`
    background-color : #45D0B6;
    &:hover {
        background-color: #3fbfa7;
    }
`

const goToLink = (href) => {
    console.log(window.location.href)
}

const Banner = (props) => {


    return(
        <BannerContainer>
            <Title>Beyond the infinity</Title>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec dui hendrerit, luctus urna a, sagittis sapien.</Description>
            <ButtonsContainer>
                <ButtonRed to="/sign-up">Đăng kí</ButtonRed>
                <ButtonGreen to="/sign-in" >Đăng nhập</ButtonGreen>
            </ButtonsContainer>
        </BannerContainer>
    )
}

export default Banner