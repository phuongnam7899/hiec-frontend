import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import HotRecentForm from "../HotRecentForm";
import axios from "../../axios";
import Container from "../Container";
import Comment from "./Comment";
import InputComment from "./InputComment";
import withNavAndFooter from "../HOC/withNavAndFooter";
import { useSelector } from "react-redux";
import { breakpoint } from "../../styles/mixin";
const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 100px;
  padding-bottom: 20px;
  width: 100%;
  & * {
    overflow-wrap: break-word;
  }
`;
const Title = styled.span`
  font-weight: bolder;
  font-size: 26px;
  max-width: 80%;
  overflow-wrap: break-word;

  ${breakpoint.tb`
    font-size: 24px;
    max-width : 100%;
    `}
  ${breakpoint.ml`
    max-width : 100%;
    font-size: 15px;
    `}
`;
const Tag = styled.span`
  background-color: ${(props) =>
    props.isHightlight ? "#2f8427" : props.theme.COLOR};
  color: white;
  font-size: 12px;
  font-weight: 600;
  margin-right: 4px;
  padding: 6px 9px;
  border-radius: 20px;
  margin-top: 4px;
  ${breakpoint.ml`
        font-size: 10px;
        padding : 4px 6px;
    `}
`;
const Time = styled.span`
  text-align: center;
  ${breakpoint.ml`
        font-size: 12px;
        max-width : 100%;
    `}
`;

const Source = styled.div`
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  ${breakpoint.ml`
        font-size: 12px;
    `}
`;
const Post = styled.div`
  width: 60%;
  padding: 32px;
  background: #ffffff;
  margin-bottom: 12px;
  box-shadow: 0px 4px 4px rgba(160, 160, 160, 0.25);
  & > * {
    margin-bottom: 15px;
  }
  ${breakpoint.tb`
        width:100%;

    `}
