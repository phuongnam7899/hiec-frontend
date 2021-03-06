import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from "styled-components"
import { NavLink, Link, withRouter, BrowserRouter as Router } from "react-router-dom";
import Container from "../Container"
import { useSelector, useDispatch } from 'react-redux';
import {addToken ,deleteToken} from "../../actions/token"
import {saveUser, deleteUser} from "../../actions/user"
import {BackgroundNav,Li,OptionLink,MiddleRow,LiOptions,Options,ProfilePage,Avatar,AvatarBackground,Polygon,FlexGrow,
    Logo,Ul,NavBarLink,styleActiveLink
}from "./style"

import MobileNavBar from "./MobileNavBar/index"
import axios from "../../axios"
import LogoNav from "../../static/images/logo-nav.png"
function HookNavBar(props) {
    const [toggleUser, setToggleUser] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const dispatch = useDispatch();
    const token = useSelector(state => state.token);
    const user = useSelector(state=>state.user);


    const goToHomepage = () =>{
        window.location.assign("/");
    }
    const setLocal = ()=>{
        axios.delete(`/api/auth/sign-out?token=${localStorage.getItem("hiec_user_token")}&id=${localStorage.getItem("hiec_user_id")}`)
        dispatch(deleteToken());
        dispatch(deleteUser());
        localStorage.setItem("hiec_user_id","");
        localStorage.setItem("hiec_user_token","");
    }

    const toProfile = () =>{
        window.location.assign("/profile/" + user._id);

    }

    const User = token.token? <AvatarBackground onClick={() => { setToggleUser(!toggleUser) }}>
        <Avatar src= {user.profile.avatar || "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcVTlEXUHIyBJGKGKRcdKVOYhb22zka6_CZ0VwJ4z2c7wSlWw6&usqp=CAU"} align="middle"/>
        <i style={isDarkMode ? { color: "white", marginLeft: "12px" } : { color: "#AEAEAE", marginLeft: "12px" }} className="fas fa-chevron-down"></i>
    </AvatarBackground> : <></>

    const Option = toggleUser ?
        <>
            <Polygon></Polygon>
            <Options>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "16px 0px" }}>
                    <LiOptions onClick={() => setToggleUser(!toggleUser)}>
                        <ProfilePage onClick = {toProfile}>Trang Cá Nhân</ProfilePage>
                    </LiOptions>
                    <LiOptions onClick={() => setToggleUser(!toggleUser)}>
                        <OptionLink to={"/change-password"}  >Đổi Mật Khẩu</OptionLink>
                    </LiOptions>
                    <LiOptions onClick={() => setToggleUser(!toggleUser)}>
                        <OptionLink to={"/sign-in"} onClick={setLocal} >Đăng Xuất</OptionLink>
                    </LiOptions>
                </div>
            </Options>
        </>
        : <></>




    return (

        <div  style  = {{position:"fixed",top:0, zIndex : 500}}>
            <ThemeProvider theme={{ darkMode: isDarkMode }}>
            {
                window.innerWidth>768?<>
                    <BackgroundNav>
                            <MiddleRow>
                                <FlexGrow grow={12}>
                                    <Logo onClick = {goToHomepage} src={LogoNav} />
                                </FlexGrow>

                                <FlexGrow grow={66} >
                                    <Ul>
                                        <Li>
                                            <NavBarLink  to="/" exact activeStyle={styleActiveLink} >Trang Chủ</NavBarLink>
                                        </Li>
                                        <Li>
                                            <NavBarLink to="/news" activeStyle={styleActiveLink} >Tin Tức</NavBarLink>
                                        </Li>
                                        <Li>
                                            <NavBarLink to="/project" activeStyle={styleActiveLink}  >Cơ Hội</NavBarLink>
                                        </Li>
                                        <Li>
                                            <NavBarLink to="/forum" activeStyle={styleActiveLink}>Diễn Đàn</NavBarLink>
                                        </Li>
                                        <Li>
                                            <NavBarLink to="/about-us" activeStyle={styleActiveLink} >Về Chúng Tôi</NavBarLink>
                                        </Li>
                                    </Ul>
                                </FlexGrow>
                                <FlexGrow grow={8} style = {{position:"relative"}} >
                                    {User}
                                    {Option}
                                </FlexGrow>
                               
                                
                            </MiddleRow>
                    </BackgroundNav>
                    </>:<MobileNavBar></MobileNavBar>
            }
            </ThemeProvider>
        </div>
    )
}




export default withRouter(HookNavBar);
