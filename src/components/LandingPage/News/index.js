import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageWithTitle from "../ImageWithTitle";
import axios from "../../../axios";
import {NavLink} from "react-router-dom"

const Title = styled(NavLink)`
  font-size: 48px;
  width: 100%;
  text-decoration : none;
  font-weight : bold;
  color : #000000;
  &:hover {
      color : #1ABC9C
  }
  margin: 32px 0px 0px 0px;
`;
const NewsContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const BigNews = styled.div`
  width: 55%;
  height: 80%;
`;
const SubNews = styled.div`
  display: flex;
  width: 40%;
  height: 80%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;
`;
const OneNews = styled.div`
  width: 47%;
  height: 47%;
`;

const News = () => {
  const [hotNews, setHotNews] = useState([]);
  useEffect(() => {
    getNews();
  }, []);
  const getNews = async () => {
    const news = await axios.post("/api/news/hot", {
      number: 5,
      category: "news"
    });
    setHotNews(news.data);
    // console.log(news.data[0].postTime);
  };
  return (
    <NewsContainer>
      <Title to="/news">Tin Tức</Title>
      <BigNews>
        <ImageWithTitle
          type="big"
          date={hotNews[0] ? hotNews[0].postTime : ""}
          title={hotNews[0] ? hotNews[0].title : ""}
          imgUrl={hotNews[0] ? "https://images.unsplash.com/photo-1581084121296-8b65c4f80452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" : ""}
        />
      </BigNews>
      <SubNews>
        {hotNews.slice(1, 5).map(oneNew => {
         return (
            <OneNews>
              <ImageWithTitle
                type="normal"
                date={oneNew.postTime}
                title={oneNew.title}
                imgUrl="https://images.unsplash.com/photo-1581084121296-8b65c4f80452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                toHref = "/news/:id"
              />
            </OneNews>
          )
        })}
      </SubNews>
    </NewsContainer>
  );
};

export default News;
