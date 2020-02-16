import React ,{useState,useEffect, useCallback} from 'react'
import HotRecentForm from "../HotRecentForm"
import axios from '../../axios';
import styled from 'styled-components';
import Container from '../Container';
import Post from "../ProfilePage/Posts/Post"
const Page = styled.div`
    padding-top : 88px;
    display : flex;
    justify-content : space-around;
`

const RightContent = styled.div`
    // width:30%;
    &>*{
        margin-bottom : 12px;
    }
`
const LeftContent = styled.div`
    // width:70%;
`

const Posts = styled.div`

`

function ForumPage() {
    const [ hotPosts,setHotPosts ] = useState([]);
    const [ recentPosts,setRecentPosts ] = useState([]);
    const [postsForum,setPostsForum] = useState([]);


    useEffect(()=>{
        getHotPosts()
        getRecentPosts()
        getForumPosts()
    },[])

    const getForumPosts = async() =>{
        try{
            const res = await axios.post("/api/post/hot",{
                number : 50,
            })
            setPostsForum([...postsForum,...res.data]);
        }catch(err){
           console.log(err)
        }   
    }


    const getRecentPosts = async ()=>{
        // console.log("hello");
        try{
            const res = await axios.post("/api/post/recent",{
                number : 5,
            })
            setRecentPosts(res.data)
        }catch(err){
           console.log(err)
        }   
    }

    const getHotPosts = async ()=>{
        // console.log("hello");
        try{
            const res = await axios.post("/api/post/hot",{
                number : 5,
            })
            setHotPosts(res.data)
        }catch(err){
           console.log(err)
        }

        
    }
    // console.log(hotPosts);
    return (
        <Container>
        <Page>
            <LeftContent>
                <Posts>
                {postsForum.map(post => <Post post={post} linkTo="/forum" ></Post>)}
                </Posts>
            </LeftContent>
            <RightContent>
            <HotRecentForm url ="/forum/" title = "Tin tức nổi bật" icon = "fas fa-star" listPost = {hotPosts} />
            <HotRecentForm url ="/forum/" title = "Tin tức gần đây" icon = "fas fa-clock" listPost = {recentPosts} />
            </RightContent>
        </Page>
        </Container>
    )
}

export default ForumPage
