import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import axios from "../../../axios"
import Post from "./Post"
const Posts = styled.div`
    margin-top: 88px;

`
function MyPosts() {
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const [listPosts,setListPosts] = useState([]);
    useEffect(()=>{
        console.log("LẤY THÔI")
        const regex = /profile/gi
        const idUser = window.location.pathname.replace(regex, "").split("/").join("");
        axios.get("/api/post/by-user/" + idUser).then(res => {
            console.log(res.data);
            setListPosts(res.data)
        })
    },[])
    // console.log(scrollY + " " + innerHeight + " " + scrollHeight )
    return (
        <Posts>
            {listPosts.map(post =><Post post = {post} linkTo = "/forum" ></Post>)}
        </Posts>
    )
}

export default MyPosts
