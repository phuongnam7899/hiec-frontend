import React, { useState } from 'react'
import styled, { ThemeProvider } from "styled-components"
import { NavLink, Link, withRouter, BrowserRouter as Router } from "react-router-dom";
import {Container} from "../container/container"
const BackgroundNav = styled.div`
    background-color:${props => props.theme.darkMode ? "#494949" : "white"};
    height:60px;
`;

// const Container = styled.div`
//     margin: 0px 10px;
//     height:100%;
//     position:relative;

// `;

const MiddleRow = styled.div`
    display : flex;
    flex-direction : row;
    height:100%;
    
`;


const FlexGrow = styled.div.attrs(props => ({
    grow: props.grow || 1,
}))`
    flex-grow : ${props => props.grow}
  `;
const Logo = styled.img`
  width : auto;
  max-height : 50px;
`;

function HookMobileNavBar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <div>
            <ThemeProvider theme={{ darkMode: isDarkMode }}>
                <Router>
                    <BackgroundNav>
                        <Container>
                            <MiddleRow>
                                <FlexGrow grow={1} style={{ margin: "auto 0px" }}>
                                    <Logo src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/p960x960/74380224_103054094497511_454555054863548416_o.jpg?_nc_cat=105&_nc_ohc=I5Z82GveQl0AX_TdRJ5&_nc_ht=scontent.fhan4-1.fna&_nc_tp=6&oh=7dd4035c44393dd25ad1e8d2d1ab2d0c&oe=5EB72A6C" />
                                </FlexGrow>
                                <FlexGrow grow = {1}>
                                </FlexGrow>
                            </MiddleRow>
                        </Container>
                    </BackgroundNav>
                </Router>
            </ThemeProvider>
        </div>
    )
}

export default HookMobileNavBar
