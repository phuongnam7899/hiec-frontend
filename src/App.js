import React ,{useEffect} from 'react'
import HookNavBar from "./components/NavBar"
import LandingPage from "./components/LandingPage"
// import SignIn from "./components/SignIn/index"
import {  BrowserRouter as Router,Route } from "react-router-dom";
import "./App.css";
export default function App() {

  return (
    <Router>
    <div style = {{backgroundColor : "#F6F6F6",height: "100vh"}}>
      <Route path=  "/"  component = {HookNavBar} />
      <Route path= "/" exact  component = {LandingPage} />
      {/* <Route path= "/sign-in" exact  component = {SignIn} /> */}
      
    </div>
    </Router>
  )
}
