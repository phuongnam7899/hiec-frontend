import React , {useState} from 'react'
import {Input,Button,Form} from "../style"
import axios from "../../../axios"
function DeletePost() {
    const [text,setText] = useState("");
    const token = localStorage.getItem("hiec_user_token")
    const userID = localStorage.getItem("hiec_user_id")

    const deletePost = async (e) =>{
        e.preventDefault();
        if(text){
            // console.log(text)
            try{
                const res = await axios.delete(`/api/admin/post/${text}/${userID}/${token}?token=${token}`)
                if(res.data.message === "delete success"){
                    alert("XÓA TIN THÀNH CÔNG");
                    setText("");
                }else{
                    throw new Error("ID XÓA TIN KHÔNG TỒN TẠI")
                }
            }
            catch(err){
                // console.log(err);
                alert(err)
            }

        }
    }
    return (
        <Form onSubmit = {deletePost}>
            <Input placeholder ="Nhập ID Để Xóa Bài"  value = {text} onChange = {(e)=>{setText(e.target.value)}}/>
            <Button onClick = {deletePost} >Xóa Bài</Button>
        </Form>
    )
}

export default DeletePost;
