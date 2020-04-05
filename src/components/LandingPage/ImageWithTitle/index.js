import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { breakpoint } from "../../../styles/mixin";

const ImageWithTitleContainer = styled(NavLink)`
  color: #000000;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &:hover > .title {
    color: #1abc9c;
  }
  &:hover > .img {
    background-size: 105% 105%;
  }
`;
const Img = styled.div`
    background-image : url(${props => props.imgSrc || null});
    background-size : 100% 100%;
    width: 100%;
    height : 75%;
    transition : background-size .3s;
    box-shadow: 4px 4px 4px rgba(193, 193, 193, 0.25);

}
`;
const Title = styled.h2`
  font-size: ${props => (props.type === "big" ? "22px" : "16px")};
  margin: 8px 0px;
  max-width: 100%;
  height: ${props => (props.type === "big" ? "25%" : "30%")};
  overflow-wrap: break-word;
  ${breakpoint.tb`
    font-size: ${props => (props.type === "big" ? "20px" : "12px")};
  `}
  ${breakpoint.ms`
font-size: ${props => (props.type === "big" ? "20px" : "12px")};
`}
`;
const Description = styled.div`
  font-size: 18px;
  margin: 8px 0px;
`;
const Date = styled.div`
  font-size: 14px;
  color: #707070;
`;

const ImageWithTitle = props => {
  return (
    <ImageWithTitleContainer to={props.toHref}>
      <Img imgSrc={props.imgUrl} className="img"></Img>
      {props.title ? (
        <Title type={props.type} className="title">
          {props.title}
        </Title>
      ) : null}
      {props.description ? (
        <Description>{props.description}</Description>
      ) : null}
      {props.date ? <Date type={props.type}>{props.date}</Date> : null}
    </ImageWithTitleContainer>
  );
};

export default ImageWithTitle;
