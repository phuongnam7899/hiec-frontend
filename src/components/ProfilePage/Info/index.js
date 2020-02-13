import React, { useState, useEffect } from 'react'
import axios from "../../../axios"
import { useSelector, useDispatch } from "react-redux"
import styled, { keyframes ,css } from "styled-components"
import InfoUser from "./input";
import { saveUser } from '../../../actions/user';


	


const Background = styled.div`
    position: sticky ;
    top:88px;
    // z-index : 0;
    background-color:white;
    box-shadow: 0px 4px 4px rgba(193, 193, 193, 0.25);
    width: 400px;
    // height :auto;
    padding : 40px 28px;
    padding-right : 0px;
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

const rotate = keyframes`
100% {
    transform: rotate(1turn);
}
`
const Label = styled.label`
    position:relative;
    cursor : pointer;
    border-radius : 999px;
    width : 80px;
    height: 80px;
    background-image : url(${props => props.url});
    background-size : cover; 
    ${props => props.isLoading?`background-image : url("https://content.nexus.support.com/5b557b9559124044bb566bfc31a09c80/2479daa0ec2911e8bd5bcdb6b4f00d0c.gif")`
    :`background-image : url(${props => props.url})`}
`
const IconSettings = styled.i`
    color : #37A28D;
    z-index : 999;
    position:absolute;
    right: 0;
    bottom : 0;
    cursor : pointer
`

const AvatarWithName = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    margin-bottom:40px;
`
const Button = styled.button`
    margin-top: 60px; 
    margin-right:14px;
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
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [isWorking, setIsWorking] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [describe, setDescribe] = useState({})
    const [avatar, setAvatar] = useState("");
    const [address,setAddress] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);
    const [isRightUser, setIsRightUser] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const user = useSelector(state => state.user);
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
                setAddress(profile.address);
                setAvatar(profile.avatar)

                if (data._id == user._id || data._id == sessionStorage.getItem("hiec_user_id")) {
                    setIsRightUser(true);
                } else {
                    setIsRightUser(false);
                }
            }
        })

        // if(email ===useSelector(state=>state.) )

        // TODO : check state user == user nhận đc thì updateUserRight = true;
    }, [])

    const updateUser = async () => {
        // UPDATE USER
        const justNumberPhone = Number.isInteger((Number)(phoneNumber))
        if(user._id && isRightUser && name.length<25 && justNumberPhone && address.length < 100){
            const res = await axios.put("/api/user/"+user._id,{
                name,
                dob,
                gender,
                phoneNumber,
                address,
                isWorking,
                describe,
                avatar
            })
            console.log(res)
            if(res.status == 200){
                const userGet =  await axios.get("/api/user/"+user._id)
                alert("Cập nhật thông tin thành công")
                if(userGet.status == 200){
                    dispatch(saveUser(userGet.data))
                }
                setIsUpdate(false);
                console.log(user)
            }else{
                alert("Không thể cập nhật thông tin, xin mời bạn kiểm tra lại thông tin vừa nhập");
            }
        }else{
            console.error("Lỗi xác thực người dùng");
            setIsUpdate(false);
            alert("Mời bạn kiểm tra lại thông tin")
        }

        // console.log(res)
    }

    const changeAvatar = async (e) => {
        setIsLoading(true);
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Client-ID 546c25a59c58ad7");
        var formdata = new FormData();
        formdata.append("image", e.target.files[0]);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };
        fetch("https://api.imgur.com/3/image", requestOptions)
            .then(response => response.json())
            .then(result => {
                setAvatar(result.data.link)
                setIsLoading(false)
            })
            .catch(error => console.log('error', error));

    }

    // console.log(name + " - " + dob + "- " + gender + "- " + isWorking + "- " + phoneNumber + "- " + avatar)
    const upAvatar = isUpdate ? <>  <Label isLoading = {isLoading} url={avatar} for="avatar-file"> <IconSettings className="fas fa-wrench"></IconSettings> </Label><input accept=".jpg" id="avatar-file" type="file" onChange={changeAvatar} style={{ display: "none" }} /></>
        : <Avatar src={avatar} />

    const button = isUpdate ? <Button disabled = {isLoading} onClick={updateUser}>Lưu<I className="fas fa-pen"></I></Button>
        : <Button onClick={() => setIsUpdate(true)}>Chỉnh sửa<I className="fas fa-pen"></I></Button>
    const updateRightUser = isRightUser ? button : <></>

    return (
        <div>
            <Background>
                <AvatarWithName>
                    {upAvatar}
                    <InfoUser size="normal" className="dcmm" info={name} update={isUpdate} change={(value) => {if(value.length < 25){setName(value)} }} />
                </AvatarWithName>
                <InfoUser name="fas fa-envelope" info={email} update={false} change={(value) => { setEmail(value) }}></InfoUser>
                <InfoUser name="fas fa-venus-mars" info={gender} update={isUpdate} change={(value) => { setGender(value) }}></InfoUser>
                <InfoUser type="date" name="fas fa-baby" info={dob} update={isUpdate} change={(value) => { setDob(value) }}></InfoUser>
                {/* <InfoUser className = "" info = {isWorking}  update = {isUpdate} change = {(value)=>{setIsWorking(value)}}></InfoUser> */}
                <InfoUser name="fas fa-phone" info={phoneNumber} update={isUpdate} change={(value) => {if(value.length < 16)setPhoneNumber(value) }}></InfoUser>
                <InfoUser name="fas fa-home" info={address} update={isUpdate} change={(value) => {if(value.length < 60){ setAddress(value) }}}></InfoUser>
                
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                    {updateRightUser}
                </div>
            </Background>
        </div>
    )
}

export default Info
