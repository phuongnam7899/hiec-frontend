import React from "react";
import styled from "styled-components";
import IconWithNumber from "../../ProfilePage/Posts/Post/IconWithNumber";
import Tag from "../../ProfilePage/Posts/Post/Tags";
import { NavLink } from "react-router-dom";

const NewsContainer = styled(NavLink)`
  display: flex;
  text-decoration : none;
  color : #000000;
  flex-direction: column;
  background: #ffffff;
  margin: 0px 0px 12px 0px;
  box-shadow: 0px 4px 4px rgba(193, 193, 193, 0.25);
  padding: 30px 22px;
  &:hover {
    h1, .more {
      color : #1ABC9C;
    }
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 26px;
  max-width: 80%;
  margin-bottom: 16px;
  overflow-wrap : break-word;
`;
const DateString = styled.span`
line-height : 2em;
  font-size: 14px;
  font-weight: 500;
  color: #888787;
`;

const TagsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 28px;
`;
const Content = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  max-width: 100%;
`;
const ImageContainer = styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  margin-bottom: 26px;
`;
const Image = styled.img`
  width: 30%;
  height: auto;
  margin-right: 18px;
`;
const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Arrow = styled.i`
  width: 10px;
  height: 10px;
  &::before {
    width: 10px;
    height: 10px;
  }
`;


const News = props => {
  const convertDate = (dateNumber) => {
    const timeConverted = new Date(dateNumber);
    const dateString = timeConverted.toLocaleString().split(",")[1]
    // console.log(dateString)
    return dateString
  }
  const {
    viewer,
    clap,
    comments,
    tags,
    title,
    postTime,
    content,
    _id,
    category
  } = props.postInfo;

  const convertedDate = convertDate(Number(postTime))

  let parser = new DOMParser();
  let parsedDoccument = parser.parseFromString(content, "text/html");
  let contentText = parsedDoccument.getElementsByTagName("*");
  let contentImage = parsedDoccument.getElementsByTagName("img");
  // if (contentImage[0]) console.log(contentImage[0].src)
  
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
  demoContent = demoContent.slice(0, 150) + "...";

  return (
    <NewsContainer to={`/${category}/${_id}`}>
      <Head>
        <Title>{title}</Title>
        <DateString>{convertedDate}</DateString>
      </Head>
      <TagsContainer>
        {tags.map(tag => {
          return <Tag tag={tag} />;
        })}
      </TagsContainer>
      <Content>{demoContent}</Content>
      <ImageContainer>
        {
          [...contentImage].slice(0,3).map((img) => {
            return (<Image src={img.src} />)
          })
        }
        
        
      </ImageContainer>
      <Icons>
        <Icons>
          <IconWithNumber icon="fas fa-eye" number={viewer.length} />
          {/* <IconWithNumber icon="fas fa-sign-language" number={clap.length} />
          <IconWithNumber icon="fas fa-comment" number={comments.length} /> */}
        </Icons>
        <div className="more" style={{}}>
          <span>Xem thêm </span>
          <Arrow className="fas fa-arrow-right"></Arrow>
        </div>
      </Icons>
    </NewsContainer>
  );
};

export default News;
