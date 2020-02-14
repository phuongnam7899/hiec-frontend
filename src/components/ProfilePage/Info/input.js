import React from 'react'
import styled from 'styled-components'
const Icon = styled.i`
    color : #37A28D;

        width : 20px;
        height : 20px;
    
  
`
const Info = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    margin : 8px 0;  

`
const Input = styled.input`
&:focus {
    outline: none;
}
    ${(props) => {
        switch (props.size) {
            case "normal":
                return `font-size : 24px;
                        font-weight : bold;`;
            default:
                return `font-size : 18px;
                        font-weight : 400;
        `

        }
    }}
    border : none;
    border-bottom : 1px solid black; 
    width : 200px;
    transition : 0.1s all


`
const Span = styled.span`
    ${(props) => {
        switch (props.size) {
            case "normal":
                return `font-size : 24px;
                            font-weight : bold`;
            default:
                return `font-size : 18px;
                            font-weight : 400`
        }
    }}`



const InputFunc = (props) => {
    const changeInfo = (e) => {
        props.change(e.target.value)
    }
    const isUpdate = props.update ? <Input size={props.size} type={props.type} value={props.info} onChange={changeInfo} />
        : <Span size={props.size}>{props.info}</Span>
    return (
        <Info>

            <Icon className={props.name}></Icon>

            <div style={{ marginLeft: "16px" }}>
                {isUpdate}
            </div>
        </Info>
    )
}

export default InputFunc;
