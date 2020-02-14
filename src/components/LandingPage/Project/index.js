import React , { useState, useEffect } from "react"
import styled from "styled-components"
import ImageWithTitle from "../ImageWithTitle";
import axios from "../../../axios";
import {NavLink} from "react-router-dom"

const ProjectsContainer = styled.div`
    display : flex;
    flex-wrap : wrap;
    width :100%;
    height : 100vh;
    justify-content : space-between;
    align-items : center;
`
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

const Description = styled.div`
  font-size: 20px;
  width : 75%;
`;
const OneNews = styled.div`
  width: 30%;
  height: 60%;
`;
const Project = (props) => {
    const [hotNews, setHotNews] = useState([]);
    useEffect(() => {
      getNews();
    }, []);
    const getNews = async () => {
      const news = await axios.post("/api/news/hot", {
        number: 3,
        category: "project"
      });
      setHotNews(news.data);
      console.log(news.data);
    };
    return(
        <ProjectsContainer>
            <Title to="/project">Dự Án</Title>
            <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Description>
            {hotNews.slice(0, 3).map((oneNew,index) => {
                return (
                   <OneNews key={index}>
                     <ImageWithTitle
                       type="normal"
                       date={oneNew.postTime}
                       title={oneNew.title}
                       description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                       imgUrl="https://images.unsplash.com/photo-1581125206334-788f30d39d34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                       toHref = "/project/:id"
                     />
                   </OneNews>
                 )
            })}

        </ProjectsContainer>
    )
}
export default Project;