import React from 'react'
import styled from 'styled-components';
const Button = styled.i`
    display : block;
    position : fixed;
    bottom : 20px;
    right : 20px;
    cursor : pointer;
    font-size : 2em;
    :hover{
        color : ${props  => props.theme.COLOR};
    }
`

function ScrollTopButton() {
    const scrollTop = () =>{
        window.scrollTo(0,0);
    }
    return (
       <Button onClick = {scrollTop} className="fas fa-angle-double-up"></Button>
    )
}

export default ScrollTopButton;