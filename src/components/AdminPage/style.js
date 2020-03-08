import styled from 'styled-components';

export const Input = styled.input`
    outline : none;
    padding : 4px 6px;
    font-size : 16px;
    border : none;
    background-color: rgba(255, 0, 0, 0.0);
    border-bottom : 1px solid black;
    transition : 0.1s all;
    &:focus {
        border-bottom : 1px solid #37A28D;
        padding : 4px 8px;
    }


`

export const Button = styled.button`
    margin-left : 12px;
    border : none ;
    border-radius : 4px;
    padding : 4px 6px;
    background-color : #37A28D;
    color : white;
    cursor : pointer;
    transition : 0.3s all;
    width : 80px;
    &:hover{

        background-color : #a24d37 ;
    }
`

export const Form = styled.form`
    margin : 12px 0px;
`