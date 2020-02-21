import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import HotRecentForm from "../HotRecentForm"
import axios from "../../axios"
import Container from "../Container"
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
const Date = styled.span`
text-align: center;
    `

const Source = styled.div`
    font-weight:600
`
const Post = styled.div`
    margin-bottom: 20px;
    width: 756px;
    margin-right:64px;
    margin-left:86px;
    padding:20px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(160, 160, 160, 0.25);
    & >*{
        margin-bottom:15px;
    }
`
const InfoPost = styled.div``

const Content = styled.div``
const FirstLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    
`
const CucCuLoz = styled.div``
function OnePost(props) {


    const [hotPosts, setHotPosts] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
  
    const [post, setPost] = useState({})
    const [tags,setTags] = useState([]);


    useEffect(() => {
        getHotPosts()
        getRecentPosts()
        getPost()
    }, [])

    const getPost = async () => {
        const regex = /post/gi;
        const id = window.location.pathname.replace(regex, "").split("/").join("");

        try {
            const res = await axios.get("/api/post/" + id);
            setPost(res.data);
            setTags(res.data.tags)    
            let parser = new DOMParser();
            let parserContent = parser.parseFromString(res.data.content, "text/html");
            let newContent = parserContent.getElementsByTagName("*");
            let getContent = document.getElementById("content");
            getContent.innerHTML += res.data.content;
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
                    <Title>{post.title}</Title>
                    <Date>{post.postTime}</Date>
                </FirstLine>
                {tags.map(tag => <Tag>{tag}</Tag>)}
                <Source>HOÀNG ĐAN, THEO TRI THỨC TRẺ</Source>

                <InfoPost>
                    Xương là một loại thực phẩm không thể thiếu trong cuộc sống hàng ngày của chúng ta, tuy nhiên không phải ai cũng biết ăn xương đúng cách, hôm nay...<br />
                    Quyết định nêu rõ: Chỉ có 1 người mới có thể ăn được xương ngoài loài động vật CHÓ ra. Đó chính là Thái chó
                </InfoPost>
    <Content id = "content"></Content>
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

