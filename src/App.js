import React ,{useEffect,useState} from 'react'

import LandingPage from "./components/LandingPage"
import Profile from "./components/ProfilePage"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import {  BrowserRouter as Router,Route } from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from 'react-redux'
import { saveUser } from './actions/user'
import {addToken} from "./actions/token"
import axios from './axios'
import NewsPage from './components/NewsPage'
import ForumPage from './components/ForumPage'
import OneNew from './components/OneNew'
import OnePost from './components/OnePost'
import ChangePasswordPage from './components/ChangePasswordPage'
import NotificationBox from "./components/NotificationBox"
export default function App() {
  const [visible,setVisbile] = useState(false);
  const dispatch = useDispatch()
  useEffect(()=>{
    const hiec_user_id = localStorage.getItem("hiec_user_id")
    const hiec_user_token = localStorage.getItem("hiec_user_token");
    if(hiec_user_id){
      axios.get("/api/user/"+hiec_user_id).then(res=>{
        dispatch(addToken(hiec_user_token))
        dispatch(saveUser(res.data))
      })
    }
  },[])

  const show = ()=>{
    setVisbile(true);
    setTimeout(()=>{
      setVisbile(false)
    },10000);
  }

  //không xóa phần này
  return (
    <Router>
 
      <div style = {{backgroundColor : "#F6F6F6",height: "100%"}}>
      <Route path = "/box" component = {NotificationBox}/>
      <Route path= "/" exact  component = {LandingPage} />
      <Route path= "/forum" exact  component = {ForumPage} />
      <Route path= "/profile/:id" exact  component = {Profile} />
      <Route exact path = "/sign-up" component = {SignUp}/>
      <Route exact path = "/sign-in" component = {SignIn}/>
      <Route path= "/forum/:id" exact component = {OnePost}/>
      <Route path= "/news/:id" exact component = {OneNew}/>
      <Route path= "/project/:id" exact component = {OneNew}/>

      <Route path= "/news" exact  render = {() => <NewsPage/> } />
      <Route path= "/project" exact  render = {() => <NewsPage/> } />
      <Route path= "/change-password"  render = {() => <ChangePasswordPage/> } />
      <button onClick = {show}>Test NotificationBox</button>
      {visible?<NotificationBox message = "Thành Công" success = {true}></NotificationBox>:<></>}
    </div>
    </Router>
  )
}
