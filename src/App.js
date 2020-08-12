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
import OneNew from './components/OneNew'
import OnePost from './components/OnePost'
import ChangePasswordPage from './components/ChangePasswordPage'
import NotificationBox from "./components/NotificationBox"
import AbouUsPage from "./components/AboutUsPage"
import LoadingBar from './components/LoadingBar'
import AdminPage from './components/AdminPage'
import ScrollTopButton from './components/ScrollTopButton'
import NotFoundPage from './components/404notFound'
import { ThemeProvider } from 'styled-components'



 export const theme = {
  COLOR : "#0853B6",
  HOVER_COLOR : "#093ea8",
  time: ".3s all",
  textButton: "white",
  text: "black",
  backgroundColor: "white",
}

export default function App() {
  const visible = useSelector(state=>state.notificationBox.visible)
  const success = useSelector(state =>state.notificationBox.success)
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(()=>{
    const hiec_user_id = localStorage.getItem("hiec_user_id")
    const hiec_user_token = localStorage.getItem("hiec_user_token");
    if(hiec_user_id){
      axios.get(`/api/user/${hiec_user_id}?token=${localStorage.getItem("hiec_user_token")}`).then(res=>{
        // console.log(res)
        if(res.data.message === "Token exprired"){
            localStorage.setItem("hiec_user_id","")
            localStorage.setItem("hiec_user_token","")
            window.location.assign('/sign-in')
        }
        dispatch(addToken(hiec_user_token))
        dispatch(saveUser(res.data))
        
      })
    }
  },[])


  // console.log(visible)
  return (
    <Router>
      <ThemeProvider theme = {theme}>
      <div style = {{backgroundColor : "#F6F6F6",height: "100%"}}>
      <LoadingBar/>
      <Route path = "/admin" exact component = {NotFoundPage}/>
      {user._id?<Route path = "/dm-hacker" exact component = {AdminPage}/>:null}

      <Route path= "/" exact  component = {LandingPage} />
      <Route path= "/forum" exact  component = {ForumPage} />
      <Route path= "/profile/:id" exact  component = {ProfilePage} />
      <Route exact path = "/sign-up" component = {SignUp}/>
      <Route exact path = "/sign-in" component = {SignIn}/>
      <Route path= "/forum/:id" exact component = {OnePost}/>
      <Route path= "/news/:id" exact component = {OneNew}/>
      <Route path= "/project/:id" exact component = {OneNew}/>
      <Route path= "/about-us" exact component = {AbouUsPage}/>
      <Route path= "/news" exact  component = {NewsPage}  />
      <Route path= "/project" exact  component = {NewsPage} />
      <Route path= "/change-password" exact render = {() => <ChangePasswordPage/> } />
      <Route path = "/404-not-found" exact render = {()=><NotFoundPage/>}/>


      {visible?<NotificationBox message = {success?"Thành Công":"Thất Bại"} success = {success}></NotificationBox>:<></>}
      <ScrollTopButton />
    
    </div>
    </ThemeProvider>
    </Router>
  )
}
