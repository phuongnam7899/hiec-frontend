import React from 'react'
import styled from 'styled-components';
const Button = styled.div`
    position : fixed;
    bottom : 10px;
    right : 10px;
    width : 50px;
    height : 50px;
    background-color :#cccad1;
    opacity : 0.5;
    cursor : pointer;
    transition : 0.2s all;
    :hover{
        opacity : 0.8
    }
`

function ScrollTopButton() {
    const scrollTop = () =>{
        window.scrollTo(0,0);
    }
    return (
       <Button onClick = {scrollTop}></Button>
    )
}

export default ScrollTopButton;