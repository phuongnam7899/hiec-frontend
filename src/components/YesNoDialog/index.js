import React from "react"
import styled from "styled-components"
import { breakpoint } from "../../styles/mixin"

// const YesNoBG = styled.div`
//     position : absolute;
//     top : 0;
//     z-index : 19;
//     background-color :black;
//     // opacity : 0.7;
//     width : 100vw;
//     height : 100vh;
// `

const DialogContainer = styled.div`
    padding : 24px;
    background-color : #ffffff;
    border-radius : 15px;
    width : 70vw;
    max-width : 350px;
    height : 30vh;
    max-height : 170px;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    box-shadow : 0 0 5px #9c9c9c;
    position : fixed;
    left : 50%;
    top : 20%;
    transform : translate(-50%, 50%);
    z-index : 20;

`
const Options = styled.div`
    display : flex;
    justify-content : space-around;
    width : 100%;
`
const Content = styled.div`
& i {
    margin-right : 4px;
    font-size : 1.3em;
    color : #FFAD31;
}
`

const Message = styled.span`
font-size : 20px;
text-align : center;
${breakpoint.ml`
    font-size : 16px;
`}

`

const Button = styled.button`
    display : block;
    min-width : 100px;
    min-height : 35px;
    border-radius : 10px;
    color : #ffffff;
    text-align:center;
    line-height : 48px;
    padding : 0px 10px;
    border : none;
    font-size : 20px;
    font-weight : 900;
    cursor : pointer;
    ${breakpoint.ml`
        font-size : 14px;
        padding : 0px 6px;
        min-width : 70px;
        min-height : 20px;
    `}
    &:hover {
        transform : scale(1.02)
    }
`
const ButtonRed = styled(Button)`
    background-color : #D06145;
        &:hover {
            background-color: #c25a40;
        }
`
const ButtonGreen = styled(Button)`
    background-color : #45D0B6;
    &:hover {
        background-color: #3fbfa7;
    }
`

const YesNoDialog = (props) => {
    const {type, message, size, visible, onClickYes, onClickNo} = props;
    let Icon = null;
    switch (type){
        case "danger" : Icon = <i class="fas fa-exclamation-triangle"></i>
    }
    return(
            visible ? (
                // <YesNoBG>
                <DialogContainer size={size}>
                    <Content>
                        {Icon}
                        <Message>{message}</Message>
                    </Content>
                    <Options>
                        <ButtonRed onClick={() => {onClickYes()}}>
                            Có
                        </ButtonRed>
                        <ButtonGreen onClick={() => {onClickNo()}}>
                            Không
                        </ButtonGreen>
                    </Options>
                </DialogContainer>
                // </YesNoBG>
            ) : null
    )
}

export default YesNoDialog;