import React from "react";
import styled from "styled-components";
import IconWithNumber from "../../ProfilePage/Posts/Post/IconWithNumber";
import Tag from "../../ProfilePage/Posts/Post/Tags";
import { NavLink } from "react-router-dom";
import convert2vw from "../../../utils/convert2vw";
import { breakpoint } from "../../../styles/mixin";

const NewsContainer = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: #000000;
  background: #ffffff;
  margin: 0px 0px 12px 0px;
  box-shadow: 0px 4px 4px rgba(193, 193, 193, 0.25);
  padding: 24px 16px;
  height : ${convert2vw(40, "vh",10)};
  justify-content : space-between;
  &:hover {
    h1,
    .more {
      color: #1abc9c;
      
    }
  }
  ${breakpoint.ml`
    flex-direction : column;
    height : 90vh;
  `}
`;

// const ImageContainer = styled.div`
//   display: flex;
//   max-width: 70%;
//   flex-wrap: wrap;
//   margin-bottom: 26px;
// `;
const Image = styled.img`
  width: 33%;
  height: 100% ;
  margin-right: ${convert2vw(0)};
  ${breakpoint.ml`
  width : 100%;
  height: calc(40% - (4.25px - 1vw)*50) ;
`}
`;

const Info = styled.div`
  display : flex;
  flex-direction : column;
  width : 65%;
  height : 100%;
  justify-content : space-between;
  ${breakpoint.ml`
  width : 100%;
`}
`

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  ${breakpoint.ml`
  font-size: 20px;
  flex-direction : column;
  margin-bottom : 8px;
  width : 100%;
    `}
`;

const Title = styled.h1`
  font-size: ${convert2vw(20,"px",0.4)};
  max-width: 80%;
  margin-bottom: 16px;
  overflow-wrap: break-word;
  ${breakpoint.ml`
  font-size: 16px;
  max-width: 100%;

    `}
`;
const DateString = styled.span`
  line-height: 2em;
  font-size: ${convert2vw(14,"px",0.4)};
  font-weight: 500;
  color: #888787;
  ${breakpoint.ml`
  font-size: 12px;

    `}
`;

const TagsContainer = styled.div`
  display: flex;
  width: 100%;
`;
const Content = styled.div`
  font-size:  ${convert2vw(15,"px",0.5)};
  margin-bottom: 20px;
  max-width: 100%;
  ${breakpoint.ml`
  font-size: 13px;
    `}
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & span{
    font-size : 13px;
    ${breakpoint.ml`
    font-size: 12px;
      `}
  }
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
  const convertDate = dateNumber => {
    const timeConverted = new Date(dateNumber);
    const dateString = timeConverted.toLocaleString().split(",")[1];
    // console.log(dateString)
    return dateString;
  };
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

  const convertedDate = convertDate(Number(postTime));

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
      {/* <ImageContainer> */}
        {[...contentImage].slice(0, 1).map(img => {
          return <Image src={img.src} />;
        })}
      {/* </ImageContainer> */}
      <Info>
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
      </Info>

    </NewsContainer>
  );
};

export default News;
