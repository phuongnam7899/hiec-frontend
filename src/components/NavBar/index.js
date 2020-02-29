import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from "styled-components"
import { NavLink, Link, withRouter, BrowserRouter as Router } from "react-router-dom";
import Container from "../Container"
import { useSelector, useDispatch } from 'react-redux';
import {addToken ,deleteToken} from "../../actions/token"
import {saveUser, deleteUser} from "../../actions/user"
const BackgroundNav = styled.div`
    background-color:${props => props.theme.darkMode ? "#494949" : "white"};
    height:60px;
    width: 100vw;
    box-shadow: 0px 4px 4px rgba(193,193,193,0.25);
`;

// const Container = styled.div`
//     margin: 0px 90px;
//     height:100%;
//     position:relative;

// `;
const Logo = styled.img`
    display : block;
    width : 40px;
    height : 40px;
    max-height : 40px;
    max-width: 40px;
    margin : auto 0;
    cursor : pointer;

`;
const MiddleRow = styled(Container)`
    display : flex;
    align-items : center;

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
    border-radius : 5px;
   
`;

const Polygon = styled.div`
    z-index:998;
    position:absolute;
    width:20px;
    height:10px;
    clip-path:polygon(50% 0%, 0% 100%, 100% 100%);
    right:0px;
    top:57px;
    background-color:${props => props.theme.darkMode ? "#EFEFEF" : "#3E3E3E"};
`

const LiOptions = styled.div`
    padding : 8px 0px;
    width:100%;
    text-align:center;
    &:hover{
        background-color: #37A28D;
        transition : 0.2s all;
    }
    
`

const OptionLink = styled(NavLink)`
    padding : 8px 32px;

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
  width: 40px;
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

const ProfilePage = styled.span`
padding : 8px 32px;
cursor : pointer;

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

function HookNavBar(props) {
    const [toggleUser, setToggleUser] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const dispatch = useDispatch();
    // NOTE : phần giả định token 
//     const aToken = 
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBodW9uZ25hbTc4OTlAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjMxMjMiLCJpYXQiOjE1ODA5NjEzMTZ9.zsj2ac61JwVXOOLRzlct3Q5k6UQwgMazZ4-18GthjHs"
//     const aUser = {
//         isAdmin: false,
//        _id :"#894895688325t3468",
//         profile: {
//             name: "THAI NGUYEN",
//             gender: "NAM",
//             phoneNumber: "435568404",
//             dob: "252//252",
//             occupation: {
//                 isWorking: false,
//                 describe: {} // jobTitle - companyName or school - major
//             },
//             address: "45/ ngách ",
//             avatar : "http://cdn.hoahoctro.vn/uploads/2018/10/5bc41f947aa93-1.jpg"
//         }
//     }
//     const getUserAndToken = ()=>{
//         dispatch(addToken(aToken));
//         dispatch(saveUser(aUser));
//     }
    const token = useSelector(state => state.token);
    const user = useSelector(state=>state.user);
    // console.log(user)
    // console.log(token)


    const goToHomepage = () =>{
        window.location.assign("/")
    }
    const setLocal = ()=>{
        dispatch(deleteToken());
        dispatch(deleteUser());
        localStorage.setItem("hiec_user_id","");
        localStorage.setItem("hiec_user_token","");
    }

    const toProfile = () =>{
        window.location.assign("/profile/" + user._id);

    }

    const User = token.token? <AvatarBackground onClick={() => { setToggleUser(!toggleUser) }}>
        <Avatar src= {user.profile.avatar} />
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

        <div style = {{position:"fixed",top:0, zIndex : 500}}>
            <ThemeProvider theme={{ darkMode: isDarkMode }}>
                    <BackgroundNav>
                            <MiddleRow>
                                <FlexGrow grow={12}>
                                    <Logo onClick = {goToHomepage} src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/87460570_497744691125483_1187986171662172160_n.png?_nc_cat=110&_nc_ohc=oY_irOj354gAX8KBPnc&_nc_ht=scontent.fhan2-4.fna&oh=895c58ec753afd651eb7b38c99cfd87a&oe=5F038AAD" />
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
            </ThemeProvider>
            {/* <button onClick = {()=>setIsDarkMode(!isDarkMode)}> MODE </button> */}
            {/* <button onClick={() => setIsDarkMode(!isDarkMode)}> MODE </button> */}
            {/* <button onClick={getUserAndToken}> A TOKEN </button> */}
        </div>
    )
}
const styleActiveLink = {
    color: '#37A28D',
}



export default withRouter(HookNavBar);
