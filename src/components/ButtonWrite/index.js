import React ,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {withRouter} from "react-router-dom"
import WritePost from "../WritePost"
import {useSelector} from "react-redux"
import { breakpoint } from "../../styles/mixin"
const Button = styled.button`
     margin-bottom : 12px;
     border : none;
     padding : 10px;
     border-radius : 10px;
     background-color : ${props  => props.theme.COLOR};
     color : #fff;
     cursor : pointer;
     font-weight : 600;
     font-size : 20px;
     transition : 0.1s all;
     text-align : center;
     &:hover {
      background-color : ${props  => props.theme.HOVER_COLOR}
     }
     & i {
       margin-left : 4px;
     }
     ${breakpoint.ml`
        font-size : 14px;
        margin-bottom : 4px;
     `}
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
      // console.log(writePostVisible)
    },[writePostVisible])
    return (<>
        {buttonVisible?<Button onClick = {click}>Thêm bài viết <i className ="fas fa-plus"></i></Button>:<></>}
        <WritePost postSuccess = {(value)=>props.postSuccess(value)}  userId = {user._id} visible={writePostVisible} onTurnOffWritePost={() => {turnOffWritePost()}}></WritePost>
        </>
    )
}

export default withRouter(ButtonWrite)
