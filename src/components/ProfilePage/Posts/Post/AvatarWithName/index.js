import React, { useEffect , useState } from 'react'
import styled from "styled-components"
import { breakpoint } from '../../../../../styles/mixin'

const Img = styled.img`
    border-radius : 999px;
    width : 40px;
    height : 40px;
    ${breakpoint.tb`
        width : 30px;
        height : 30px;
    `}
`
const RowCenter = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    margin-bottom: 20px;
    ${breakpoint.ml`
        flex-direction : column;
        align-items : flex-start;
        margin-bottom : 10px;
    `}
    
`
const Name = styled.span`
    margin-left : 12px;
    font-size : 20px;
    font-weight : 600;
    color : black;
    ${breakpoint.tb`
        font-size : 16px;
    `}
    ${breakpoint.ml`
        font-size : 12px;
    `}
`
const Time = styled.span`
    font-size : 14px;
    font-weight : 600;
    color : #888787;
    ${breakpoint.tb`
    font-size : 16px;
    ${breakpoint.ml`
    font-size : 12px;
    padding-top : 5px;
`}
`}
`
const IconTrash = styled.i`
    cursor : pointer;
    position : relative;
    z-index : 3;
    margin-left : 6px;
    ${breakpoint.ml`
        font-size : 12px;
    `}
    &:hover{
        color : #a24d37;
    }

`
function AvatarWithName(props) {
    const [day,setDay]= useState("");
    const [month,setMonth] = useState("")
    const [year,setYear] = useState("")
    useEffect(()=>{
        const date = new Date(props.postTime)
        // console.log(date);
        setDay(date.getDate())
        setMonth(date.getMonth() + 1);
        setYear(date.getFullYear())
    },[])

    const deletePost = (e) =>{
        
        props.isDelete();
    }

    return (
        <RowCenter>
            <div style = {{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <Img src = {props.avatar} />
            <Name>{props.name}</Name>
            {props.userID === localStorage.getItem("hiec_user_id") ?
                        <div onClick={deletePost}>
                            <IconTrash className="fas fa-trash"></IconTrash>
                        </div>
                        : <></>}
            </div>
            <Time>{day}/{month}/{year}</Time>
        </RowCenter>
    )
}

export default AvatarWithName
