import React from 'react'
import styled from 'styled-components'
const Icon = styled.i`
    color : #1ABC9C;
    margin-right : 8px;
    &::before{
        margin-top : 4px;
    }
`
const Span = styled.span`
    margin-right : 24px;
    color : black;
    font-size : 12px;
    font-weight : 600;
`
function IconWithNumber(props) {
    return (
        <>
         <Icon className = {props.icon}></Icon>
    <Span>{props.number}</Span>   
        </>
    )
}

export default IconWithNumber
