import React from "react";
import styled from "styled-components";

const AvatarWithNameContainer = styled.div`
    display : flex;
    align-items : center;
    width : 100%;
`;

const Avatar = styled.img`
  ${props => {
    switch (props.size) {
      case "small":
        return `
                width : 40px;
                height : 40px;
                `;
      case "medium":
        return `
                width : 50px;
                height : 50px;
                `;
      case "large":
        return `
                width : 80px;
                height : 80px;
                `;
    }
  }};
  border-radius : 50%;
  margin-right : 8px;
`;

const Name = styled.span`
  font-weight : bold;
  display : inline-block;
  ${props => {
    switch (props.size) {
      case "small":
        return `
                font-size : 20px;
                line-height : 40px;
                height : 40px;
                `;
      case "medium":
        return `
            font-size : 20px;
            line-height : 50px;
            height : 50px;
                `;
      case "large":
        return `
            font-size : 24px;
            line-height : 80px;
            height : 80px;
                `;
    }
  }};
`

const AvatarWithName = props => {
  return (
    <AvatarWithNameContainer size={props.size}>
      <Avatar size={props.size} src={props.imgSrc}></Avatar>
      <Name size={props.size}>{props.name}</Name>
    </AvatarWithNameContainer>
  );
};

export default AvatarWithName;
