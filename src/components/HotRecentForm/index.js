import React, { useState, useEffect } from 'react'
import Post from "./Post"
import styled from 'styled-components';
const Title = styled.span`
    font-size : 24px;
    font-weight : bold;
    margin-right: 20px;
`
const Icon = styled.div`
    color : #1ABC9C;
    margin-top : 2px;
    font-size : 20px;
`
const BgTitle = styled.div`
    display:flex;
    flex-direction : row;
    margin-bottom : 40px;

`
const Background =styled.div`
    margin-bottom : 12px;
    display : flex;
    flex-direction : column;
    align-items : flex-start;
    padding : 40px 20px;
    background: #FFFFFF;
    max-width : 400px;
    box-shadow: 0px 4px 4px rgba(193, 193, 193, 0.25);
    
`

const Posts = styled.ul`
    // display : flex;
    // flex-diretion : column;
`
function HotRecentForm(props) {
    // console.log(props.listPost);
    return (
        <Background>
        <BgTitle>
        <Title>
            {props.title}
        </Title>
        <Icon>
        <i className = {props.icon}></i>
        </Icon>
        </BgTitle>
        <Posts>
            {props.listPost !== null?<>{props.listPost.map(post => <Post url = {props.url} post = {post}></Post>)}</>:<>aaaaa</>}
        </Posts>
        </Background>
    )
}

export default HotRecentForm;
