import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import AvatarWithName from "./AvatarWithName"
import Tag from "./Tags"
import { NavLink } from "react-router-dom"
import IconWithNumber from "./IconWithNumber"
const PostForm = styled.div`
    margin-bottom: 16px;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(193,193,193,0.25);
    padding : 28px;
    width : 100%;
    cursor : pointer;
    
`
const Tags = styled.div`
    margin-bottom : 20px;
`

const Title = styled.div`
    font-weight: bold;
    font-size : 24px;
    margin-bottom : 20px;
    max-width : 90%;
    overflow-wrap : break-word;
`
const Content = styled.div`
    margin-bottom : 30px;
    color: black;
    overflow-wrap : break-word;
`


const Icons = styled.div`
    display : flex;
    flex-direction:row;
    align-items : center;
    justify-content : space-between;
`
const Arrow = styled.i`
    width : 10px;
    height : 10px;
    &::before {
        width : 10px;
        height : 10px;
    }

`
const More = styled(NavLink)`
    text-decoration : none;
    color : black;
    transition: 0.2s all;
    &:hover{
        color : #37A28D;
    }
`
function Post(props) {

        const {post, linkTo} = props;
        const {user, tags, postTime, title, claps, comments, viewers, _id, content} = post;
        const defaultUser = {name : "Admin" , avatar : ""}
        const {name, avatar} = user ? user.profile : defaultUser ;
    // console.log(props.post);
    let parser = new DOMParser();
    // console.log(props.post.content);
    let parserContent = parser.parseFromString(content, "text/html");
    let newContent = parserContent.getElementsByTagName("*");
    let finalContent = "";
    for (var i = 0; i < newContent.length; i++) {
        var current = newContent[i];
        // console.log(current)
        if (current.children.length === 0 && current.textContent.replace(/ |\n/g, '') !== '') {
            // Check the element has no children && that it is not empty
            finalContent = finalContent + " " + current.textContent;
        }
    }
    finalContent = finalContent.slice(0, 150);
    return (
        <More to={linkTo + "/" + _id}>
            <PostForm>
                <AvatarWithName avatar={avatar} name={name} postTime={postTime} />
                <Tags>
                    {tags.map(item => <Tag tag={item} />)}
                </Tags>
                <Title><span>{title}</span></Title>
                <Content><span>{finalContent}</span>{}</Content>
                <Icons>
                    <Icons>
                        <IconWithNumber icon="fas fa-eye" number={viewers.length} />
                        <IconWithNumber icon="fas fa-sign-language" number={claps.length} />
                        <IconWithNumber icon="fas fa-comment" number={comments.length} />
                    </Icons>
                    <div style={{}}><span>Xem thêm </span><Arrow className="fas fa-arrow-right"></Arrow></div>
                </Icons>
            </PostForm>
        </More>
    )
}

export default Post
