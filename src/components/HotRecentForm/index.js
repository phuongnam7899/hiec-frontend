import React, { useState, useEffect } from 'react'
import Post from "./Post"
import styled from 'styled-components';
import { breakpoint } from '../../styles/mixin';
const Title = styled.span`
    font-size : 20px;
    font-weight : bold;
    margin-right: 20px;
    & i {
        color : ${props  => props.theme.COLOR};
        margin-left : 8px;
    }
    ${breakpoint.ml`
        font-size : 18px;
    `}
`
const BgTitle = styled.div`
    display:flex;
    flex-direction : row;
    margin-bottom : 40px;
    ${breakpoint.ml`
        margin-bottom : 12px;
    `}

`
const Background =styled.div`
    margin-bottom : 12px;
    display : flex;
    flex-direction : column;
    align-items : flex-start;
    padding : 40px 20px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(193, 193, 193, 0.25);
    width : 100%;
    ${breakpoint.tb`
        display : none;
    `}
    ${breakpoint.ml`
        padding : 16px;
    `}

`

const Posts = styled.ul`
    width : 100%;
`
function HotRecentForm(props) {
    // console.log(props.listPost);
    return (
        <Background>
        <BgTitle>
        <Title>
            <span>{props.title}</span>
            <i className = {props.icon}></i>
        </Title>
        </BgTitle>
        <Posts>
            {props.listPost !== null?<>{props.listPost.slice(0,5).map(post => <Post url = {props.url} post = {post}></Post>)}</>:<>aaaaa</>}
        </Posts>
        </Background>
    )
}

export default HotRecentForm;
