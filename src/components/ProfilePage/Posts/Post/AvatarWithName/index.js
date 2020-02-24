import React, { useEffect , useState } from 'react'
import styled from "styled-components"

const Img = styled.img`
    border-radius : 999px;
    width : 40px;
    height : 40px;
`
const RowCenter = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    margin-bottom: 20px;
    
`
const Name = styled.span`
    margin-left : 12px;
    font-size : 20px;
    font-weight : 600;
    color : black;
`
const Time = styled.span`
    font-size : 14px;
    font-weight : 600;
    color : #888787;
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
    return (
        <RowCenter>
            <div style = {{display:"flex",alignItems:"center"}}>
            <Img src = {props.avatar} />
            <Name>{props.name}</Name>
            </div>
            <Time>{day}/{month}/{year}</Time>
        </RowCenter>
    )
}

export default AvatarWithName
