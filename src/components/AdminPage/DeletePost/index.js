import React , {useState} from 'react'
import {Input,Button,Form} from "../style"
import axios from "../../../axios"
function DeletePost() {
    const [text,setText] = useState("");

    const ghimPost = async (e) =>{
        e.preventDefault();
        if(text){
            // console.log(text)
            try{
                const res = await axios.delete("/api/news/"+text)
                if(res.data._id === text){
                    alert("XÓA BÀI THÀNH CÔNG");
                    setText("");
                }else{
                    throw new Error("ID XÓA BÀI KHÔNG TỒN TẠI")
                }
            }
            catch(err){
                // console.log(err);
                alert(err)
            }

        }
    }
    return (
        <Form onSubmit = {ghimPost}>
            <Input placeholder ="Nhập ID Để Xóa Bài"  value = {text} onChange = {(e)=>{setText(e.target.value)}}/>
            <Button onClick = {ghimPost} >Xóa Bài</Button>
        </Form>
    )
}

export default DeletePost;
