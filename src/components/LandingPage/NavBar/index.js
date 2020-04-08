import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux"
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import MobileNav from "../../NavBar/MobileNavBar/index"

import {addToken ,deleteToken} from "../../../actions/token"
import {saveUser, deleteUser} from "../../../actions/user"
import Container from '../../Container'

const AvatarBackground = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : flex-end;
    align-items:center;
    cursor: pointer;  
    margin : 0 36px;
    position : relative;


`

const Avatar = styled.img`
  height:40px;
  width: 40px;
  border-radius:999px;
  object-fit: cover;
  
  `

const NavContainer = styled.div`
    height : 60px;
    position: absolute;
    top : 10px;
    width :  100%;
`
const NavOptions = styled.div`
    display : flex;
    flex-diretion : row;
    justify-content : flex-end;
    position : relative;
    `
const Optional = styled(NavLink)`
    text-decoration : none;
    
    color :  #222;
    font-weight :700;
    font-size : 24px;
    margin : 0 36px;
    transition : 0.2s all;  
    &:hover{
        color : #666;
    }
`
const Polygon = styled.div`
z-index:998;
position:absolute;
width:20px;
height:10px;
clip-path:polygon(50% 0%, 0% 100%, 100% 100%);
right:0px;
top:56px;
background-color:${props => props.theme.darkMode ? "rgba(239, 239, 239,0.6)" : "rgba(62, 62, 62, 0.6)"};
`
const Options = styled.div`
background-color:${props => props.theme.darkMode ? "rgba(239, 239, 239,0.6)" : "rgba(62, 62, 62, 0.6)"};
position:absolute;
right: 0px;
top: 65px;
width: 180px;
border-radius : 5px;

`;
const OptionLink = styled(NavLink)`
padding : 8px 32px;
text-decoration: none;
font-weight: bold;
font-family: -apple-system, BlinkMacSystemFont,'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color  : ${props => props.theme.darkMode?'black':"white"};

`

const LiOptions = styled.div`
    padding : 8px 0px;
    width:100%;
    text-align:center;
    &:hover{
        background-color: #59d8ff;
        transition : 0.2s all;
    }
    
`

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


function NavBar() {
    const [toggleUser, setToggleUser] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();
    const user = useSelector(state=>state.user);
    const setLocal = ()=>{
        dispatch(deleteToken());
        dispatch(deleteUser());
        localStorage.setItem("hiec_user_id","");
        localStorage.setItem("hiec_user_token","");
    }
    
    const toProfile = () =>{
        window.location.assign("/profile/" + user._id);

    }




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

const User = token.token? <AvatarBackground onClick={() => { setToggleUser(!toggleUser) }}>
<Avatar src= {user.profile.avatar} />
<i style={isDarkMode ? { color: "white", marginLeft: "12px" } : { color: "white", marginLeft: "12px" }} className="fas fa-chevron-down"></i>
{Option}
</AvatarBackground> : <></>



    return (<>
        {window.innerWidth>1000?
        <NavContainer>
            <NavOptions>
                <Optional to = "/news">Tin tức</Optional>
                <Optional to = "/project">Dự án</Optional>
                <Optional to = "/forum">Diễn đàn</Optional>
                <Optional to = "/about-us">Về chúng tôi</Optional>
                {User}
            </NavOptions>
        </NavContainer>:
         <MobileNav></MobileNav>
        }
        </>
    )
}

export default NavBar
