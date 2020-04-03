import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import Select from "react-select";
import Dialog from "../../YesNoDialog";
import axios from "../../../axios"
import { useDispatch } from "react-redux";
import {breakpoint} from "../../../styles/mixin"

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
  background: #abd9c1;
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
  }
];
const categoryOptions = [{
  value: "news",
  label: "Tin Tức"
},
{
  value: "project",
  label: "Dự Án",
}
]
tagOptions.sort((currentTag, nextTag) => {
  const currentValue = currentTag.label.toLocaleUpperCase();
  const nextValue = nextTag.label.toLocaleUpperCase();
  // if (currentValue < nextValue) return -1;
  // else if (currentValue > nextValue) return 1;
  // else return 0;
  return currentValue.localeCompare(nextValue);
});
// console.log(tagOptions);
const AdminWritePost = props => {
    const { onTurnOffWritePost, visible } = props;
    const [postContent, setPostContent] = useState("<h1>Hello</h1>");
    const [tags, setTags] = useState([]);
    const [category, setCategory] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [dialogVisible, setDialogVisible] = useState(false);
    const dispatch = useDispatch();
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

    const changeCategory = (e) => {
        setCategory(e.value)
    }

    const onReset = () =>{
        setCategory("");
        setTags([]);
        setPostContent("<h1>Hello</h1>")
        setPostTitle("")

    }

    const createNewPost = async () => {
        const currentTime = new Date();
        const currentTimeMilis = currentTime.getTime();
        // console.log("click")
        try {
            if (category && tags.length !== 0 && postTitle && postContent) {
                const response = await axios.post("/api/news/", {
                    tags: tags,
                    postTime: currentTimeMilis,
                    title: postTitle,
                    content: postContent,
                    category,
                });
                
                // console.log(response)
                onTurnOffWritePost();
               
                // props.success(true)
                dispatch({ type: "SET_VISIBLE_AND_SUCCESS" })
                setTimeout(() => {
                    dispatch({ type: "SET_NOT_VISIBLE" })
                }, 10000);
                onReset();
            }else{
                onTurnOffWritePost();
                dispatch({ type: "SET_VISIBLE_AND_NOT_SUCCESS" })
                setTimeout(() => {
                    dispatch({ type: "SET_NOT_VISIBLE" })
                }, 10000)
            }
        }
        catch (err) {
            onTurnOffWritePost();
            dispatch({ type: "SET_VISIBLE_AND_NOT_SUCCESS" })
            setTimeout(() => {
                dispatch({ type: "SET_NOT_VISIBLE" })
            }, 10000)
            console.log(err)
        }

    }

    return visible ? (
        <WritePostContainer>
            <Dialog visible={dialogVisible} type="danger" message="Bạn có muốn hủy bài viết ?" onClickYes={() => { handleClickYes() }} onClickNo={() => { turnOffDialog() }} />
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
                    onChange={handlePostTitleChange}
                    maxLength="100"
                    placeholder="Tiêu đề bài viết (Tối đa 100 kí tự)"
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

                <Select
                    onChange={changeCategory}
                    options={categoryOptions}
                    value={category}
                    placeholder={category ? category : "Đăng lên ..."}
                />
                <StyledQuill
                    value={postContent}
                    onChange={handleContentChange}
                    modules={AdminWritePost.modules}
                    formats={AdminWritePost.formats}
                />
                <Button onClick={() => { createNewPost() }}>Đăng</Button>
            </Main>
        </WritePostContainer>
    ) : <></>;
};

AdminWritePost.modules = {
    toolbar: [
        [{ header: "1" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "blockquote", "code"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "video"]
    ]
};

AdminWritePost.formats = [
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

export default AdminWritePost;
