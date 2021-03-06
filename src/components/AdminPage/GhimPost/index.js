import React , {useState} from 'react'

import {Input,Button,Form} from "../style"
import axios from '../../../axios';

function GhimPost() {
    const [text,setText] = useState("");
    const token = localStorage.getItem("hiec_user_token")
    const userID = localStorage.getItem("hiec_user_id")
    const ghimPost = async (e) =>{
        e.preventDefault();
        if(text && token){
            try{
                const res = await axios.put("/api/news/ghim",{
                    id : text,
                    token,
                    userID,
                })
                // console.log(res);
                if(res.data === "Update bài ghim thành công"){
                    setText("")
                    alert("GHIM BÀI THÀNH CÔNG")
                }else{
                    throw new Error("LỖI ID BÀI VIẾT")
                }
            }catch(err){
                alert(err)
            }


        }
    }
    return (
        <Form onSubmit = {ghimPost}>
            <Input placeholder ="Nhập ID Bài Cần Ghim"  value = {text} onChange = {(e)=>{setText(e.target.value)}}/>
            <Button onClick = {ghimPost} >Ghim Bài</Button>
        </Form>
    )
}

export default GhimPost
