import React from 'react'
import styled from "styled-components"
const TagSpan = styled.span`
    background-color : #37A28D;
    color : white;
    font-size : 12px;
    font-weight : 600;
    margin-right: 8px;
    padding : 6px 12px;
    border-radius : 20px;
`

function Tag(props) {
    return (
        <TagSpan>
            #{props.tag}
        </TagSpan>
    )
}

export default Tag
