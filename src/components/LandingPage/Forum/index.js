import React from "react";
import styled from "styled-components";
import ImageWithTitle from "../ImageWithTitle";
import { NavLink } from "react-router-dom";
import { breakpoint } from "../../../styles/mixin";

const ForumContainer = styled.div`
  width: 50%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 64px;
  ${breakpoint.tb`
    width : 100%;
    min-height:10vh;
  `}
`;

const Title = styled(NavLink)`
  font-size: 40px;
  width: 80%;
  text-decoration: none;
  font-weight: bold;
  color: #000000;

  &:hover {
    color: #1abc9c;
  }
  //   margin: 32px 0px 0px 0px;
`;

const Description = styled.div`
  font-size: 20px;
  width: 100%;
  margin: 16px 0px;
  ${breakpoint.ml`
  font-size: 16px;
  width : 90%;
  `}
`;
const OneNews = styled.div`
  width: 100%;
  height: 50%;
`;

const ButtonsContainer = styled.div`
    display : flex;
    justify-content : space-between;
    width : 65%;
    ${breakpoint.ls`
    width : 90%;
`}
    ${breakpoint.tb`
    width : 60%;
`}
    ${breakpoint.ml`
        width : 70%;
    `}
    ${breakpoint.mm`
    width : 80%;

`}
    ${breakpoint.ms`
    width : 90%;
`}
`;
const Button = styled(NavLink)`
  display: block;
  text-decoration: none;
  min-width: 167px;
  min-height: 40px;
  border-radius: 10px;
  color: #ffffff;
  text-align: center;
  line-height: 48px;
  padding: 4px 10px;
  border: none;
  font-size: 24px;
  font-weight: 900;
  &:hover {
    transform: scale(1.02);
  }
  ${breakpoint.ml`
    min-width : 110px;
    min-height : 30px;
    line-height : 20px;
    font-size : 16px;
    padding : 8px 10px;
`}
`;
const ButtonRed = styled(Button)`
  background-color: #d06145;
  &:hover {
    background-color: #c25a40;
  }
`;
const ButtonGreen = styled(Button)`
  background-color: #45d0b6;
  &:hover {
    background-color: #3fbfa7;
  }
`;

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
          toHref="/forum"
        />
      </OneNews>
      {!localStorage.getItem("hiec_user_token") ? 
            <ButtonsContainer>
                <ButtonRed to="/sign-up">Đăng kí</ButtonRed>
                <ButtonGreen to="/sign-in" >Đăng nhập</ButtonGreen>
            </ButtonsContainer> : null }
    </ForumContainer>
  );
};

export default Forum;
