import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom"

const Title = styled.h1`
    font-size : 72px;
    font-weight : 900;
`
const Description = styled.p`
    max-width : 45%;
    font-size : 22px;
    margin : 52px 0px;
    text-align : center;
    font-weight : 500;
`

const BannerContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    color : #FFFFFF;
    justify-content : center;
    max-width : 100vw;
    height : calc(100vh - 60px);
    background-image : url(https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/84351595_2573974126212653_3668950583970103296_n.png?_nc_cat=103&_nc_ohc=oTJvSlhv-FMAX-Df-tl&_nc_ht=scontent.fhan2-4.fna&oh=5d03e3e3be2a4282d12a20e306b58cc8&oe=5ED98D91);
    background-size : cover;
`
const ButtonsContainer = styled.div`
    display : flex;
    justify-content : space-between;
    width : 30%
`
const Button = styled(NavLink)`
    display : block;
    text-decoration : none;
    min-width : 167px;
    min-height : 48px;
    border-radius : 10px;
    color : #FFFFFF;
    text-align:center;
    line-height : 48px;
    padding : 4px 10px;
    border : none;
    font-size : 24px;
    font-weight : 900;
    &:hover {
        transform : scale(1.02)
    }
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
        <Router>
        <BannerContainer>
            <Title>Beyond the infinity</Title>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec dui hendrerit, luctus urna a, sagittis sapien.</Description>
            <ButtonsContainer>
                <ButtonRed to="/register">Đăng kí</ButtonRed>
                <ButtonGreen to="/login" >Đăng nhập</ButtonGreen>
            </ButtonsContainer>
        </BannerContainer>
        </Router>
    )
}

export default Banner