`;

const loadingAminate = keyframes`
from {transition:none;}
to {background-color:#f6f7f8;transition: all 0.3s ease-out;}

`
const ElementLoading = styled.div`
    margin : 10px 0;
    height : ${props => props.height};
    width : ${props => props.width};
    animation: ${loadingAminate} 1s  infinite;
`
const PostLoading = styled(Post)`
    max-height : 60vh;
`

const RightSide = styled.div`
  width: 35%;
  ${breakpoint.tb`
        width:100%;

    `}
`;
const InfoPost = styled.div``;
const Reaction = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border-bottom: 1px solid #c8c8c8;
  border-top: 1px solid #c8c8c8;
`;

const ReactArea = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 10px 0px;
  cursor: pointer;
  :hover {
    background: #e8e8e8;
  }
  border-radius: 10px;
`;
const Icon = styled.i`
  color: ${(props) => (props.isClapped ? props.theme.COLOR : "black")};
  margin: auto;
  ${breakpoint.tb`

font-size: 18px;
`}
  ${breakpoint.ml`

font-size: 14px;
`}
`;

const ReactNumber = styled.span`
  color: black;
  margin-left: 8px;
  font-weight: 500;
`;
const Content = styled.div`
  width: 100%;
  height : auto;
  & img {
    width: 100%;
    margin: 8px 0px;
  }
  & video {
    width: 100%;
    margin: 8px 0px;
  }
  & .ql-align-center {
    text-align: center;
  }
  & * {
    line-height: 24px;
    font-size: 16px;
    ${breakpoint.tb`
        line-height: 21px;
        font-size: 14px;
        `}
    ${breakpoint.ml`
        line-height: 18px;
        font-size: 12px;
        `}
  }
  & h1 {
    font-size: 20px;
    ${breakpoint.tb`

        font-size: 18px;
        `}
    ${breakpoint.ml`
        
        font-size: 14px;
        `}
  }
`;
const FirstLine = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const CommentContainer = styled.div``;
const Button = styled.button`
  border: none;
  display: block;
  margin: 12px auto;
  margin-bottom: 0px;
  outline: none;
  cursor: pointer;
  padding: 8px 12px;
  background-color: rgba(1, 1, 1, 0);
  font-size: 16px;
  transition: 0.2s all;
  :hover {
    color: ${(props) => props.theme.COLOR};
  }
`;
const TagBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const hightlightTags = ["Covidea", "IdeaContest"];
function OnePost(props) {
  const user = useSelector((state) => state.user);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [recentPosts, setRecentPosts] = useState([]);
  const [relevantPosts, setRelevantPosts] = useState([]);
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [comments, setComments] = useState([]);
  const [viewers, setViewers] = useState([]);
  const [claps, setClaps] = useState([]);
  const [isClapped, setIsClapped] = useState(false);
  const [postID, setPostID] = useState("");
  const [number, setNumber] = useState(5);
  const [postUserId, setPostUserId] = useState("");
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    document.title = "HIEC - Diễn đàn";
    window.scrollTo(0, 0);
    if (!localStorage.getItem("hiec_user_id")) {
      window.location.assign("/sign-in");
    }
    getPost();

    getRecentPosts();
  }, []);

  const getPost = async () => {
    const regex = /forum/gi;
    const id = window.location.pathname.replace(regex, "").split("/").join("");

    try {
      const res = await axios.get(
        `/api/post/${id}?token=${localStorage.getItem("hiec_user_token")}`
      );
      setIsLoading(false);
      setViewers(res.data.viewers);
      setTitle(res.data.title);
      setTags(res.data.tags);
      setComments(res.data.comments.reverse());
      setClaps(res.data.claps);
      setPostID(res.data._id);
      for (let index = 0; index < res.data.claps.length; index++) {
        if (localStorage.getItem("hiec_user_id") == res.data.claps[index]) {
          setIsClapped(true);
        }
      }
      setUserName(res.data.user.profile.name);
      setPostUserId(res.data.user._id);
      let getContent = document.getElementById("content");
      getContent.innerHTML += res.data.content;
      const date = new Date(res.data.postTime);
      setDay(date.getDate());
      setMonth(date.getMonth() + 1);
      setYear(date.getFullYear());
      const addView = await axios.put("/api/post/add-view", {
        postID: res.data._id,
        userID: localStorage.getItem("hiec_user_id"),
        token: localStorage.getItem("hiec_user_token"),
      });

      //  lấy bài viết liên quan
      try {
        const resByTag = await axios.post("/api/post/search/by-tag", {
          tagList: res.data.tags,
          token: localStorage.getItem("hiec_user_token"),
        });
        // console.log(resByTag)
        setRelevantPosts(resByTag.data);
      } catch (err) {
        // console.log(err)
      }
    } catch (err) {
      // console.log("Hlel")
      window.location.assign("/404-not-found");
      // console.log(err);
    }
  };

  const getRecentPosts = async () => {
    try {
      const res = await axios.post("/api/post/recent", {
        number: 5,
        token: localStorage.getItem("hiec_user_token"),
      });
      setRecentPosts(res.data);
    } catch (err) {
      // console.log(err)
    }
  };

  const submitText = async (content) => {
    try {
      const time = Date.now();
      let comment = {
        user,
        content,
        time,
      };

      let newComments = comments;
      newComments.unshift(comment);
      setComments(newComments);
      setNumber(number + 1);

      const res = await axios.put("/api/post/add-comment", {
        postID,
        user: user._id,
        content,
        time,
        token: localStorage.getItem("hiec_user_token"),
      });
      setNumber(number + 1);
    } catch (err) {
      // console.log(err)
    }
  };

  const clapping = async () => {
    try {
      if(tags.includes("Covidea") || tags.includes("IdeaContest")){
        throw new Error({message : "this post no longer clap"})
      }else{
        if (isClapped) {
          setClaps(claps.filter((id) => id != user._id));
        } else {
          setClaps([...claps, user._id]);
        }
        // call API
        setIsClapped(!isClapped);
        const res = await axios.put("/api/post/add-clap", {
          userID: user._id,
          postID: postID,
          token: localStorage.getItem("hiec_user_token"),
        });
      }

      // console.log(res)
    } catch (err) {
      // console.log(err)
    }
  };

  const moreComment = () => {
    setNumber(number + 5);
  };
  const goToUserProfile = () => {
    window.location.assign(`/profile/${postUserId}`);
  };
  // console.log('render')
  return (
    <Container>
      <Form>
      {isLoading ?
                <PostLoading>
                    <ElementLoading width="70%" height="30px"></ElementLoading>
                    <ElementLoading width="50%" height="24px"></ElementLoading>
                    <ElementLoading width="100%" height="24px"></ElementLoading>
                    <ElementLoading width="100%" height="24px"></ElementLoading>
                    <ElementLoading width="100%" height="24px"></ElementLoading>
                </PostLoading>
                :
        <Post>
          <FirstLine>
            <Title>{title}</Title>
            <Time>
              {day}/{month}/{year}
            </Time>
          </FirstLine>
          <TagBlock>
            {tags.map((tag) => (
              <Tag isHightlight={hightlightTags.includes(tag)}>{tag}</Tag>
            ))}
          </TagBlock>
          <Source onClick={goToUserProfile}>
            Theo{" "}
            <b>
              <i>{userName}</i>
            </b>
          </Source>
          <Content id="content" className = "ql-editor"></Content>
          <Reaction>
            <ReactArea onClick={clapping}>
              <Icon isClapped={isClapped} className="fas fa-sign-language">
                <ReactNumber>{claps.length}</ReactNumber>
              </Icon>
            </ReactArea>

            <ReactArea>
              <Icon className="fas fa-comment">
                <ReactNumber>{comments.length}</ReactNumber>
              </Icon>
            </ReactArea>

            <ReactArea>
              <Icon className="fas fa-eye">
                <ReactNumber>{viewers.length}</ReactNumber>
              </Icon>
            </ReactArea>
          </Reaction>
          <CommentContainer>
            <InputComment submitText={submitText}></InputComment>
            {comments.slice(0, number).map((comment) => (
              <Comment comment={comment} />
            ))}
            {comments.length > number ? (
              <div>
                <Button onClick={moreComment}>Xem thêm</Button>
              </div>
            ) : (
              <></>
            )}
          </CommentContainer>
        </Post>
        }
        <RightSide>
          <HotRecentForm
            url="/forum/"
            title="Bài viết gần đây"
            icon="fas fa-clock"
            listPost={recentPosts.slice(0, 5)}
          />
          <HotRecentForm
            url="/forum/"
            title="Bài viết liên quan"
            icon="fas fa-star"
            listPost={relevantPosts.slice(0, 5)}
          />
        </RightSide>
      </Form>
    </Container>
  );
}

export default withNavAndFooter(OnePost);
