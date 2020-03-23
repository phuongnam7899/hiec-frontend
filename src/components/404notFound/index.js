import React ,{useEffect}from 'react'
import styled from "styled-components"
import withNavAndFooter from '../HOC/withNavAndFooter'
import Container from '../Container'

const Background = styled.div`
    font-size : 30px;
    font-weight : 800;
    padding-top: 100px;
    height : 66vh;
`
const TxtNotFound = styled.span`
    margin-top : 10px;
    margin-left : 10px;
`
function NotFoundPage() {
    useEffect(() => {
        document.title = "404 NOT FOUND";
    }, [])
    return (
        <Background>
            <Container>
            <TxtNotFound>
            404 NOT FOUND
            </TxtNotFound>
            </Container>
        </Background>
    )
}

export default withNavAndFooter(NotFoundPage);
