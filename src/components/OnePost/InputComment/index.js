import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"
import {breakpoint} from '../../../styles/mixin'


const Box = styled.form`
display : flex;
align-items : flex-start;
margin-bottom: 10px;
`
const Input = styled.input`
border : none;
outline : none;
background: #f5f5f5;
border-radius: 20px;
width : calc(100% - 40px);
padding: 12px 12px;
overflow-wrap: break-word;
${breakpoint.tb`
padding: 10px 12px;
font-size: 10px;
`}
${breakpoint.ml`
padding: 6px 12px;
font-size: 8px;
`}

`

const AvatarUser = styled.img`
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
           <AvatarUser align="middle" src = {user.profile.avatar}/>
           <Input name ="comment-input" placeholder = "Nhập bình luận của bạn..." value = {text} onChange = {(e)=>setText(e.target.value)}/>
       </Box>
    )
}

export default InputComment;
