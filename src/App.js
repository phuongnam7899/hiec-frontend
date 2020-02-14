import React ,{useEffect,useState} from 'react'
import HookNavBar from "./components/NavBar"
import LandingPage from "./components/LandingPage"
import Profile from "./components/ProfilePage"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Footer from "./components/Footer"
// import SignIn from "./components/SignIn/index"
import WritePost from "./components/WritePost"
import {  BrowserRouter as Router,Route } from "react-router-dom";
import "./App.css";
import { useDispatch } from 'react-redux'
import { saveUser } from './actions/user'
import {addToken} from "./actions/token"
import axios from './axios'
export default function App() {
  const dispatch = useDispatch()
  useEffect(()=>{

    const hiec_user_id = sessionStorage.getItem("hiec_user_id")
    const hiec_user_token = sessionStorage.getItem("hiec_user_token");
    if(hiec_user_id){
      axios.get("/api/user/"+hiec_user_id).then(res=>{
        dispatch(addToken(hiec_user_token))
        dispatch(saveUser(res.data))
  
      })
    }
  },[])

  //không xóa phần này
  const [writePostVisible,setWritePostVisible] = useState(false)
  const turnOnWritePost = () => {
    setWritePostVisible(true);
  }
  const turnOffWritePost = () => {
    setWritePostVisible(false);
  }
  useEffect(() => {
    console.log(writePostVisible)
  },[writePostVisible])
  return (
    <Router>
    <div style = {{backgroundColor : "#F6F6F6",height: "100%"}} >

      <Route path=  "/"  component = {HookNavBar} />
      <Route path= "/" exact  component = {LandingPage} />
      <Route path= "/profile/:id" exact  component = {Profile} />
      <Route exact path = "/sign-up" component = {SignUp}/>
      <Route exact path = "/sign-in" component = {SignIn}/>
      <Route path= "/"  component = {Footer} />

      {/* Phần này để test write post, không xóa */}
      <button onClick={() => {turnOnWritePost()}}>New Post</button>
      <Route path= "/" render = {() => <WritePost visible={writePostVisible} onTurnOffWritePost={() => {turnOffWritePost()}} />} />

      
    </div>
    </Router>
  )
}
