import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import axios from "../../../axios"
import Post from "./Post"
const Posts = styled.div`
    margin-top: 88px;

`
function MyPosts() {
    const [listPosts,setListPosts] = useState([]);
    const [page,setPage] = useState(0);
    useEffect(()=>{
        const regex = /profile/gi
        const idUser = window.location.pathname.replace(regex, "").split("/").join("");
        axios.post("/api/post/by-user/",{
            page : page,
            id : idUser,

        }).then(res => {
            console.log(res.data);
            setListPosts(res.data)
        })
    },[])
    // console.log(scrollY + " " + innerHeight + " " + scrollHeight )
    const scrolling =()=> {
        console.log("hello")    
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
         }
        };
    return (
        <Posts onScroll= {scrolling}>
            {listPosts.map(post =><Post post = {post} linkTo = "/forum" ></Post>)}
        </Posts>
    )
}

export default MyPosts
