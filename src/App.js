import React ,{useEffect,useState} from 'react'
import HookNavBar from "./components/NavBar"
import LandingPage from "./components/LandingPage"
import Footer from "./components/Footer"
// import SignIn from "./components/SignIn/index"
import WritePost from "./components/WritePost"
import {  BrowserRouter as Router,Route } from "react-router-dom";
import "./App.css";
export default function App() {

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
    <div style = {{backgroundColor : "#F6F6F6"}}>
      <Route path=  "/"  component = {HookNavBar} />
      <Route path= "/" exact  component = {LandingPage} />
      {/* <Route path= "/sign-in" exact  component = {SignIn} /> */}
      <Route path= "/"  component = {Footer} />

      {/* Phần này để test write post, không xóa */}
      <button onClick={() => {turnOnWritePost()}}>New Post</button>
      <Route path= "/" render = {() => <WritePost visible={writePostVisible} onTurnOffWritePost={() => {turnOffWritePost()}} />} />

      
    </div>
    </Router>
  )
}
