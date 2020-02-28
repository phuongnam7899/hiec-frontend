import React from "react"
import styled from "styled-components"
import withNavAndFooter from "../HOC/withNavAndFooter"

const AboutUsPageContainer = styled.div`
    max-width : 100vw;
    height : 300vw;
    background-image : url(https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/87515350_1018691335179111_5778448428807749632_n.jpg?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=kr62LLGM-EoAX_bzTsL&_nc_ht=scontent.fhan2-3.fna&oh=9df05758d750c26d8bd5eab5f27625d2&oe=5EFDE9E5);
    background-size : 100% 100%;
`

const AboutUsPage = () => {
    return (
        <AboutUsPageContainer>

        </AboutUsPageContainer>
    )
}

export default withNavAndFooter(AboutUsPage, false)