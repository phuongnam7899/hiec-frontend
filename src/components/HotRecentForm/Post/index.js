import React, { useState ,useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import {breakpoint} from "../../../styles/mixin"
import convert2vw from "../../../utils/convert2vw"

const Post = styled.li`
    display : block;
    display:flex;
    width:100%;
    justify-content : space-between;
    color : black;
    transition: 0.2s all;
    cursor : pointer;
    &:hover{
        color :  ${props  => props.theme.COLOR};
    }
    & > i {
        font-size : 8px;
        line-height: 16px;
        margin-right: 4px;
        margin-top: 4px;
        color: #0853b6;
    }

`
const Title = styled.div`
    font-size : 15px;
    line-height: 1.6;
    font-weight : normal;
    overflow : hidden;
    margin-bottom : 16px;
    width : 100%;
    overflow-wrap : break-word;
    ${breakpoint.ml`
        font-size : 14px;
        margin-bottom : 6px;
    `}

    `
const InfoPost = styled.div`
    display:flex;
    justify-content : space-between;
    width : 45%;
    over-flow : hidden;
    ${breakpoint.tb`
    width : 30%;  
    `}
    ${breakpoint.ms`
    width : 45%;  
    `}
    
`
const ImgBlock =styled.div`
    width : 20%;
`
const Img = styled.img`
    border-radius : 50%;
    width : 40px;
    height : 40px;
    ${breakpoint.ml`
    width : 20px;
    height : 20px;
    `}
    // width  : 100%;
    // height : auto;
`
const NameAndTime = styled.div`
    display:flex;
    flex-direction :  column;
    align-items : flex-start;
    width : 60%;
    font-size : 14px;
    & >*{
        margin-bottom:2px;
    }
    ${breakpoint.ml`
        font-size : 12px;
        width : 70%;
    `}
    
`


const Name = styled.span`
    overflow: hidden;
    font-weight : bold;
    height : 16px;
    overflow : hidden;
    max-width : 100%;
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
    },[])
    const toPost = () =>{
        window.open(props.url + props.post._id)
    }

    return (
     
        <Post onClick = {toPost}>
            <i className ="fas fa-dot-circle"></i>
            <Title><span>{props.post.title}</span></Title>
            {/* <InfoPost>
                <ImgBlock><Img src = {props.post.user ? props.post.user.profile.avatar : "https://static.boredpanda.com/blog/wp-content/uploads/2017/04/cute-dog-shiba-inu-ryuji-japan-29.jpg"} /></ImgBlock>
                <NameAndTime>
                    <Name>{props.post.user ? props.post.user.profile.name : "Admin"}</Name>
                    <Time>{day}/{month}/{year}</Time>
                </NameAndTime>
            </InfoPost> */}
        </Post>
    
    )
}

export default PostForm;
