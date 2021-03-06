import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import convert2vw from "../../../utils/convert2vw"
import {breakpoint} from "../../../styles/mixin"
import BannerBG from "../../../static/images/web_banner.jpeg"

const Title = styled.h1`
    font-size : 56px;
    font-weight : 600;
    ${breakpoint.tb`
    font-size : 32px;
    `}
    ${breakpoint.ml`
    font-size : 30px;
    max-width : 100%;

    `}
`
const Description = styled.p`
    max-width : 45%;
    font-size : 20px;
    margin : 40px 0px;
    font-weight : 400;
    ${breakpoint.tb`
    font-size : 16px;
    max-width : 65%;
    margin : 30px 0px;

    `}
    ${breakpoint.ml`
    font-size : 16px;
    max-width : 100%;

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
    ${breakpoint.ml`
        background-size : 400% 130vh;
        background-position : 37% 120%;
        background-repeat: no-repeat;
        padding : 64px 50px;
    justify-content : center;


    `}
`
const ButtonsContainer = styled.div`
    display : flex;
    justify-content : space-between;
    width : 30%;
    margin-bottom: ${!localStorage.getItem("hiec_user_token") ? "5vh" : "10vh"};
    ${breakpoint.ls`
    width : 40%;
`}
    ${breakpoint.tb`
    width : 40%;
`}
    ${breakpoint.ml`
        width : 80%;
    `}
    ${breakpoint.mm`
    width : 100%;
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
    font-size : 22px;
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
    ${breakpoint.tb`
        font-size : 12px;
        min-width : 100px;
        min-height : 20px;
        height : 30px;
        line-height : 1.6;
    `}
    ${breakpoint.ml`
        line-height : 1.2;
    `}
`
const ButtonGreen = styled(Button)`
    background-color : #37a28d;
    &:hover {
        background-color: #41b2eb;
    }
    ${breakpoint.tb`
    font-size : 12px;
    min-width : 100px;
    min-height : 20px;
    height : 30px;
    line-height : 1.6;
    ${breakpoint.ml`
        line-height : 1.2;
    `}
`}
`

const goToLink = (href) => {
    // console.log(window.location.href)
}

const Banner = (props) => {

    const descriptionContent = !localStorage.getItem("hiec_user_token") ? "Cộng đồng các doanh nhân trẻ - nơi giáo dục, truyền cảm hứng và kết nối những người có chung niềm đam mê Khởi nghiệp - Kinh doanh." : "Cộng đồng các doanh nhân trẻ - nơi giáo dục, truyền cảm hứng và kết nối những người có chung niềm đam mê Khởi nghiệp - Kinh doanh."
    return(
        <BannerContainer>
            <Title>Beyond the Infinity</Title>

    <Description>{descriptionContent}</Description>
            <ButtonsContainer>
            {!localStorage.getItem("hiec_user_token") ? 
            (<>
                <ButtonRed to="/sign-up">Đăng kí</ButtonRed>
                <ButtonGreen to="/sign-in" >Đăng nhập</ButtonGreen>
            </> ): null
            }
            </ButtonsContainer>
        </BannerContainer>
    )
}

export default Banner