import React, { useState, useEffect } from 'react'
import axios from "../../../axios"
import { useSelector, useDispatch } from "react-redux"
import styled, { keyframes ,css } from "styled-components"
import InfoUser from "./input";
import Select from "./Select"
import { saveUser } from '../../../actions/user';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { breakpoint } from '../../../styles/mixin';



	
const BG = styled.div`
    width: 36%;
    ${breakpoint.ls`
        width :100%;
        margin-bottom : 12px;
    `}
`

const Background = styled.div`
    position: sticky ;
    width :100%;
    top:88px;
    background-color:white;
    box-shadow: 0px 4px 4px rgba(193, 193, 193, 0.25);
    padding : 40px 28px;
    ${breakpoint.ls`
        position : relative;
        top : 0;
   `}
    ${breakpoint.ml`
        padding : 20px 14px;
    `}

`

const Avatar = styled.img`
    border-radius : 999px;
    width : 80px;
    height: 80px;
    margin-right : 16px;
    object-fit: cover;
    ${breakpoint.ml`
        width : 40px;
        height : 40px;
`}

`
const Label = styled.label`
    position:relative;
    cursor : pointer;
    border-radius : 999px;
    width : 80px;
    height: 80px;
    object-fit: cover;
    background-image : url(${props => props.url});
    background-size : cover; 
    ${breakpoint.ml`
    width : 40px;
    height : 40px;
    `}
    ${props => props.isLoading?`background-image : url("https://content.nexus.support.com/5b557b9559124044bb566bfc31a09c80/2479daa0ec2911e8bd5bcdb6b4f00d0c.gif")`
    :`background-image : url(${props => props.url})`}
   
`
const IconSettings = styled.i`
    color : #37A28D;
    z-index : 999;
    position:absolute;
    right: 0;
    bottom : 0;
    cursor : pointer;
    ${breakpoint.ml`
        bottom : -4px;
    `}
`

const AvatarWithName = styled.div`
    display : flex;
    align-items : center;
    margin-bottom:40px;
    & span {
        text-align : center;
    }
    ${breakpoint.ml`
        margin-bottom : 20px;
    `}
`
const Button = styled.button`
    margin : 32px 0px;
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
    ${breakpoint.ml`
        font-size : 16px;
        margin: 16px 0px;
        padding : 4px 10px;
        border-radius : 5px;
    `}
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
        // console.log("SHKCGJHGCHJGJ")
        const regex = /profile/gi
        const idUser = window.location.pathname.replace(regex, "").split("/").join("");
        axios.get(`/api/user/${idUser}?token=${localStorage.getItem("hiec_user_token")}`).then(res => {
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

                if (data._id == user._id || data._id == localStorage.getItem("hiec_user_id")) {
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
        dispatch(showLoading())
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
                avatar,
                token : localStorage.getItem("hiec_user_token")
            })
            // console.log(res)
            if(res.status == 200){
                setTimeout(()=>{
                    dispatch(hideLoading())
                },1000)
                const userGet =  await axios.get(`/api/user/${user._id}?token=${localStorage.getItem("hiec_user_token")}`)
                dispatch({type : "SET_VISIBLE_AND_SUCCESS"})
                setTimeout(()=>{
                  dispatch({type : "SET_NOT_VISIBLE"})
                },10000)
                if(userGet.status == 200){
                    dispatch(saveUser(userGet.data))
                }
                setIsUpdate(false);
                // console.log(user)
            }else{
                setTimeout(()=>{
                    dispatch(hideLoading())
                },1000)
                dispatch({type : "SET_VISIBLE_AND_NOT_SUCCESS"})
                setTimeout(()=>{
                  dispatch({type : "SET_NOT_VISIBLE"})
                },10000)
            }
        }else{
            setTimeout(()=>{
                dispatch(hideLoading())
            },1000)
            console.error("Lỗi xác thực người dùng");
            setIsUpdate(false);
            dispatch({type : "SET_VISIBLE_AND_NOT_SUCCESS"})
            setTimeout(()=>{
              dispatch({type : "SET_NOT_VISIBLE"})
            },10000)
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
    const genderOptions = [
        {
          value: "Nam",
          label: "Nam"
        },
        {
          value: "Nữ",
          label: "Nữ"
        },
        {
            value: "Khác",
            label: "Khác"
          },

      ];
      const jobOptions= [
        {
          value: "Đi làm",
          label: "Đi làm"
        },
        {
          value: "Đi học",
          label: "Đi học"
        }
      ];
    return (
        <BG>
            <Background>
                <AvatarWithName>
                    {upAvatar}
                    <InfoUser size="normal" className="dcmm" info={name} update={false} change={(value) => {if(value.length < 25){setName(value)} }} />
                </AvatarWithName>
                <InfoUser name="fas fa-envelope" info={email} update={false} change={(value) => { setEmail(value) }}></InfoUser>
                <Select name="fas fa-venus-mars" options={genderOptions} info={gender} update={isUpdate} change={(value) => { setGender(value) }}></Select>
                <InfoUser type="date" name="fas fa-baby" info={dob} update={isUpdate} change={(value) => { setDob(value) }}></InfoUser>
                <Select name="fas fa-briefcase" options={jobOptions} info={isWorking ? jobOptions[0].value : jobOptions[1].value} update={isUpdate} change={(value) => { if (value.value === "Đi làm") setIsWorking(true); else setIsWorking(false) }}></Select>
                <InfoUser name="fas fa-phone" info={phoneNumber} update={isUpdate} change={(value) => {if(value.length < 16)setPhoneNumber(value) }}></InfoUser>
                <InfoUser name="fas fa-home" info={address} update={isUpdate} change={(value) => {if(value.length < 60){ setAddress(value) }}}></InfoUser>
                
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                    {updateRightUser}
                </div>
            </Background>
            </BG>
    )
}

export default Info
