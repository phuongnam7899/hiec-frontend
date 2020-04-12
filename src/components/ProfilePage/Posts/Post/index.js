import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import AvatarWithName from "./AvatarWithName"
import Tag from "./Tags"
import { NavLink } from "react-router-dom"
import IconWithNumber from "./IconWithNumber"
import axios from '../../../../axios'
import { useDispatch } from "react-redux"
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { breakpoint } from '../../../../styles/mixin'
import YesNoDialog from '../../../YesNoDialog'
const PostForm = styled.div`
    margin-bottom: 16px;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(193,193,193,0.25);
    padding : 28px;
    width : 100%;
    cursor : pointer;
    ${breakpoint.ml`
        padding : 16px;
    `}
    
    
`
const Tags = styled.div`
    display : flex;
    flex-wrap : wrap;
    margin-bottom : 20px;
    ${breakpoint.ml`
        margin-bottom : 10px;
        
    `}
`

const Title = styled.div`
    font-weight: bold;
    margin-bottom : 20px;
    max-width : 90%;
    font-size : 18px;
    overflow-wrap : break-word;
    ${breakpoint.tb`
    & >span{
        font-size : 20px;
    }
    `}
    ${breakpoint.ml`
    max-width : 100%;
    margin-bottom : 14px;
    & >span{
        font-size : 14px;
        line-height : 80%;
    }
    `}

`
const Content = styled.div`
    margin-bottom : 30px;
    color: black;
    overflow-wrap : break-word;
    ${breakpoint.ml`
        font-size : 12px;
        margin-bottom : 10px;
    `}
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
const MoreTxt = styled.div`
&:hover {
    color: #0853b6;
}
${breakpoint.ml`
font-size : 10px;
`}
`


function Post(props) {
    const [dialog,setDialog] = useState(false);
    const { post, linkTo } = props;
    const { user, tags, postTime, title, claps, comments, viewers, _id, content } = post;
    const defaultUser = { name: "Admin", avatar: "" }
    const { name, avatar } = user ? user.profile : defaultUser;
    const dispatch = useDispatch();
    const [isDelete, setIsDelete] = useState(false);
    console.log(user)
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
    finalContent = finalContent.slice(0, 150) + "...";


    const deletePost = async (e) => {
        // console.log("CLICK")
        // e.stopPropagation()
        // e.stopPropagation();
        if (user._id === localStorage.getItem("hiec_user_id")) {
            dispatch(showLoading())
            try {
                const res = await axios.delete(`/api/post/${_id}?token=${localStorage.getItem("hiec_user_token")}`)
                setTimeout(() => {
                    dispatch(hideLoading())
                }, 1000)
                dispatch({ type: "SET_VISIBLE_AND_SUCCESS" })
                setTimeout(() => {
                    dispatch({ type: "SET_NOT_VISIBLE" })
                }, 10000)
                setIsDelete(true)
                setDialog(false);
            } catch (err) {
                setTimeout(() => {
                    dispatch(hideLoading())
                }, 1000)
                dispatch({ type: "SET_VISIBLE_AND_NOT_SUCCESS" })
                setTimeout(() => {
                    dispatch({ type: "SET_NOT_VISIBLE" })
                }, 10000)
                setDialog(false);
                console.log(err)
            }
        }
    }

    const goToPost = (e) => {
        window.location.assign(linkTo + "/" + _id)
    }
    const showDialogDelete = () =>{
        setDialog(true);
    }
   


    return (
        <>
            <YesNoDialog visible = {dialog} type = "danger" 
             message = "Xác nhận xóa bài ?" onClickYes = {deletePost} onClickNo = {()=>setDialog(false)}/>
            {isDelete ? <></> :

                <>

                    {/* <More to={}> */}
                    <PostForm >
                        <AvatarWithName  isDelete={showDialogDelete} avatar={avatar} name={name} postTime={postTime} userID={user._id} />
                        <Tags onClick={goToPost} >
                            {tags.map(item => <Tag tag={item} />)}
                        </Tags >
                        <Title onClick={goToPost} ><span>{title}</span></Title>
                        <Content onClick={goToPost}><span>{finalContent}</span>{}</Content>
                        <Icons onClick={goToPost}>
                            <Icons>
                                <IconWithNumber icon="fas fa-eye" number={viewers.length} />
                                <IconWithNumber icon="fas fa-sign-language" number={claps.length} />
                                <IconWithNumber icon="fas fa-comment" number={comments.length} />
                            </Icons>
                            <MoreTxt><span>Xem thêm </span><Arrow className="fas fa-arrow-right"></Arrow></MoreTxt>
                        </Icons>
                    </PostForm>
                    {/* </More> */}
                </>
            }
        </>
    )
}

export default Post
