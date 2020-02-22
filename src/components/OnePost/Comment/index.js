import React from 'react'
import styled from 'styled-components'



const Img = styled.img`
    width: 40px;
    height:40px;
    border-radius: 999px;
    margin-right:5px
`
const CommentBox = styled.div`
    display:flex;
    margin-bottom: 10px;

`
const Cmt = styled.div`
background: #E8E8E8;
border-radius: 20px;
max-width : calc(100% - 40px);
padding: 10px 12px;
`
const Text = styled.span`
    overflow-wrap: break-word;
`
const Name = styled.span`

font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;

color: #2D8F7C;
`
function Comment(props) {
    const comment = props.comment
    
    return (
        
        <CommentBox>
           <Img src = {comment.user.profile.avatar}></Img> 
            <Cmt>
                <Name >
                    {comment.user.profile.name}
                </Name>
                
            
                <Text>{comment.content}</Text>
            </Cmt>
        </CommentBox>
    )
}

export default Comment
