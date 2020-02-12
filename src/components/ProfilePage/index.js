import React ,{useEffect,useState}from 'react'
import { useDispatch } from 'react-redux';
import axios from '../../axios';
import Info from "./Info"
import Container from "../Container"
import styled from 'styled-components';

const FlexRowBetween = styled.div`
    display : flex;
    flex-direction: row;
    justify-content : space-between;
    // margin-top: 0px;
`
const Posts = styled.div`
    width : 760px;
    height: 1000px;
    background-color : green;
    margin-top: 88px;

`

function HookProfilePage() {
    const dispatch = useDispatch();
    return (
        <Container>
            <FlexRowBetween>
                <Posts>
                    a
                </Posts>
            <Info />
            </FlexRowBetween>
        </Container>
    )
}
export default HookProfilePage;