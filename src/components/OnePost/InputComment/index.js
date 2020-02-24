import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"
const Box = styled.form`
display : flex;
align-items : flex-start;
margin-bottom: 10px;
`
const Input = styled.input`
border : none;
outline : none;
background: #E8E8E8;
border-radius: 20px;
width : calc(100% - 40px);
padding: 12px 12px
`

const AvatarUser = styled.img`
width: 40px;
height:40px;
border-radius: 999px;
margin-right:5px
`
function InputComment(props) {
    const [text,setText]= useState("")
    const user = useSelector(state => state.user);
    const submitText = (e)=>{
        e.preventDefault()
        if(text){
            props.submitText(text);
            setText("")
        }
      
    }
    return (
       <Box onSubmit ={submitText}>
           <AvatarUser src = {user.profile.avatar}/>
           <Input name ="comment-input" placeholder = "Nhập bình luận của bạn ..." value = {text} onChange = {(e)=>setText(e.target.value)}/>
       </Box>
    )
}

export default InputComment;
