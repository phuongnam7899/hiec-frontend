import React, { useState } from 'react'
import styled, { ThemeProvider } from "styled-components"
import { NavLink, Link, withRouter, BrowserRouter as Router } from "react-router-dom";
import {Container} from "../container/container"

const BackgroundNav = styled.div`
    background-color:${props => props.theme.darkMode ? "#494949" : "white"};
    height:60px;
`;

// const Container = styled.div`
//     margin: 0px 90px;
//     height:100%;
//     position:relative;

// `;
const Logo = styled.img`
    width : auto;
    max-height : 50px;
`;
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

const Ul = styled.ul`
    display : flex;
    flex-direction : row;
    justify-content : flex-end;
    height: 100%;
`;

const Li = styled.li`
    display : block;
    margin : auto 32px;
`;

const Options = styled.div`
    background-color:${props => props.theme.darkMode ? "#EFEFEF" : "#3E3E3E"};
    position:absolute;
    right: 0px;
    top: 65px;
    width: 180px;
`;

const Polygon = styled.div`
    z-index:999;
    position:absolute;
    width:20px;
    height:10px;
    clip-path:polygon(50% 0%, 0% 100%, 100% 100%);
    right:0px;
    top:55px;
    background-color:${props => props.theme.darkMode ? "#EFEFEF" : "#3E3E3E"};
`

const LiOptions = styled.div`
    padding : 8px 0px;
    width:100%;
    text-align:center;
    &:hover{
        background-color: #37A28D;
        transition : 0.3s all;
    }
    
`

const OptionLink = styled(NavLink)`
    ${props => props.theme.darkMode ? {
        color: "black",
        textDecoration: "none",
        fontWeight: "bold",
        fontFamily: "-apple-system, BlinkMacSystemFont,'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        ":hover": {
            color: "white",
        }
    } : {
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            fontFamily: "-apple-system, BlinkMacSystemFont,'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

        }}
`
const NavBarLink = styled(NavLink)`
        ${props => props.theme.darkMode ? {
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
        fontFamily: "-apple-system, BlinkMacSystemFont,'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    } : {
            color: "black",
            textDecoration: "none",
            fontWeight: "bold",
            fontFamily: "-apple-system, BlinkMacSystemFont,'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        }}
`


const Avatar = styled.img`
  height:40px;
  border-radius:999px;
`;
const AvatarBackground = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : flex-end;
    align-items:center;
    height: 100%;
    cursor: pointer;
`;

function HookNavBar() {
    const [toggleUser, setToggleUser] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const Option = toggleUser ?
        <>
            <Polygon></Polygon>
            <Options>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "16px 0px" }}>
                    <LiOptions onClick = {()=>setToggleUser(!toggleUser)}>
                        <OptionLink to={"/profile/" + toggleUser} >Trang Cá Nhân</OptionLink>
                    </LiOptions>
                    <LiOptions onClick = {()=>setToggleUser(!toggleUser)}>
                        <OptionLink to={"/change-password"} >Đổi Mật Khẩu</OptionLink>
                    </LiOptions>
                    <LiOptions onClick = {()=>setToggleUser(!toggleUser)}>
                        <OptionLink to={"/sign-in"} >Đăng Xuất</OptionLink>
                    </LiOptions>
                </div>
            </Options>
        </>
        : <></>
    return (

        <div>
            <ThemeProvider theme={{ darkMode: isDarkMode }}>
                <Router>
                    <BackgroundNav>
                        <Container>
                            <MiddleRow>
                                <FlexGrow grow={12} style={{ margin: "auto 0px" }}>
                                    <Logo src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/p960x960/74380224_103054094497511_454555054863548416_o.jpg?_nc_cat=105&_nc_ohc=I5Z82GveQl0AX_TdRJ5&_nc_ht=scontent.fhan4-1.fna&_nc_tp=6&oh=7dd4035c44393dd25ad1e8d2d1ab2d0c&oe=5EB72A6C" />
                                </FlexGrow>
                                <FlexGrow grow={66} >
                                    <Ul>
                                        <Li>
                                            <NavBarLink to="/" exact activeStyle={styleActiveLink} >Trang Chủ</NavBarLink>
                                        </Li>
                                        <Li>
                                            <NavBarLink to="/news" activeStyle={styleActiveLink} >Tin Tức</NavBarLink>
                                        </Li>
                                        <Li>
                                            <NavBarLink to="/project" activeStyle={styleActiveLink}  >Dự Án</NavBarLink>
                                        </Li>
                                        <Li>
                                            <NavBarLink to="/forum" activeStyle={styleActiveLink} >Diễn Đàn</NavBarLink>
                                        </Li>
                                        <Li>
                                            <NavBarLink to="/about-us" activeStyle={styleActiveLink} >Về Chúng Tôi</NavBarLink>
                                        </Li>
                                    </Ul>
                                </FlexGrow>
                                <FlexGrow onClick={() => { setToggleUser(!toggleUser) }} grow={8}  >
                                    <AvatarBackground>
                                        <Avatar src="https://tindongvathome.files.wordpress.com/2019/06/cho-husky-3.jpg" />
                                        <i style={isDarkMode ? { color: "white", marginLeft: "12px" } : { color: "#AEAEAE", marginLeft: "12px" }} className="fas fa-chevron-down"></i>
                                    </AvatarBackground>
                                </FlexGrow>
                            </MiddleRow>
                            {Option}
                        </Container>
                    </BackgroundNav>
                </Router>
            </ThemeProvider>
            <button onClick = {()=>setIsDarkMode(!isDarkMode)}> MODE </button>
        </div>
    )
}
const styleActiveLink = {
    color: '#37A28D',
}



export default HookNavBar;
