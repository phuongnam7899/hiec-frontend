import React ,{useEffect} from 'react'
import HookNavBar from "./components/NavBar"
import LandingPage from "./components/LandingPage"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import {  BrowserRouter as Router,Route } from "react-router-dom";
import "./App.css";
export default function App() {

  return (
    <Router>
    <div style = {{backgroundColor : "#F6F6F6",height: "100vh"}}>
      <Route path = "/" component = {HookNavBar} />
      <Route exact path = "/" component = {LandingPage}/>
      <Route exact path = "/sign-up" component = {SignUp}/>
      <Route exact path = "/sign-in" component = {SignIn}/>

    </div>
    </Router>
  )
}
