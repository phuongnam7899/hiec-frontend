import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import axios from '../../axios';
import Info from "./Info"
import Container from "../Container"
import styled from 'styled-components';
import MyPosts from "./Posts"
import withNavAndFooter from "../HOC/withNavAndFooter"
const FlexRowBetween = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-between;
    padding-top: 88px;
`


function HookProfilePage() {
    const dispatch = useDispatch();
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