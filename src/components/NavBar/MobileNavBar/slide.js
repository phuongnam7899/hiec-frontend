import React from 'react'
import styled from "styled-components"
import { breakpoint } from "../../../styles/mixin"
import { Avatar, styleActiveLink, OptionLink } from '../style'
import { useSelector, useDispatch } from 'react-redux';
import { saveUser, deleteUser } from "../../../actions/user"
import { addToken, deleteToken } from "../../../actions/token"
import { NavLink } from 'react-router-dom';
import axios from '../../../axios';
import LogoNav from "../../../static/images/logo-nav.png"
const BackgroundNav = styled.div.attrs(props => ({
    visible: props.visible || false,
}))`
    
    position : fixed;
    z-index : 9999;
    width : ${props => props.visible?"100vw":"0px"};
    height : 100vh;
    background-color : rgba(1,1,1,0.6);

`
const SlideGround = styled.div.attrs(props => ({
    visible: props.visible || false,
}))`
    position : fixed;
    right : ${props => props.visible ? "0px" : "-1000px"};
    transition : 1s all;
    top : 0;
    z-index : 10000;
    height : 100vh;
    background-color : #fff;
    ${breakpoint.tb`
        width: 40vw;
    `}
    ${breakpoint.ml`
        width: 70vw;
    `}

`

const Name = styled.span`
    font-size : 16px;
    margin-left : 12px;
    font-weight : 700;
`
const AvaNameBlock = styled.div`
    width : 100%;
    padding:30px 30px;
    display : flex;
    align-items : center;
    cursor : pointer;
`
const Option = styled(NavLink)`
    display : block;
    font-weight : 500;
    font-size : 20px;
    padding : 8px 30px;
    cursor : pointer;
    text-decoration : none;
    color : black;
    &:hover{
       background-color :#BABABA; 
    //    color : white;
    }
`

const Back = styled.div`
    display : block;
    font-weight : 500;
    font-size : 24px;
    padding : 8px 30px;
    cursor : pointer;
    &:hover{
        background-color :#BABABA; 
        // color : white;
    }
`

const ListOption = styled.ul`
    margin: 20px 0px;

`

const Logo = styled.img`
    position : absolute;
    z-index : 10001;
    bottom : 10px;
    left : 50%;
    transform : translate(-50%,0%);
    width : auto;
    cursor : pointer;
    height : 10vh;
   
`


function Slide(props) {
    const user = useSelector(state => state.user);
    const { avatar, name } = user.profile;
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();


    const signOut = (e) => {
        axios.delete(`/api/auth/sign-out?token=${localStorage.getItem("hiec_user_token")}&id=${localStorage.getItem("hiec_user_id")}`)
        dispatch(deleteToken());
        dispatch(deleteUser());
        localStorage.setItem("hiec_user_id", "");
        localStorage.setItem("hiec_user_token", "");
        props.offVisible(e);

    }
    const goToLink = (link) => {
        window.location.assign(link)
    }
    const setVisible = (e) => {
        e.stopPropagation();
        props.offVisible(e);
    }

    return (
        <BackgroundNav visible={props.visible}>
        <SlideGround visible={props.visible}>
            {token.token?
            <AvaNameBlock onClick={() => { goToLink("/profile/" + user._id) }}>
                <Avatar align="middle" src={avatar} />
                <Name>{name}</Name>
            </AvaNameBlock>:<></>
            }
            <ListOption>
                <Option activeStyle={styleActiveLink} exact to="/" onClick={() => { goToLink("/") }}>Trang Chủ</Option>
                <Option activeStyle={styleActiveLink} to="/news" onClick={() => { goToLink("/news") }}>Tin Tức</Option>
                <Option activeStyle={styleActiveLink} to="/project" onClick={() => { goToLink("/project") }}>Cơ Hội</Option>
                <Option activeStyle={styleActiveLink} to="/forum" onClick={() => { goToLink("/forum") }}>Diễn Đàn</Option>
                <Option activeStyle={styleActiveLink} to="/about-us" onClick={() => { goToLink("/about-us") }}>Về Chúng Tôi</Option>
            </ListOption>
            {token.token?
            <ListOption>
                <Option  activeStyle={styleActiveLink} to="/change-password" onClick={() => { goToLink("/change-password") }}>Đổi Mật Khẩu</Option>
                <Option to="/sign-in" onClick={signOut}>Đăng Xuất</Option>

            </ListOption>:
            <ListOption>
            <Option to = "/sign-in">Đăng Nhập</Option>
            <Option to = "/sign-up">Đăng Kí</Option>
        </ListOption>
            }
            <ListOption>

                <Back onClick={setVisible}><i className="fas fa-arrow-right"></i> </Back>
            </ListOption>
            <div style={{ width: "100%" }}>
                <Logo onClick={() => { goToLink("/") }} src= {LogoNav} />
            </div>
        </SlideGround>
        </BackgroundNav>
    )
}

export default Slide
