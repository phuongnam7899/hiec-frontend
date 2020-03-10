import React, { useState } from 'react'
import { Logo, FlexGrow, BackgroundNav, MiddleRow, styleActiveLink ,AvatarBackground,Avatar,Polygon,ProfilePage,LiOptions
    ,OptionLink,Options} from "../style"


import styled from "styled-components"
import Slide from './slide';
const Icon = styled.i`
    display : block;
    margin : auto 0;
    float : right;
    font-size : 20px;
    cursor : pointer;
    transition : 0.3s all;
    margin-left : 20px;
    &:active{
        transform: rotate(90deg);
    }
    &:hover{
        color : rgb(55, 162, 141);
    }
`

const CoverBackground = styled.div`
    position : fixed;
    z-index : 1000;
    width  : 100%;
    height : 100vh;
    background-color : black;
    opacity : 0.7;
    transition : 10s all;
`
function MobileNavBar() {
    const [mobileNav, setMobileNav] = useState(false);

    const showMobileNav = (e) => {
        console.log("HHHH")
        e.stopPropagation()
        setMobileNav(!mobileNav);
    }
    
    const goToHomepage = () => {
        window.location.assign("/")
    }

    // const Option = toggleUser ?
    //     <>
    //         <Polygon></Polygon>
    //         <Options>
    //             <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "16px 0px" }}>
    //                 <LiOptions onClick={() => setToggleUser(!toggleUser)}>
    //                     <ProfilePage onClick={toProfile}>Trang Cá Nhân</ProfilePage>
    //                 </LiOptions>
    //                 <LiOptions onClick={() => setToggleUser(!toggleUser)}>
    //                     <OptionLink to={"/change-password"}  >Đổi Mật Khẩu</OptionLink>
    //                 </LiOptions>
    //                 <LiOptions onClick={() => setToggleUser(!toggleUser)}>
    //                     <OptionLink to={"/sign-in"} onClick={setLocal} >Đăng Xuất</OptionLink>
    //                 </LiOptions>
    //             </div>
    //         </Options>
    //     </>
    //     : <></>



    

    return (
        <div>
            {mobileNav?<CoverBackground onClick = {showMobileNav} ></CoverBackground>:<></>}
            <Slide visible = {mobileNav} offVisible = {showMobileNav}/>
            <BackgroundNav>
                <MiddleRow>
                    <FlexGrow grow={1}>
                        <Logo onClick={goToHomepage} src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/87460570_497744691125483_1187986171662172160_n.png?_nc_cat=110&_nc_ohc=oY_irOj354gAX8KBPnc&_nc_ht=scontent.fhan2-4.fna&oh=895c58ec753afd651eb7b38c99cfd87a&oe=5F038AAD" />
                    </FlexGrow>
                    <FlexGrow grow={1} style = {{display:"flex",justifyContent:"flex-end"}}>
                        <Icon className="fas fa-bars" onClick={showMobileNav}></Icon>
                    </FlexGrow>
                </MiddleRow>
            </BackgroundNav>

        </div>
    )
}

export default MobileNavBar
