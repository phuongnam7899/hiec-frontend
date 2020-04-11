import React, { useEffect } from "react";
import styled from "styled-components";
import Container from "../Container"
import Banner from "./Banner";
import News from "./News";
import Project from "./Project"
import Forum from "./Forum"
import Leaderboard from "./Leaderboard"
import withNavAndFooter from "../HOC/withNavAndFooter"
import {breakpoint} from "../../styles/mixin"
import NavBar from "./NavBar";


const LandingPageContainer = styled.div`
  
    background : rgb(246, 246, 246);

`
const FormAndLeaderboard = styled.div`
    display : flex;
    min-height : 100vh;
    width : 100%;
    justify-content : space-between;
    ${breakpoint.tb`
        flex-direction : column;
        justify-content : flex-start;
    `}

`
const MenuContainer = styled(Container)`
    display : flex;
    flex-direction : column;
`

const LandingPage = (props) => {
    useEffect(() => {
        document.title = "HIEC - Trang chủ";
        window.scrollTo(0,0);
    },[])
    return(
        <LandingPageContainer>
            <NavBar />
            <Banner>
            </Banner>
            <MenuContainer>
                <News></News>
                <Project></Project>
                <FormAndLeaderboard>
                    <Forum></Forum>
                    <Leaderboard></Leaderboard>
                </FormAndLeaderboard>
            </MenuContainer>
        </LandingPageContainer>
    )
}

export default withNavAndFooter(LandingPage);