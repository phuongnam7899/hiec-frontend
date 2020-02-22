import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import AvatarWithName from "../AvatarWithName";
import axios from "../../../axios";

const LeaderboardContainer = styled.div`
  width: 40%;
  margin-top: 64px;
  height: 100vh;
`;
const WidthXPercent = styled.div`
  ${props => {
    return `width : ${props.x}%`;
  }}
`;

const Title = styled.div`
  font-size: 48px;
  width: 100%;
  font-weight: bold;
  color: #000000;
  margin-bottom: 24px;
`;

// const RowContainer = styled.div`
//   display : flex;
//   flex-direction : column;
//   justify-content : space-between;
// `

const OneRow = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  color : #000000;
  text-decoration : none;
  &:hover {
      color : #1ABC9C;
  }
`;

const Number = styled.div`
  width: 10%;
  font-size: 36px;
  font-weight: bold;
  ${props => {
    switch (props.number) {
      case 1:
        return `color : #FFD056`;
      case 2:
        return `color : #A1A1A1`;
      case 3:
        return `color : #FF8A65`;
      default:
        return `color : #000000`;
    }
  }}
`;
const Point = styled.div`
  width: 20%;
  font-size: 24px;
  text-align: end;
  font-weight: bold;
  & > i {
    color: #1abc9c;
    margin-left: 8px;
  }
`;

const Leaderboard = props => {
  const [rank, setRank] = useState({});

  useEffect(() => {
    getRank();
  }, []);

  const getRank = async () => {
    const userRank = await axios.get("/api/common/ranking");
    // console.log(userRank.data)
    setRank(userRank.data);
  };
  return (
    <LeaderboardContainer>
      <Title>Bảng Xếp Hạng</Title>
      {rank.month
        ? rank.month.map((user, index) => {
            return (
              <OneRow to={`/profile/${user.userId}`} key={index}>
                <Number number={index + 1}>{index + 1}</Number>
                <WidthXPercent x={60}>
                  <AvatarWithName
                    size="medium"
                    name={user.name}
                    imgSrc={user.avatar}
                  ></AvatarWithName>
                </WidthXPercent>
                <Point>
                  <span>{user.score}</span>
                  <i class="fas fa-sign-language"></i>
                </Point>
              </OneRow>
            );
          })
        : null}
    </LeaderboardContainer>
  );
};

export default Leaderboard;
