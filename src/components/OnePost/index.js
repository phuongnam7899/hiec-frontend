import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import HotRecentForm from "../HotRecentForm"
import axios from "../../axios"
import Container from "../Container"
import Comment from "./Comment"
import InputComment from "./InputComment"
import withNavAndFooter from "../HOC/withNavAndFooter"
import { useSelector } from 'react-redux'
const Form = styled.div`
    display: flex;
    justify-content : space-between;
    padding-top : 166px ;
    padding-bottom : 88px ;
    width: 100%;
    & * {
        overflow-wrap : break-word;
    }
`
const Title = styled.span`
    font-weight: bolder;
    font-size: 30px;
    max-width : 80%;
    overflow-wrap : break-word;
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
    width: 60%;
    padding:32px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(160, 160, 160, 0.25);
    & > *{
        margin-bottom:15px;
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

const ReactArea = styled.div`
    flex-grow: 1;
    display:flex;
    padding: 10px 0px;
    cursor : pointer;
    :hover{
        background: #E8E8E8;
    };
    border-radius:10px;
    
`
const Icon = styled.i`
    color : ${props => props.isClapped ? "#1ABC9C" : "black"};
    margin :auto;
    
`

const ReactNumber = styled.span`
    color : black;
    margin-left : 8px;
    font-weight : 500;
`
const Content = styled.div`
    width : 100%;
    & img {
        width : 100%;
        margin : 8px 0px;
    }
`
const FirstLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:flex-start;
    
`

const CommentContainer = styled.div`
`
const Button = styled.button`
    border : none;
    display : block;
    margin : 12px auto;
    margin-bottom : 0px;
    outline : none;
    cursor : pointer; 
    padding : 8px 12px;
    background-color : rgba(1,1,1,0);
    font-size : 16px;
    transition : 0.2s all;
    :hover{
        color : #1ABC9C;
    }
`

const RightSide = styled.div`
    width : 35%;
    `
function OnePost(props) {
    const user = useSelector(state=>state.user)
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [recentPosts, setRecentPosts] = useState([]);
    const [relevantPosts, setRelevantPosts] = useState([]);
    const [userName, setUserName] = useState("")
    const [title, setTitle] = useState("")
    const [tags, setTags] = useState([]);
    const [comments, setComments] = useState([]);
    const [viewers, setViewers] = useState([])
    const [claps, setClaps] = useState([])
    const [isClapped, setIsClapped] = useState(false)
    const [postID,setPostID] = useState("");
    const [number,setNumber] = useState(5);

    useEffect(() => {
        document.title = "HIEC - Diễn đàn"
         window.scrollTo(0,0)
        if (!localStorage.getItem("hiec_user_id")) {
            props.history.push("/sign-in");
        }
        getPost()
  
        getRecentPosts()
        
    }, [])

    const getPost = async () => {
        const regex = /forum/gi;
        const id = window.location.pathname.replace(regex, "").split("/").join("");

        try {
            const res = await axios.get("/api/post/" + id);
            setViewers(res.data.viewers);
            setTitle(res.data.title);
            setTags(res.data.tags)
            setComments(res.data.comments.reverse())
            setClaps(res.data.claps)
            setPostID(res.data._id);
            for (let index = 0; index < res.data.claps.length; index++) {
                if(localStorage.getItem("hiec_user_id") == res.data.claps[index]){
                    setIsClapped(true);
                }
            }
            setUserName(res.data.user.profile.name);  
            let getContent = document.getElementById("content");
            getContent.innerHTML += res.data.content;
            const date = new Date(res.data.postTime)
            setDay(date.getDate())
            setMonth(date.getMonth() + 1);
            setYear(date.getFullYear())

            const addView = await axios.put("/api/post/add-view",{
                postID : res.data._id,
                userID : localStorage.getItem("hiec_user_id")
            })

//  lấy bài viết liên quan
            try {
                const resByTag = await axios.post("/api/post/search/by-tag", {
                    tagList : res.data.tags
                })
                // console.log(resByTag)
                setRelevantPosts(resByTag.data)
            } catch (err) {
               
                console.log(err)
            }

        } catch (err) {
            console.log("Hlel")
            window.location.assign("/")
            console.log(err);   
        }
    }

    

    const getRecentPosts = async () => {
        try {
            const res = await axios.post("/api/post/recent", {
                number: 5,
            })
            setRecentPosts(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const submitText = async (content) => {
        try{
            const time  = Date.now();
            let comment = {
                user,
                content,
                time,
            }
            
            let newComments = comments
            newComments.unshift(comment)
            setComments(newComments);
            setNumber(number+1);
         
            const res = await axios.put("/api/post/add-comment",{
                postID,
                user : user._id,
                content,
                time
            })
            setNumber(number+1)
            

        }
        catch(err){
            console.log(err)
        }
    }

    const clapping = async () => {
        try{
            if(isClapped){
                setClaps( claps.filter(id => id != user._id))
            }else{
                setClaps([...claps,user._id])
            }
            // call API
            setIsClapped(!isClapped)
            const res = await axios.put("/api/post/add-clap",{
                userID : user._id,
                postID : postID,
            })
            console.log(res)
        }
        catch(err){
            console.log(err)
        }
    } 

    const moreComment = ()=>{
        setNumber(number+5);
    }
    console.log('render')
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
                    <ReactArea onClick={clapping}>
                        <Icon isClapped={isClapped} className="fas fa-sign-language">
                            <ReactNumber>{claps.length}</ReactNumber>
                        </Icon>
                    </ReactArea>
               
                    <ReactArea>
                        <Icon className="fas fa-comment" >
                            <ReactNumber>{comments.length}</ReactNumber>
                        </Icon>
                    </ReactArea>
                   
                    <ReactArea>
                        <Icon className="fas fa-eye" >
                            <ReactNumber>{viewers.length}</ReactNumber>
                        </Icon>
                    </ReactArea>
                </Reaction>
                <CommentContainer>
                    <InputComment submitText={submitText}></InputComment>
                    {comments.slice(0,number).map(comment => <Comment comment={comment} />)}
                    {comments.length>number?<div><Button onClick = {moreComment}>Xem thêm</Button></div>:<></>}
                </CommentContainer>
            </Post>
            <RightSide>
                <HotRecentForm url="/forum/" title="Bài viết gần đây" icon="fas fa-star" listPost={recentPosts.slice(0,5)} />
                <HotRecentForm url="/forum/" title="Bài viết liên quan" icon="fas fa-star" listPost={relevantPosts.slice(0,5)} />
            </RightSide>
        </Form>

    </Container>
    )
}

export default withNavAndFooter(OnePost);

