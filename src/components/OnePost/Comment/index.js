import React from 'react'
import styled from 'styled-components'
import { breakpoint } from '../../../styles/mixin'


const Img = styled.img`
    width: 40px;
    height:40px;
    border-radius: 999px;
    margin-right:5px;
    ${breakpoint.tb`
    width: 30px;
    height:30px;
    `}
${breakpoint.ml`
    width: 25px;
    height:25px;
    `}
`
const CommentBox = styled.div`
    display:flex;
    margin-bottom: 10px;

`
const Cmt = styled.div`
background: #f5f5f5;
border-radius: 20px;
max-width : calc(100% - 40px);
padding: 6px 12px;

`
const Text = styled.span`
    overflow-wrap: break-word;
    font-size: 14px;
    ${breakpoint.tb`
    font-size: 12px
    `}
${breakpoint.ml`
    font-size: 10px
    `}
    
`
const Name = styled.span`

font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 23px;
display: flex;
align-items: center;
cursor : pointer;
color: #0853B6;
&:hover{
    text-decoration : underline;
}
${breakpoint.tb`
font-size: 16px;
`}
${breakpoint.ml`
font-size: 12px;
`}
`
function Comment(props) {
    const comment = props.comment
    const userID = props.comment.user._id
    const goToProfile = () =>{
        if(userID){
            window.location.assign("/profile/" + userID);
        }
    }
    return (
        <CommentBox>
            <Img src={comment.user.profile.avatar}></Img>
            <Cmt>
                <Name onClick = {goToProfile} >
                    {comment.user.profile.name}
                </Name>
                <Text>{comment.content}</Text>
            </Cmt>
        </CommentBox>
    )
}

export default Comment
