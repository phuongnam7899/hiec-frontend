import React from "react";
import styled from "styled-components";
import {breakpoint} from "../../../styles/mixin"
import convert2vw from "../../../utils/convert2vw"

const AvatarWithNameContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Avatar = styled.img`
  ${props => {
    switch (props.size) {
      case "small":
        return `
        object-fit: cover;
                width : 40px;
                height : 40px;
                `;
      case "medium":
        return `
        object-fit: cover;
                width : calc(${convert2vw(45)} + (13.6px - 1vw)*2);
                height : calc(${convert2vw(45)} + (13.6px - 1vw)*2);
                `;
      case "large":
        return `
        object-fit: cover;
                width : 80px;
                height : 80px;
                `;
      default:
        return `
        object-fit: cover;
      width : 40px;
      height : 40px;
      `;
    }
  }};
  border-radius: 50%;
  margin-right: 8px;
`;

const Name = styled.span`
  font-weight: bold;
  display: inline-block;
  overflow-wrap : break-word;
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
            font-size : calc(${convert2vw(18)} + (13.6px - 1vw)*1);
            line-height : calc(${convert2vw(50)} + (13.6px - 1vw)*1);
            height : calc(${convert2vw(50)} + (13.6px - 1vw)*1);
                `;
      case "large":
        return `
            font-size : 24px;
            line-height : 80px;
            height : 80px;
                `;
                default:
                  return `
                  font-size : 24px;
                  line-height : 80px;
                  height : 80px;
                `;
    }
  }};
`;

const AvatarWithName = props => {
  return (
    <AvatarWithNameContainer size={props.size}>
      <Avatar size={props.size} src={props.imgSrc} align="middle"></Avatar>
      <Name size={props.size}>{props.name}</Name>
    </AvatarWithNameContainer>
  );
};

export default AvatarWithName;
