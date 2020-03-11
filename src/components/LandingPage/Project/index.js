import React , { useState, useEffect } from "react"
import styled from "styled-components"
import ImageWithTitle from "../ImageWithTitle";
import axios from "../../../axios";
import {NavLink} from "react-router-dom"
import {breakpoint} from "../../../styles/mixin"

const ProjectsContainer = styled.div`
    display : flex;
    flex-wrap : wrap;
    width :100%;
    min-height : 100vh;
    justify-content : space-between;
    align-items : center;
`
const Title = styled(NavLink)`
  font-size: 40px;
  width: 100%;
  text-decoration : none;
  font-weight : bold;
  margin-bottom : 16px;
  
  color : #000000;
  &:hover {
      color : #1ABC9C
  }
  margin: 32px 0px 0px 0px;
`;

const Description = styled.div`
  font-size: 20px;
  width : 75%;
  ${breakpoint.ml`
  font-size: 16px;
  width : 90%;
  `}
  margin-bottom : 16px;

`;
const OneNews = styled.div`
  width: 30%;
  height: 55vh;
  ${breakpoint.ml`
  width: 90%;

  `}
  margin-bottom : 32px;
`;
const Project = (props) => {
    const [hotNews, setHotNews] = useState([]);
    useEffect(() => {
      getNews();
    }, []);
    const getNews = async () => {
      const news = await axios.post("/api/news/hot", {
        number: 3,
        category: "project",
        limit : 30
      });
      setHotNews(news.data);
      // console.log(news.data);
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
    return(
        <ProjectsContainer>
            <Title to="/project">Dự Án</Title>
            <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Description>
            {hotNews.slice(0, 3).map((oneNew,index) => {
                const {text, imgs} = getTextAndImg(oneNew.content)
                const date = convertDate(oneNew.postTime)
                return (
                   <OneNews key={index}>
                     <ImageWithTitle
                       type="small"
                       date={date}
                       title={oneNew.title}
                       description = {text}
                       imgUrl={imgs[0] || ""}
                       toHref = {`/project/${oneNew._id}`}
                     />
                   </OneNews>
                 )
            })}

        </ProjectsContainer>
    )
}
export default Project;