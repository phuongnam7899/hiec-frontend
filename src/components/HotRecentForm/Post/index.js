import React, { useState ,useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"

const Post = styled.li`
    display : block;
    display:flex;
    width:100%;
    justify-content : space-between;
   
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

const More = styled(NavLink)`
    text-decoration : none;
    color : black;
    transition: 0.2s all;
    &:hover{
        color :  #1ABC9C;
    }
`

const Name = styled.span`
    overflow: hidden;
    height : 16px;
`
const Time = styled(Name)`

`

function PostForm(props) {
    const [day,setDay]= useState("");
    const [month,setMonth] = useState("")
    const [year,setYear] = useState("")
    useEffect(()=>{
        const date = new Date(props.post.postTime)
        // console.log(date);
        setDay(date.getDate())
        setMonth(date.getMonth() + 1);
        setYear(date.getFullYear())
    })


    return (
        <More to={props.url + props.post._id}>
        <Post>
            <Title><span>{props.post.title}</span></Title>
            <InfoPost>
                <div><Img src = {props.post.user.profile.avatar} /></div>
                <NameAndTime>
                    <Name>{props.post.user.profile.name}</Name>
                    <Time>{day}/{month}/{year}</Time>
                </NameAndTime>
            </InfoPost>
        </Post>
        </More>
    )
}

export default PostForm;
