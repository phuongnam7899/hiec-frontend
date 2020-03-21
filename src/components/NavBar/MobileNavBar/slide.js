import React from 'react'
import styled from "styled-components"
import { breakpoint } from "../../../styles/mixin"
import { Avatar, styleActiveLink, OptionLink } from '../style'
import { useSelector, useDispatch } from 'react-redux';
import { saveUser, deleteUser } from "../../../actions/user"
import { addToken, deleteToken } from "../../../actions/token"
import { NavLink } from 'react-router-dom';

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
                <Avatar src={avatar} />
                <Name>{name}</Name>
            </AvaNameBlock>:<></>
            }
            <ListOption>
                <Option activeStyle={styleActiveLink} exact to="/" onClick={() => { goToLink("/") }}>Trang Chủ</Option>
                <Option activeStyle={styleActiveLink} to="/news" onClick={() => { goToLink("/news") }}>Tin Tức</Option>
                <Option activeStyle={styleActiveLink} to="/project" onClick={() => { goToLink("/project") }}>Dự Án</Option>
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

                <Back onClick={setVisible}><i class="fas fa-arrow-right"></i> </Back>
            </ListOption>
            <div style={{ width: "100%" }}>
                <Logo onClick={() => { goToLink("/") }} src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/87460570_497744691125483_1187986171662172160_n.png?_nc_cat=110&_nc_ohc=oY_irOj354gAX8KBPnc&_nc_ht=scontent.fhan2-4.fna&oh=895c58ec753afd651eb7b38c99cfd87a&oe=5F038AAD" />
            </div>
        </SlideGround>
        </BackgroundNav>
    )
}

export default Slide
