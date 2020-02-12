import React from "react";
import styled from "styled-components";
import ImageWithTitle from "../ImageWithTitle"
import {NavLink} from "react-router-dom"


const ForumContainer = styled.div`
  width: 50%;
  height: 100vh;
  display : flex;
  flex-direction : column;
  flex-wrap : wrap;
  margin-top : 64px
`;

const Title = styled(NavLink)`
  font-size: 48px;
  width: 40%;
  text-decoration : none;
  font-weight : bold;
  color : #000000;
  &:hover {
      color : #1ABC9C
  }
//   margin: 32px 0px 0px 0px;
`;

const Description = styled.div`
  font-size: 20px;
  width : 100%;
  margin : 16px 0px
`;
const OneNews = styled.div`
  width: 100%;
  height: 50%;
`;

const ButtonsContainer = styled.div`
    display : flex;
    justify-content : space-between;
    width : 65%
`
const Button = styled(NavLink)`
    display : block;
    text-decoration : none;
    min-width : 167px;
    min-height : 48px;
    border-radius : 10px;
    color : #FFFFFF;
    text-align:center;
    line-height : 48px;
    padding : 4px 10px;
    border : none;
    font-size : 24px;
    font-weight : 900;
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

const Forum = props => {
  return (
    <ForumContainer>
      <Title to="/forum">Diễn Đàn</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum
        dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet
      </Description>
      <OneNews>
        <ImageWithTitle
          type="normal"
          description="Bạn phải đăng nhập mới có thể xem bài , đăng bài, thảo luận"
          imgUrl="https://images.unsplash.com/photo-1581125206334-788f30d39d34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
          toHref = "/forum"
        />
      </OneNews>
      <ButtonsContainer>
                <ButtonRed to="/register">Đăng kí</ButtonRed>
                <ButtonGreen to="/login" >Đăng nhập</ButtonGreen>
        </ButtonsContainer>
    </ForumContainer>
  );
};

export default Forum