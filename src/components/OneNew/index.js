import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import HotRecentForm from "../HotRecentForm"
import axios from "../../axios"
import Container from "../Container"
import withNavAndFooter from "../HOC/withNavAndFooter"

const Form = styled.div`
    display: flex;
    justify-content : space-between;
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
const Times = styled.span`
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
    & >*{
        margin-bottom:15px;
    }
`

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
const Content = styled.div`
    width : 100%;
    & img {
        width : 100%;
    }
`
const FirstLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    
`

const RightSide = styled.div`
    width : 35%;
`
function OneNew(props) {
    const href = window.location.href
    const splitedHef = href.split("/");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [hotPosts, setHotPosts] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
    const [userName, setUserName] = useState("")
    const [title, setTitle] = useState("")
    const [tags, setTags] = useState([]);
    const [viewers, setViewers] = useState([])

    


    useEffect(() => {
        document.title = splitedHef.includes("news") ? "HIEC - Tin tức" : "HIEC - Dự án";
        window.scrollTo(0,0)
        getHotPosts()
        getRecentPosts()
        getPost()
    }, [])

    const getPost = async () => {
        const regexNews = /news/gi;
        const regexProject = /project/gi;
        const id = window.location.pathname.replace(regexProject, "").replace(regexNews,"").split("/").join("");

        try {
            const res = await axios.get("/api/news/" + id);
            // console.log(res.data)
            setViewers(res.data.viewer);
            // console.log(res.data)
            setTitle(res.data.title);
            setTags(res.data.tags)
            let getContent = document.getElementById("content");
            getContent.innerHTML += res.data.content;
            const date = new Date(Number(res.data.postTime))
            setDay(date.getDate())
            // console.log(date)
            setMonth(date.getMonth() + 1);
            setYear(date.getFullYear())
            
            if(localStorage.getItem("hiec_user_id")){
                // console.log("hello")
                const addView = await axios.put("/api/news/add-view",{
                    newsID : res.data._id,
                    userID : localStorage.getItem("hiec_user_id"),
                })

                // console.log(addView)
            }

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
    
    return (<Container>
        <Form>
            <Post>
                <FirstLine>
                    <Title>{title}</Title>
                    <Times>{day}/{month}/{year}</Times>
                </FirstLine>
                <div>
                    {tags.map(tag => <Tag>{tag}</Tag>)}
                </div>
                <Source>{userName}</Source>
                <Content id="content"></Content>
                <Reaction>
                <Icon className="fas fa-eye" ><ReactNumber>{viewers.length}</ReactNumber></Icon>
                </Reaction>
                
            </Post>
            <RightSide>
                <HotRecentForm url="/forum/" title="Tin tức nổi bật" icon="fas fa-star" listPost={hotPosts} />
                <HotRecentForm url="/forum/" title="Tin tức gần đây" icon="fas fa-star" listPost={recentPosts} />
            </RightSide>
        </Form>

    </Container>
    )
}

export default withNavAndFooter(OneNew);

