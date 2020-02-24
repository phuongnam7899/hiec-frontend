import React, { useState ,useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"

const Post = styled.li`
    display : block;
    display:flex;
    width:100%;
    justify-content : space-between;
    color : black;
    transition: 0.2s all;
    cursor : pointer;
    &:hover{
        color :  #1ABC9C;
    }

`
const Title = styled.div`
    font-size : 18px;
    font-weight : normal;
    width : 60%;
    overflow : hidden;
    margin-bottom : 30px;
    line-height: 21px;
    // flex-grow : 1;

    `
const InfoPost = styled.div`
    // flex-grow : 1;
    width : 30%;
    display:flex;
    justify-content : space-between;
    // flex-wrap : wrap;
    margin-left : 10%;
    over-flow : hidden;
    
`
const Img = styled.img`
    border-radius : 999px;
    width : 40px;
    height : 40px;
    margin-left : -25%;
`
const NameAndTime = styled.div`
    display:flex;
    flex-direction :  column;
    font-size : 14px;
    & >*{
        margin-bottom:2px;
    }
    
`


const Name = styled.span`
    overflow: hidden;
    font-weight : bold;
    height : 16px;
`
const Time = styled(Name)`
    font-weight : 400;
    color : #787878
`

function PostForm(props) {
    const [day,setDay]= useState("");
    const [month,setMonth] = useState("")
    const [year,setYear] = useState("")
    useEffect(()=>{
        const date = new Date(Number(props.post.postTime))
        // console.log(date);
        setDay(date.getDate())
        setMonth(date.getMonth() + 1);
        setYear(date.getFullYear())
    })
    const toPost = () =>{
        window.location.assign(props.url + props.post._id)
    }

    return (
     
        <Post onClick = {toPost}>
            <Title><span>{props.post.title}</span></Title>
            <InfoPost>
                <div><Img src = {props.post.user ? props.post.user.profile.avatar : "https://static.boredpanda.com/blog/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-29.jpg"} /></div>
                <NameAndTime>
                    <Name>{props.post.user ? props.post.user.profile.name : "Admin"}</Name>
                    <Time>{day}/{month}/{year}</Time>
                </NameAndTime>
            </InfoPost>
        </Post>
    
    )
}

export default PostForm;
