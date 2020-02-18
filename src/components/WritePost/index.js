import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import Select from "react-select";
import Dialog from "../YesNoDialog";
import axios from "../../axios"


const WritePostContainer = styled.div`
    position : relative;
    // left : 50vw;
    // top : 10vh;
    // transform : translate(-50%, 0%);
    width : 50vw;
    box-shadow : 0px 0px 5px #8a8a8a;
    margin-bottom : 20px;
    z-index : 11;
    // & *{
    //   z-index : 11;
    // }
    // background-color : black;
`;
const StyledQuill = styled(ReactQuill)`
  width: 100%;
  margin-top: 16px;
  & .ql-toolbar {
    display: flex;
    justify-content: space-around;
  }
  & .ql-editor {
    min-height: 55vh;
  }
  & code {
    display: block;
  }
`;

const Bar = styled.div`
  display: flex;
  background: #abd9c1;
  justify-content: space-between;
  padding: 0px 18px;
  height: 40px;
  & div,
  & i {
    line-height: 40px;
    font-size: 20px;
    font-weight: 800;
  }
  & i:hover {
    color: #f05663;
    cursor: pointer;
  }
`;

const Main = styled.div`
  padding: 18px;
  background: #ffffff;
`;

const Input = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 6px 12px;
  margin-bottom: 8px;
  border-radius: 5px;
  border: 1px solid #8f8f8f;
`;

const TagContainer = styled.div`
  margin: 8px 0px 16px 0px;
  display: flex;
`;
const Tag = styled.div`
  font-size: 12px;
  padding: 4px 8px;
  background-color: #37a28d;
  color: #ffffff;
  border-radius: 16px;
  margin-right: 8px;
  & span {
    padding-right: 16px;
    text-decoration: italics;
  }
  &:hover i {
    color: #f05663;
    cursor: pointer;
  }
`;
const Button = styled.button`
  border: none;
  border-radius: 8px;
  width: 100%;
  heigth: 45px;
  line-height: 40px;
  text-align: center;
  margin-top: 8px;
  font-size: 24px;
  background: #37a28d;
  color: #ffffff;
  font-weight: bold;
  &:hover {
    background: #3fbaa2;
  }
`;

const tagOptions = [
  {
    value: "environment",
    label: "Environment"
  },
  {
    value: "technology",
    label: "Technology"
  },
  {
    value: "ai",
    label: "AI"
  },
  {
    value: "iot",
    label: "IoT"
  },
  {
    value: "energy",
    label: "Energy"
  },
  {
    value: "innovation",
    label: "Innovation"
  }
];
tagOptions.sort((currentTag, nextTag) => {
  const currentValue = currentTag.label.toLocaleUpperCase();
  const nextValue = nextTag.label.toLocaleUpperCase();
  if (currentValue < nextValue) return -1;
  else if (currentValue > nextValue) return 1;
  else return 0;
});
// console.log(tagOptions);
const WritePost = props => {
  const { onTurnOffWritePost, visible } = props;
  const [postContent, setPostContent] = useState("<h1>Hello</h1>");
  const [tags, setTags] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [dialogVisible, setDialogVisible] = useState(false);
  useEffect(() => {
    // console.log(tags);
  }, [tags, postContent]);
  const handleContentChange = newText => {
    setPostContent(newText);
  };
  const handlePostTitleChange = (e) => {
      const newTitle = e.target.value;
      setPostTitle(newTitle)
    // console.log(e)
  }
  const turnOnDialog = () => {
    setDialogVisible(true);
  };
  const turnOffDialog = () => {
    setDialogVisible(false);
  }
  const handleClickYes = () => {
      onTurnOffWritePost();
      turnOffDialog();
  }

  const addTag = tagName => {
    if (tags.length < 3 && !tags.includes(tagName.value)) setTags([...tags, tagName.value]);
  };
  const deleteTag = index => {
    const oldTags = [...tags];
    oldTags.splice(index, 1);
    setTags(oldTags);
    // console.log("clicked")
  };

  const createNewPost = async () => {
      const currentTime = new Date();
      const currentTimeMilis = currentTime.getTime();
      try{
      const response = await axios.post("/api/post",{
        tags : tags,
        user: props.userId,
        postTime : currentTimeMilis,
        title : postTitle,
        content : postContent,
      });
          onTurnOffWritePost();
          alert("Đăng bài thành công")
      }
      catch(err){
          onTurnOffWritePost();
          alert("Có lỗi xảy ra không mong muốn, mời bạn đăng nhập lại trước khi đăng")
          console.log(err)
      }
    
  }

  return visible ? (
      <WritePostContainer>
      <Dialog visible={dialogVisible} type="danger" message ="Bạn có muốn hủy bài viết ?" onClickYes={() => {handleClickYes()}} onClickNo={() => {turnOffDialog()}} />
      <Bar>
        <div>Tạo bài viết</div>
        <i
          class="fas fa-times"
          onClick={() => {
            turnOnDialog();
          }}
        ></i>
      </Bar>
      <Main>
        <Input
          onChange = {handlePostTitleChange}
          maxLength="100"
          placeholder="Tiêu đề bài viết (Tối đa 100 kí tự)"
        />
        <Select
          onChange={addTag}
          options={tagOptions}
          value=""
          placeholder="Thêm thẻ"
        />
        <TagContainer>
          {tags.map((tagName, index) => {
            return (
              <Tag
                key={index}
                onClick={() => {
                  deleteTag(index);
                }}
              >
                <span>#{tagName}</span>
                <i class="fas fa-times"></i>
              </Tag>
            );
          })}
        </TagContainer>
        <StyledQuill
          value={postContent}
          onChange={handleContentChange}
          modules={WritePost.modules}
          formats={WritePost.formats}
        />
        <Button onClick={() => {createNewPost()}}>Đăng</Button>
      </Main>
    </WritePostContainer>
  ) : <></>;
};

WritePost.modules = {
  toolbar: [
    [{ header: "1" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "blockquote", "code"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"]
  ]
};

WritePost.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "code"
];

export default WritePost;
