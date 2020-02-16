import React from "react";
import styled from "styled-components";
import Container from "../Container"
import Banner from "./Banner";
import News from "./News";
import Project from "./Project"
import Forum from "./Forum"
import Leaderboard from "./Leaderboard"


const LandingPageContainer = styled.div`
    background-color : #F6F6F6;
`
const FormAndLeaderboard = styled.div`
    display : flex;
    height : 100vh;
    width : 100%;
    justify-content : space-between;
`

const LandingPage = (props) => {
    return(
        <LandingPageContainer>
            <Banner>

            </Banner>
            <Container>
                <News></News>
                <Project></Project>
                <FormAndLeaderboard>
                    <Forum></Forum>
                    <Leaderboard></Leaderboard>
                </FormAndLeaderboard>
            </Container>
        </LandingPageContainer>
    )
}

export default LandingPage;