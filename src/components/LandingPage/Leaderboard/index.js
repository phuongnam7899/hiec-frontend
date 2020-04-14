import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import AvatarWithName from "../AvatarWithName";
import axios from "../../../axios";
import convert2vw from "../../../utils/convert2vw"
import {breakpoint} from "../../../styles/mixin"

const LeaderboardContainer = styled.div`
  width: 45%;
  margin-top: 64px;
  min-height: 100%;
  ${
    breakpoint.tb`
  width: 100%;
  min-height: 10vh;
    
    `
  }
`;
const WidthXPercent = styled.div`
  ${props => {
    return `width : ${props.x}%`;
  }}
`;

const Title = styled.div`
  font-size: 36px;
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
      color : ${props  => props.theme.COLOR};
  }
`;

const Number = styled.div`
  width: 10%;
  font-size: calc(${convert2vw(36)} + (13.6px - 1vw)*1);
  font-weight: bold;
  ${props => {
    switch (props.number) {
      case 1:
        return `color : #ffd700`;
      case 2:
        return `color : #C0C0C0`;
      case 3:
        return `color : #b87333`;
      default:
        return `color : #000000`;
    }
  }}
`;
const Point = styled.div`
  width: 20%;
  font-size: 20px;
  text-align: end;
  font-weight: bold;
  & > i {
    color: ${props  => props.theme.COLOR};
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
      <Title>Xếp Hạng</Title>
      {rank.month
        ? rank.month.slice(0,5).map((user, index) => {
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
                  <i className ="fas fa-sign-language"></i>
                </Point>
              </OneRow>
            );
          })
        : null}
    </LeaderboardContainer>
  );
};

export default Leaderboard;
