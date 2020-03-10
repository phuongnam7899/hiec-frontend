import React from 'react'
import styled from "styled-components"
import { breakpoint } from "../../../styles/mixin"
import { Avatar, styleActiveLink, OptionLink } from '../style'
import { useSelector, useDispatch } from 'react-redux';
import { saveUser, deleteUser } from "../../../actions/user"
import { addToken, deleteToken } from "../../../actions/token"


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
    width: 100vw;
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
    // background-color : red;
`
const Option = styled.li`
    display : block;
    font-weight : 500;
    font-size : 20px;
    padding : 8px 0px;
    cursor : pointer;
    &:hover{
       background-color : rgba(black,0.2); 
    }

`

const ListOption = styled.ul`
    margin:0px 30px;
    margin-bottom : 40px;
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


    const signOut = () => {
        dispatch(deleteToken());
        dispatch(deleteUser());
        localStorage.setItem("hiec_user_id", "");
        localStorage.setItem("hiec_user_token", "");
    }
    const goToLink = (link) =>{
        window.location.assign(link)
    }
    const setVisible = (e) =>{
        props.offVisible(e);
    }

    return (
        <SlideGround visible={props.visible}>
            <AvaNameBlock onClick = {()=>{goToLink("/profile/"+user._id)}}>
            <Avatar src={avatar} />
            <Name>{name}</Name>
            </AvaNameBlock>
            <ListOption>
                <Option onClick = {()=>{goToLink("/")}}><i class="fas fa-home"></i> Trang Chủ</Option>
                <Option onClick = {()=>{goToLink("/news")}}>Tin Tức</Option>
                <Option onClick = {()=>{goToLink("/project")}}>Dự Án</Option>
                <Option onClick = {()=>{goToLink("/forum")}}>Diễn Đàn</Option>
                <Option onClick = {()=>{goToLink("/about-us")}}>Về Chúng Tôi</Option>
            </ListOption>
            <ListOption>
                <Option onClick = {()=>{goToLink("/change-password")}}>Đổi Mật Khẩu</Option>
                <Option onClick = {()=>{signOut()}}>Đăng Xuất</Option>
               
            </ListOption>
            <ListOption>
           
              <Option onClick = {setVisible}> <i class="fas fa-sign-out-alt"></i> Thoát</Option>
            </ListOption>
            <div style = {{width:"100%"}}>
                <Logo onClick = {()=>{goToLink("/")}} src = "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/87460570_497744691125483_1187986171662172160_n.png?_nc_cat=110&_nc_ohc=oY_irOj354gAX8KBPnc&_nc_ht=scontent.fhan2-4.fna&oh=895c58ec753afd651eb7b38c99cfd87a&oe=5F038AAD" />
            </div>
        </SlideGround>
    )
}

export default Slide
