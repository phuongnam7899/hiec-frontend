import React from 'react'
import HookNavBar from "./components/nav-bar/navBar"
import LandingPage from "./components/LandingPage"

import "./App.css";
export default function App() {
  return (
    <div style = {{backgroundColor : "#F6F6F6",height: "100vh"}}>
      <HookNavBar/>
      <LandingPage></LandingPage>
    </div>
  )
}
