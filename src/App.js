import React ,{useEffect} from 'react'
import HookNavBar from "./components/nav-bar/navBar"
import {  BrowserRouter as Router } from "react-router-dom";
import "./App.css";
export default function App() {

  return (
    <Router>
    <div style = {{backgroundColor : "#F6F6F6",height: "100vh"}}>
      <HookNavBar/>
    
    </div>
    </Router>
  )
}
