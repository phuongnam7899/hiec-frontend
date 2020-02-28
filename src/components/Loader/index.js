import React from 'react'
import styled, { keyframes } from 'styled-components'
const Background = styled.div`
    transition : 0.1s all;
    position : fixed;
    background-color : black;
    top : 0;
    left : 0;
    opacity : 0.5;
    width : 100%;
    height : 100vh;
`
const spin = keyframes`
0% { 

    transform: rotate(0deg);
 }
25% { 
    transform: rotate(120deg);
 }

 50% { 
    transform: rotate(180deg);
 }
 75% { 
    transform: rotate(240deg);
 }
 100% { 
    transform: rotate(360deg);
 }
`
const LoadAnimate = styled.div`
transition : 0.1s all;
opacity : 1;
position : absolute;
top : calc(50% - 60px);
left : calc(50% - 60px);
border: 16px solid #f3f3f3;
border-radius: 50%;
border-top: 16px solid blue;
border-right: 16px solid green;
border-bottom: 16px solid red;
border-left: 16px solid pink;
width: 120px;
height: 120px;
-webkit-animation: spin 2s linear infinite;
animation: ${spin} 2s linear infinite;
`




function Loader() {
    return (
        <Background>
            <LoadAnimate></LoadAnimate>
        </Background>
  
    )
}

export default Loader
