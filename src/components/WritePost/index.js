import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

import styled from "styled-components";
import Select from "react-select";
import Dialog from "../YesNoDialog";
import axios from "../../axios"
// import {notificationNotSuccess,notificationNotVisible,notificationSuccess} from "../../actions/notificationBox"
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { breakpoint } from "../../styles/mixin";

const WritePostContainer = styled.div`
    position : relative;
    & .css-2b097c-container{
      position : relative;
      z-index : 2;
    }
    width : 50vw;
    ${breakpoint.tb`
      width : 100%;
    `}
    box-shadow : 0px 0px 5px #cccccc;
    margin-bottom : 20px;
    z-index : 11;
`;
const StyledQuill = styled(ReactQuill)`
  width: 100%;
  border : 1px solid #ffffff;
  margin-top: 16px;
    position : relative;
  & .ql-toolbar {
    background : #ffffff;
    position : sticky;
    z-index : 1;
    top : 75px;
    display: flex;
    justify-content: space-around;
    ${breakpoint.ml`
    flex-wrap : wrap;
    justify-content: flex-start;
  `}
  }
  & .ql-editor {
    min-height: 55vh;
    font-size : 1.1rem;
    ${breakpoint.ml`
    font-size : 1rem;
  `}
  }
  & code {
    display: block;
  }
`;

const Bar = styled.div`
  display: flex;
  background: #81b1f0;
  justify-content: space-between;
  padding: 0px 18px;
  height: 40px;
  & div,
  & i {
    line-height: 40px;
    font-size: 20px;
    font-weight: 700;
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
  font-size: 16px;
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
  background-color: ${props  => props.theme.COLOR};
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
  background: ${props  => props.theme.COLOR};
  color: #ffffff;
  font-weight: bold;
  &:hover {
    background: #3fbaa2;
  }
  ${breakpoint.ml`
  font-size : 0.9rem;
`}
`;

const tagOptions = [
  {
    value: "Business",
    label: "Kinh doanh"
  },
  {
    value: "Technology",
    label: "Công nghệ"
  },
  {
    value: "Environment",
    label: "Môi trường"
  },
  {
    value: "AI",
    label: "Trí tuệ nhân tạo"
  },
  {
    value: "Q&A",
    label: "Hỏi đáp"
  },
  {
    value: "Bigdata",
    label: "Big Data"
  },
  {
    value: "Blockchain",
    label: "Blockchain"
  },
  {
    value: "Competition",
    label: "Cuộc thi"
  },
  {
    value: "Design",
    label: "Thiết kế"
  },
  {
    value: "Education",
    label: "Giáo dục"
  },
  {
    value: "Tips",
    label: "Mẹo"
  },
  {
    value: "Energy",
    label: "Năng lượng"
  },
  {
    value: "Entertainment",
    label: "Giải trí"
  },
  {
    value: "Finance",
    label: "Tài chính"
  },
  {
    value: "Fintech",
    label: "Fintech"
  },
  {
    value: "Food&Drink",
    label: "Ăn uống"
  },
  {
    value: "Games",
    label: "Games"
  },
  {
    value: "Healthcare",
    label: "Chăm sóc sức khỏe"
  },
  {
    value: "HIEC",
    label: "HIEC"
  },
  {
    value: "Investment",
    label: "Đầu tư"
  },
  {
    value: "IoT",
    label: "Internet of Things"
  },
  {
    value: "Marketing",
    label: "Marketing"
  },
  {
    value: "Media",
    label: "Media"
  },
  {
    value: "Realestate",
    label: "Bất động sản"
  },
  {
    value: "Retail",
    label: "Bán lẻ"
  },
  {
    value: "Sharing",
    label: "Tâm sự - chia sẻ"
  },
  {
    value: "Transportation",
    label: "Giao thông vận tải"
  },
  {
    value: "Startup",
    label: "Start-up"
  },
  {
    value: "Innovation",
    label: "Sáng tạo"
  },  
  {
    value: "Scholarship",
    label: "Học bổng"
  },  
  {
    value: "Event",
    label: "Sự kiện"
  },
  {
    value: "Course",
    label: "Khóa học"
  },
  {
    value: "Internship",
    label: "Thực tập"
  },
  {
    value: "Job",
    label: "Việc làm"
  },
  {
    value: "Volunteer",
    label: "Tình nguyện"
  },
  {
    value: "ExchangeProgram",
    label: "Chương trình trao đổi"
  }
];
tagOptions.sort((currentTag, nextTag) => {
  const currentValue = currentTag.label.toLocaleUpperCase();
  const nextValue = nextTag.label.toLocaleUpperCase();
  // if (currentValue < nextValue) return -1;
  // else if (currentValue > nextValue) return 1;
  // else return 0;
  return currentValue.localeCompare(nextValue);
});
// console.log(tagOptions);
const WritePost = props => {
  const [editorHeight, setEditorHeight] = useState(400)
  const { onTurnOffWritePost, visible } = props;
  const [postContent, setPostContent] = useState("");
  const [tags, setTags] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [dialogVisible, setDialogVisible] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {

    
  }, [tags, postContent]);
  const handleContentChange = newText => {
    setPostContent(newText);
    const height = document.getElementsByClassName("ql-editor")[0].clientHeight;
    document.getElementsByTagName("html")[0].scrollTop += (height - editorHeight);
    setEditorHeight(height);
    // document.scrollTop += (height - editorHeight) * 20;
    // console.log("a : " + document.getElementsByTagName("html")[0].scrollTop);

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
      // console.log("click")
      dispatch(showLoading('sectionBar'))
      try{
        if(tags.length > 0 && props.userId && postTitle && postContent){
          // console.log("POSS")
        const response = await axios.post("/api/post",{
          tags : tags,
          user: props.userId,
          postTime : currentTimeMilis,
          title : postTitle,
          content : postContent,
          token : localStorage.getItem("hiec_user_token")
        });
        // console.log(response)
        dispatch(hideLoading('sectionBar'))
            onTurnOffWritePost();
            // props.success(true)
            dispatch({type : "SET_VISIBLE_AND_SUCCESS"})
            setTimeout(()=>{
              dispatch({type : "SET_NOT_VISIBLE"})
            },10000)
        }else{
          throw new Error({message : "NHẬP THIẾU"})
        }
      }
      catch(err){
        dispatch(hideLoading('sectionBar'))
          onTurnOffWritePost();
          dispatch({type : "SET_VISIBLE_AND_NOT_SUCCESS"})
          setTimeout(()=>{
            dispatch({type : "SET_NOT_VISIBLE"})
          },10000)
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
          maxLength="90"
          placeholder="Tiêu đề bài viết (Tối đa 90 kí tự)"
          value = {postTitle}
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
        // theme = {window.innerWidth > 768 : "bubble"}
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
    ["bold"], ["italic"], ["underline"],["blockquote"], ["code"], [{ 'align': [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"], ["image"], ["video"]
  ]
};
WritePost.formats = [
  "align",
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "blockquote",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "code"
];

export default WritePost;
