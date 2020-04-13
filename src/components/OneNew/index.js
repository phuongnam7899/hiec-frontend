import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import HotRecentForm from "../HotRecentForm"
import axios from "../../axios"
import Container from "../Container"
import withNavAndFooter from "../HOC/withNavAndFooter"
import {breakpoint} from "../../styles/mixin"
const Form = styled.div`

    display: flex;
    flex-wrap:wrap;
    justify-content : space-between;
    padding-top : 100px ;
    padding-bottom : 20px ;
    width: 100%;
    & * {
        overflow-wrap : break-word;
    }
    `
const Title = styled.span`
    font-weight: bolder;
    font-size: 30px;
    width : 70%;
    overflow-wrap : break-word;
    ${breakpoint.tb`
    font-size: 24px;
    width : 100%;
    `}
    ${breakpoint.ml`
    width : 100%;
    font-size: 15px;
    `}
`
const Tag = styled.span`
background-color : ${props  => props.theme.COLOR};
color : white;
font-size : 12px;
font-weight : 600;
margin-right: 4px;
padding : 6px 9px;
border-radius : 20px;
`
const Times = styled.span`
text-align: center;
margin-top : 10px;
    ${breakpoint.ml`
        font-size: 12px;
        max-width : 100%;
    `}
    `
    

const Source = styled.div`
    font-weight:600;
    ${breakpoint.ml`
    font-size: 12px;
`}
`

const RightSide = styled.div`
    width : 25%;
    ${breakpoint.tb`
    width : 100%
    `}
`
const Post = styled.div`
    width: 70%;
    padding:32px;
    margin-bottom : 12px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(160, 160, 160, 0.25);
    & >*{
        margin-bottom:15px;
    }
    ${breakpoint.tb`
        width : 100%
    `}
`

const Reaction = styled.div`
    display: flex;
    justify-content: space-around;
    padding : 10px;
    border-bottom: 1px solid #C8C8C8;
    border-top: 1px solid #C8C8C8;

`
const Icon = styled.i`
    color : ${props  => props.theme.COLOR};
    ${breakpoint.tb`

    font-size: 18px;
    `}
    ${breakpoint.ml`
    
    font-size: 14px;
    `}
`

const ReactNumber = styled.span`
    color : black;
    margin-left : 8px;
    font-weight : 500;
`
const Content = styled.div`
    width : 100%;

    & img {
        margin : 8px 0px;
        width : 100%;
    }
    & * {
        text-align: justify;
        line-height: 24px;
        font-size : 16px;
        ${breakpoint.tb`
        line-height: 21px;
        font-size: 14px;
        `}
        ${breakpoint.ml`
        line-height: 18px;
        font-size: 12px;
        `}
        
    }
    & h1 {
        font-size : 20px;
        ${breakpoint.tb`

        font-size: 18px;
        `}
        ${breakpoint.ml`
        
        font-size: 14px;
        `}
    }
    
`
const FirstLine = styled.div`
    display: flex;
    justify-content: space-between;
    // align-items:center;
    flex-wrap : wrap;
    
`
const TagBlock = styled.div`
    display: flex;
    flex-wrap: wrap
    
`

function OneNew(props) {
    const href = window.location.href
    // const splitedHef = href.split("/");
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
        document.title = href.includes("/news") ? "HIEC - Tin tức" : "HIEC - Cơ hội";
        window.scrollTo(0,0)
        getHotPosts()
        getRecentNews()
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
            window.location.assign("/404-not-found")
            console.log(err)
        }
    }
    


    const getRecentNews = async () => {
        // console.log("hello");
        try {
            const category = href.includes("news")?"news":"project"
            const res = await axios.post("/api/news/recent", {
                number: 5,
                category,
            })
            setRecentPosts(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const getHotPosts = async () => {
        // console.log("hello");
        try {
            const category = href.includes("news")?"news":"project"
            const res = await axios.post("/api/news/hot", {
                number: 5,
                limit : 30,
                category,
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
                <TagBlock>
                    {tags.map(tag => <Tag>{tag}</Tag>)}
                </TagBlock>
                <Source>{userName}</Source>
                <Content id="content"></Content>
                <Reaction>
                <Icon className="fas fa-eye" ><ReactNumber>{viewers.length}</ReactNumber></Icon>
                </Reaction>
                
            </Post>
            <RightSide>
                <HotRecentForm url={href.includes("/news")?"/news/":"/project/"} title={href.includes("/news")?"Tin tức nổi bật":"Nổi bật"} icon="fas fa-star" listPost={hotPosts} />
                <HotRecentForm url={href.includes("/news")?"/news/":"/project/"} title={href.includes("/news")?"Tin tức gần đây":"Gần đây"} icon="fas fa-clock" listPost={recentPosts} />
            </RightSide>
        </Form>

    </Container>
    )
}

export default withNavAndFooter(OneNew);

