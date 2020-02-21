import React ,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {withRouter} from "react-router-dom"
import WritePost from "../WritePost"
import {useSelector} from "react-redux"
const Button = styled.button`
     margin-bottom : 12px;
     border : none;
     padding : 10px;
     border-radius : 10px;
     background-color : #37A28D;
     color : #fff;
     cursor : pointer;
     font-weight : 600;
     font-size : 20px;
     transition : 0.1s all;
     text-align : center;
     &:hover {
      background-color : #1ABC9C
     }
     & i {
       margin-left : 4px;
     }
`


function ButtonWrite(props) {
    const [writePostVisible,setWritePostVisible] = useState(false);
    const [buttonVisible,setButtonVisible] = useState(true);
    const user = useSelector(state => state.user);
    const turnOnWritePost = () => {
      setWritePostVisible(true);
      setButtonVisible(false);
    }
    const click = ()=>{
        if(!user._id){
          props.history.push("/sign-in");
        }else{
          turnOnWritePost();   
        }
    }
    const turnOffWritePost = () => {
      setWritePostVisible(false);
      setButtonVisible(true);
    }
    useEffect(() => {
      console.log(writePostVisible)
    },[writePostVisible])
    return (<>
        {buttonVisible?<Button onClick = {click}>Thêm bài viết <i class="fas fa-plus"></i></Button>:<></>}
        <WritePost userId = {user._id} visible={writePostVisible} onTurnOffWritePost={() => {turnOffWritePost()}}></WritePost>
        </>
    )
}

export default withRouter(ButtonWrite)
