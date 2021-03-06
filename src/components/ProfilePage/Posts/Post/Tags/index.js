import React from 'react'
import styled from "styled-components"
import {breakpoint} from "../../../../../styles/mixin"
import convert2vw from "../../../../../utils/convert2vw"
const TagSpan = styled.span`
    background-color : ${props  => props.isHightlight ? "#2f8427":props.theme.COLOR};
    color : white ;
    font-size : ${convert2vw(12,"px",0.5)};
    font-weight : 600;
    margin-right: 8px;
    padding : 6px 12px;
    border-radius : 20px;
    margin-bottom : 3px;
    ${breakpoint.ml`
    font-size: 10px;
    padding : 4px 8px;
      `}
`

const hightlightTags = ["Covidea", "IdeaContest"];

function Tag(props) {
    return (
        <TagSpan isHightlight={hightlightTags.includes(props.tag)}>
            #{props.tag}
        </TagSpan>
    )
}

export default Tag
