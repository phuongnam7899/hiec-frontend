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
`


function ButtonWrite(props) {
    const [writePostVisible,setWritePostVisible] = useState(false);
    const [buttonVisible,setButtonVisible] = useState(false);
    const [isForum,setIsForum] = useState(false);
    const [isNews,setIsNews] = useState(false);
    const [isProject,setIsProject] = useState(false);
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

    useEffect(()=>{
        if(window.location.href.includes("/forum")){
            setIsForum(true);
            setIsProject(false);
            setIsNews(false);
            setButtonVisible(true);

        }
        else if(window.location.href.includes("/news")){
          setIsForum(false);
          setIsProject(false);
          setIsNews(true);
          if(user.isAdmin){
            setButtonVisible(true);
          }
        }
        else if(window.location.href.includes("/project")){
          setIsForum(false);
          setIsProject(true);
          setIsNews(false);
          if(user.isAdmin){
            setButtonVisible(true);
          }
        }
    },[])
    return (<>
        {buttonVisible?<Button onClick = {click}>Thêm bài viết</Button>:<></>}
        <WritePost visible={writePostVisible} onTurnOffWritePost={() => {turnOffWritePost()}}></WritePost>
        </>
    )
}

export default withRouter(ButtonWrite)
