import React ,{useEffect,useState} from 'react'

import LandingPage from "./components/LandingPage"
import ProfilePage from "./components/ProfilePage"
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
import ChangePasswordPage from './components/ChangePasswordPage'
import NotificationBox from "./components/NotificationBox"
export default function App() {
  const visible = useSelector(state=>state.notificationBox.visible)
  const success = useSelector(state =>state.notificationBox.success)
  const dispatch = useDispatch();
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



  console.log(visible)
  return (
    <Router>
      <div style = {{backgroundColor : "#F6F6F6",height: "100%"}}>
      <Route path = "/box" component = {NotificationBox}/>
      <Route path= "/" exact  component = {LandingPage} />
      <Route path= "/forum" exact  render = {() =>  <ForumPage /> } />
      <Route path= "/profile/:id" exact render = {() =>  <ProfilePage /> } />
      <Route exact path = "/sign-up" render = {() =>  <SignUp /> }/>
      <Route exact path = "/sign-in" render = {() => <SignIn/> }/>
      <Route path= "/news" exact  render = {() => <NewsPage/> } />
      <Route path= "/project" exact  render = {() => <NewsPage/> } />
      <Route path= "/change-password"  render = {() => <ChangePasswordPage/> } />
      {visible?<NotificationBox message = {success?"Thành Công":"Thất Bại"} success = {success}></NotificationBox>:<></>}
    </div>
    </Router>
  )
}
