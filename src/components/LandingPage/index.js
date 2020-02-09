import React from "react";
import styled from "styled-components";
import Container from "../Container"
import Banner from "./Banner";
import News from "./News"

const LandingPageContainer = styled.div`
    background-color : #F6F6F6;
`

const LandingPage = (props) => {
    return(
        <LandingPageContainer>
            <Banner>

            </Banner>
            <Container>
                <News>

                </News>
                {/* <Project>

                </Project>
                <Forum>

                </Forum> */}
                {/* <Leaderboard>

                </Leaderboard> */}
            </Container>
        </LandingPageContainer>
    )
}

export default LandingPage;