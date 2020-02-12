import React, { useState, useEffect } from 'react'
import axios from "../../../axios"
import { useSelector } from "react-redux"
import styled from "styled-components"
import InfoUser from "./input";



const Background = styled.div`
    position: sticky ;
    top:88px;
    // z-index : 0;
    background-color:white;
    box-shadow: 0px 4px 4px rgba(193, 193, 193, 0.25);
    width: 400px;
    // height :auto;
    padding : 40px 28px;
    // padding-right : 0px;
    // display:flex;
    // flex-direction: column;
    // align-items : center;
`

const Avatar = styled.img`
    border-radius : 999px;
    width : 80px;
    height: 80px;
    // margin-left : 

`
const Label = styled.label`
    border-radius : 999px;
    width : 80px;
    height: 80px;
    background-image : url(${props => props.url});
    background-size : cover; 
`
const AvatarWithName = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    margin-bottom:40px;
`
const Button = styled.button`
    border : none;
    padding : 8px 20px;  
    font-size : 20px;
    font-weight : bolder;
    color : white;
    background-color : #45D0B6;
    border-radius : 10px;
    transition : 0.3s all;
    cursor : pointer;
    outline:none;
    text-align : center;
    &:hover {
        background-color : #37A28D;
        
    }
`
const I = styled.i`
    margin-left : 12px;
`

function Info() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [isWorking, setIsWorking] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [describe, setDescribe] = useState({})
    const [avatar, setAvatar] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);
    const [isRightUser, setIsRightUser] = useState(true);
    useEffect(() => {
        const regex = /profile/gi
        const idUser = window.location.pathname.replace(regex, "").split("/").join("");
        axios.get("/api/user/" + idUser).then(res => {
            if (res.status === 200) {
                const data = res.data;
                const profile = data.profile;
                setEmail(data.account.email);
                setName(profile.name);
                setDob(profile.dob);
                setGender(profile.gender);
                setIsWorking(profile.occupation.isWorking);
                setPhoneNumber(profile.phoneNumber);
                setAvatar(profile.avatar)
            }
        })

        // TODO : check state user == user nhận đc thì updateUserRight = true;
    }, [])

    const updateUser = () => {
        // UPDATE USER
        console.log("updating")
        setIsUpdate(false);
    }

    const changeAvatar = async (e) => {
        var myHeaders = new Headers();
        
        myHeaders.Authorization = "Client-ID 2af29e41fc79aac";
        myHeaders.AccessControlAllowOrigin = "";
        console.log(myHeaders)
        var formdata = new FormData();
        formdata.append("image",e.target.files[0]);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            mode : "no-cors",
            body: formdata,
            redirect: 'follow',
            auth : {
                username : "quothai2000x",
                password : "ta0kh0ngn0i",
            }
        };

        fetch("https://api.imgur.com/3/image", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    console.log(name + " - " + dob + "- " + gender + "- " + isWorking + "- " + phoneNumber + "- " + avatar)
    const upAvatar = isUpdate ? <><Label url={avatar} for="avatar-file"></Label><input accept=".jpg" id="avatar-file" type="file" onChange={changeAvatar} style={{ display: "none" }} /></>
        : <Avatar src={avatar} />

    const button = isUpdate ? <Button onClick={updateUser}>Lưu<I className="fas fa-pen"></I></Button>
        : <Button onClick={() => setIsUpdate(true)}>Chỉnh sửa<I className="fas fa-pen"></I></Button>
    const updateRightUser = isRightUser ? button : <></>

    return (
        <div>
            <Background>
                <AvatarWithName>
                    {upAvatar}
                    <InfoUser size="normal" className="dcmm" info={name} update={isUpdate} change={(value) => { setName(value) }} />
                </AvatarWithName>
                <InfoUser name="fas fa-envelope" info={email} update={false} change={(value) => { setEmail(value) }}></InfoUser>
                <InfoUser name="fas fa-venus-mars" info={gender} update={isUpdate} change={(value) => { setGender(value) }}></InfoUser>
                <InfoUser type="date" name="fas fa-baby" info={dob} update={isUpdate} change={(value) => { setDob(value) }}></InfoUser>
                {/* <InfoUser className = "" info = {isWorking}  update = {isUpdate} change = {(value)=>{setIsWorking(value)}}></InfoUser> */}
                <InfoUser name="fas fa-phone" info={phoneNumber} update={isUpdate} change={(value) => { setPhoneNumber(value) }}></InfoUser>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "60px" }}>
                    {updateRightUser}
                </div>
            </Background>
        </div>
    )
}

export default Info
