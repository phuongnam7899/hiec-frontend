import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageWithTitle from "../ImageWithTitle";
import axios from "../../../axios";
import {NavLink} from "react-router-dom"

const Title = styled(NavLink)`
  font-size: 40px;
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
      category: "news",
      limit : 30
    });
    setHotNews(news.data);
    // console.log(news.data[0].postTime);
  };
  const getTextAndImg = (html) => {
    let parser = new DOMParser();
    let parsedDoccument = parser.parseFromString(html, "text/html");
    let contentText = parsedDoccument.getElementsByTagName("*");
    let contentImage = parsedDoccument.getElementsByTagName("img");
    // if (contentImage[0]) console.log(contentImage[0].src)
    const imgs = [...contentImage].map((img) => {
      return img.src
    })
    
    let demoContent = "";
    for (var i = 0; i < contentText.length; i++) {
      var current = contentText[i];
      if (
        current.children.length === 0 &&
        current.textContent.replace(/ |\n/g, "") !== ""
      ) {
        // Check the element has no children && that it is not empty
        demoContent = demoContent + " " + current.textContent;
      }
    }
    demoContent = demoContent.slice(0, 150);
    console.log({
      content : demoContent,
      imgs
    })
    return {
      content : demoContent,
      imgs
    }
  }
  const convertDate = (dateNumber) => {
    const timeConverted = new Date(Number(dateNumber));
    const dateString = timeConverted.toLocaleString().split(",")[1]
    // console.log(dateString)
    return dateString
  }
  return (
    <NewsContainer>
      <Title to="/news">Tin Tức</Title>
      <BigNews>
        <ImageWithTitle
          type="big"
          date={hotNews[0] ? convertDate(hotNews[0].postTime) : ""}
          title={hotNews[0] ? hotNews[0].title : ""}
          imgUrl={hotNews[0] ? getTextAndImg(hotNews[0].content).imgs[0] : ""}
          toHref = {hotNews[0] ? `/news/${hotNews[0]._id}` : "/news"}
        />
      </BigNews>
      <SubNews>
        {hotNews.slice(1, 5).map((oneNew,index) => {
          const {imgs} = getTextAndImg(oneNew.content)
          const date = convertDate(oneNew.postTime)
         return (
            <OneNews key={index}>
              <ImageWithTitle
                type="normal"
                date={date}
                title={oneNew.title}
                imgUrl={imgs[0] || ""}
                toHref = {`/news/${oneNew._id}`}
              />
            </OneNews>
          )
        })}
      </SubNews>
    </NewsContainer>
  );
};

export default News;
