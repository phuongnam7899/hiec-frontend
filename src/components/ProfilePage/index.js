import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../axios';
import Info from "./Info"
import Container from "../Container"
import styled from 'styled-components';
import MyPosts from "./Posts"
import withNavAndFooter from "../HOC/withNavAndFooter"
import { breakpoint } from '../../styles/mixin';
const FlexRowBetween = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-between;
    padding-top: 88px;
    ${breakpoint.ls`
        flex-direction : column-reverse;
    `}
`


function HookProfilePage() {
    const dispatch = useDispatch();
   
    useEffect(() => {
        window.scrollTo(0,0)
        const id = window.localStorage.getItem("hiec_user_id");
        if(!id){
            window.location.assign("/sign-in")
        }
    },[])
    return (
        <Container>
            <FlexRowBetween>
                <MyPosts>
                </MyPosts>
                <Info />
            </FlexRowBetween>
        </Container>
    )
}
export default withNavAndFooter(HookProfilePage);