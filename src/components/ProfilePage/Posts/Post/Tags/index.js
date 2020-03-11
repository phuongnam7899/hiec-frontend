import React from 'react'
import styled from "styled-components"
import {breakpoint} from "../../../../../styles/mixin"
const TagSpan = styled.span`
    background-color : #37A28D;
    color : white;
    font-size : 12px;
    font-weight : 600;
    margin-right: 8px;
    padding : 6px 12px;
    border-radius : 20px;
    ${breakpoint.ml`
    font-size: 10px;
    padding : 4px 8px;
      `}
`

function Tag(props) {
    return (
        <TagSpan>
            #{props.tag}
        </TagSpan>
    )
}

export default Tag
