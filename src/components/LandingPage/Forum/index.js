import React from "react";
import styled from "styled-components";
import ImageWithTitle from "../ImageWithTitle";
import { NavLink } from "react-router-dom";
import { breakpoint } from "../../../styles/mixin";

const ForumContainer = styled.div`
  width: 45%;
  min-height: 100%;
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
    color: ${props  => props.theme.COLOR};
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
    background-color: #41b2eb;
  }
`;

const Forum = props => {
  return (
    <ForumContainer>
      <Title to="/forum">Diễn Đàn</Title>
      <Description>
      Chia sẻ, hỏi đáp, trao đổi về chủ đề Kinh doanh - Khởi nghiệp.
      </Description>
      <OneNews>
        <ImageWithTitle
          type="normal"
          fontStyle="i"
          description="Bạn phải đăng nhập mới có thể xem bài, đăng bài và thảo luận."
          imgUrl="https://i.imgur.com/3rznM28.png"
          toHref="/forum"
        />
      </OneNews>
      {/* {!localStorage.getItem("hiec_user_token") ? 
            <ButtonsContainer>
                <ButtonRed to="/sign-up">Đăng kí</ButtonRed>
                <ButtonGreen to="/sign-in" >Đăng nhập</ButtonGreen>
            </ButtonsContainer> : null } */}
    </ForumContainer>
  );
};

export default Forum;
