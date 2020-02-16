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
    max-width 760px;
    min-width : 600px;
    cursor : pointer;
`
const Tags = styled.div`
    margin-bottom : 20px;
`

const Title = styled.div`
    font-weight: bold;
    font-size : 24px;
    margin-bottom : 20px;

`
const Content = styled.div`
    margin-bottom : 30px;
    color: black;
`


const Icons = styled.div`
    display : flex;
    flex-direction:row;
    align-items : center;
    justify-content : space-between;
`
const More = styled(NavLink)`
    text-decoration : none;
    color : black;
    transition: 0.2s all;
    &:hover{
        color : #37A28D;
    }
`
const Arrow = styled.i`
    width : 10px;
    height : 10px;
    &::before {
        width : 10px;
        height : 10px;
    }

`
function Post(props) {
    const [idPost, setIdPost] = useState("");
    const [avatar, setAvatar] = useState("");
    const [name, setName] = useState("")
    const [tags, setTags] = useState([]);
    const [postTime, setPostTime] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [claps, setClaps] = useState([]);
    const [viewers, setViewers] = useState([]);
    const [comments, setComments] = useState([]);
    const [linkTo, setLinkTo] = useState("")

    // console.log(props.post);
    useEffect(() => {
        setAvatar(props.post.user.profile.avatar);
        setName(props.post.user.profile.name);
        setTags(props.post.tags)
        setPostTime(props.post.postTime);
        setTitle(props.post.title);
        // setContent(props.post.content);
        setClaps(props.post.claps)
        setViewers(props.post.viewers);
        setComments(props.post.comments);
        setIdPost(props.post._id);
        setLinkTo(props.linkTo)
        let parser = new DOMParser();
        // console.log(props.post.content);
        let parserContent = parser.parseFromString(props.post.content, "text/html");
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
        setContent(finalContent)



    }, [])
    return (
        <More to={linkTo + "/" + idPost}>
            <PostForm>
                <AvatarWithName avatar={avatar} name={name} postTime={postTime} />
                <Tags>
                    {tags.map(item => <Tag tag={item} />)}
                </Tags>
                <Title><span>{title}</span></Title>
                <Content><span>{content}</span>{}</Content>
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
