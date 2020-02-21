import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import HotRecentForm from "../HotRecentForm"
import axios from "../../axios"
import Container from "../Container"
import Comment from "./Comment"
import InputComment from "./InputComment"
const Form = styled.div`
    display: flex;
    flex-direction: row;
    align-items : flex-start;
    padding-top : 166px ;
    padding-bottom : 88px ;
    width: 100%;

  
`
const Title = styled.span`
    font-weight: bolder;
    font-size: 30px
`
const Tag = styled.span`
background-color : #37A28D;
color : white;
font-size : 12px;
font-weight : 600;
margin-right: 4px;
padding : 6px 9px;
border-radius : 20px;
`
const Time = styled.span`
text-align: center;
    `

const Source = styled.div`
    font-weight:600
`
const Post = styled.div`
    margin-bottom: 20px;
    width: 756px;
    margin-right:64px;
    padding:20px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(160, 160, 160, 0.25);
    & >*{
        margin-bottom:15px;
    }
    & p>img{
        margin-left : 50%;
        transform: translate(-50%, 0%) 
    }
`
const InfoPost = styled.div``
const Reaction = styled.div`
    display: flex;
    justify-content: space-around;
    padding : 10px;
    border-bottom: 1px solid #C8C8C8;
    border-top: 1px solid #C8C8C8;

`
const Icon = styled.i`
    color : #1ABC9C;
`

const ReactNumber = styled.span`
    color : black;
    margin-left : 8px;
    font-weight : 500;
`
const Content = styled.div``
const FirstLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    
`

const CommentContainer = styled.div`
`


const CucCuLoz = styled.div``
function OnePost(props) {

    const [day, setDay] = useState("");
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [hotPosts, setHotPosts] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
    const [userName, setUserName] = useState("")
    const [title, setTitle] = useState("")
    const [tags, setTags] = useState([]);
    const [comments, setComments] = useState([]);


    useEffect(() => {
        if (!localStorage.getItem("hiec_user_id")) {
            props.history.push("/sign-in");
        }
        getHotPosts()
        getRecentPosts()
        getPost()
    }, [])

    const getPost = async () => {
        const regex = /forum/gi;
        const id = window.location.pathname.replace(regex, "").split("/").join("");

        try {
            const res = await axios.get("/api/post/" + id);
            console.log(res.data.comments);
            setTitle(res.data.title);
            setTags(res.data.tags)
            setComments(res.data.comments)
            
            setUserName(res.data.user.profile.name);
            let parser = new DOMParser();
            let parserContent = parser.parseFromString(res.data.content, "text/html");
            let getContent = document.getElementById("content");
            getContent.innerHTML += res.data.content;
            const date = new Date(res.data.postTime)
            setDay(date.getDate())
            setMonth(date.getMonth() + 1);
            setYear(date.getFullYear())
        } catch (err) {
            console.log(err)
        }
    }
    


    const getRecentPosts = async () => {
        // console.log("hello");
        try {
            const res = await axios.post("/api/post/recent", {
                number: 5,
            })
            setRecentPosts(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const getHotPosts = async () => {
        // console.log("hello");
        try {
            const res = await axios.post("/api/post/hot", {
                number: 5,
            })
            setHotPosts(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    // useEffect(() => {

    // })

    // console.log(hotPosts)
    const submitText = (text)=>{
        console.log(text);
    }
    return (<Container>
        <Form>
            <Post>
                <FirstLine>
                    <Title>{title}</Title>
                    <Time>{day}/{month}/{year}</Time>
                </FirstLine>
                <div>
                    {tags.map(tag => <Tag>{tag}</Tag>)}
                </div>
                <Source>{userName}</Source>
                <Content id="content"></Content>
                <Reaction>
                    <Icon className="fas fa-sign-language"><ReactNumber>1245</ReactNumber></Icon>
                    <Icon className="fas fa-comment" ><ReactNumber>345345</ReactNumber></Icon>
                    <Icon className="fas fa-eye" ><ReactNumber>345345</ReactNumber></Icon>
                </Reaction>
                <CommentContainer>
                    <InputComment submitText = {submitText}></InputComment>
                    {comments.map(comment => <Comment comment = {comment}/>)}
                </CommentContainer>
            </Post>
            <CucCuLoz>
                <HotRecentForm url="/forum/" title="Tin tức nổi bật" icon="fas fa-star" listPost={hotPosts} />
                <HotRecentForm url="/forum/" title="Tin tức gần đây" icon="fas fa-star" listPost={recentPosts} />
            </CucCuLoz>
        </Form>

    </Container>
    )
}

export default OnePost;

