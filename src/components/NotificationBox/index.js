import React, {useState,useEffect} from 'react'
import styled from 'styled-components';
import { breakpoint } from '../../styles/mixin';

const Box = styled.div`
    padding-top:88px;
    z-index : 999;
    position : fixed;
    top :0px;
    right : ${props=>props.visible?"0px":"-1000px"};
    transition :  ${props=>props.visible?"2s":"1s"} all;

`

const Background = styled.div`
    padding-left : 8px;
    padding-right : 40px;
    background: ${props=>props.success?"#21D689":"#D63C21"};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    display : flex;
    align-items : center;
    ${breakpoint.ml`
        padding-left : 4x;
        padding-right : 30px;
    `}

    `

const Icon = styled.i`
    font-size : 20px;
    color  : white;
    text-align :center;
    margin-left : 10px;
    ${breakpoint.ml`
        font-size : 14px;
    `}
`

const Text = styled.span`
    color  : white;
    padding : 10px;
    font-size : 20px;
    text-align :center;
    ${breakpoint.ml`
        font-size : 14px;
        padding  : 6px;
    `}

    `
function NotificationBox(props) {
    const [visible,setVisible] = useState(false);
    const {success,message} = props;


    useEffect(()=>{
        setVisible(true);
        setTimeout(()=>{
            setVisible(false);
        },5000)
    },[])
    useEffect(()=>{
        clearTimeout()
    },[visible])
    return (
        <Box visible ={visible}>
            <Background success = {success}>
    <Icon className={success?"fas fa-check-circle":"fas fa-times-circle"}></Icon><Text>{message}</Text>
            </Background>
        </Box>
    )
}

export default NotificationBox
