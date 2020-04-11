import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import {breakpoint} from "../../../styles/mixin"

const SelectStyled = styled(Select)`
  z-index : 22;
`
const SearchBarContainer = styled.div`
 padding : 32px;
 box-shadow: 0px 4px 4px rgba(193, 193, 193, 0.25);
 margin-top : 31px;
 background :#ffffff;
 margin-bottom : 12px;
 font-size : 16px;
 & input {
   font-size : 16px;
 }
 ${breakpoint.mm`
   font-size : 14px;
 
 `}
`;
const Input = styled.input`
    width : 100%;
    height : 38px;
    padding : 4px 18px;
    border-radius : 6px;
    border : 1px solid #c9c9c9;
    margin-bottom : 16px;
`;
const Button = styled.button`
  border: none;
  width : 100%;
  height : 30px;
  font-size : 16px;
  color : #ffffff;
  line-height : 30px;
  text-align : center;
  background : ${props  => props.theme.COLOR};
  border-radius : 15px;
  margin-top : 32px;
  &:hover {
    background : ${props => props.theme.HOVER_COLOR};
    transform : scale(1.05);
    cursor : pointer;
  }
`;
const Title = styled.div`
    font-size : 20px;
    font-weight : bold;
    margin-bottom : 32px;
    & i {
        color : ${props  => props.theme.COLOR};
        margin-left : 8px;
    }
`;
const TagContainer = styled.div`
  margin: 8px 0px 8px 0px;
  display: flex;
  max-width : 100%;
  flex-wrap : wrap;
`;
const Tag = styled.div`
  font-size: 12px;
  padding: 4px 8px;
  background-color: ${props  => props.theme.COLOR};
  color: #ffffff;
  border-radius: 16px;
  margin-right: 8px;
  margin-bottom : 8px;
  & span {
    padding-right: 16px;
    text-decoration: italics;
  }
  &:hover i {
    color: #f05663;
    cursor: pointer;
  }
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
  }
];
tagOptions.sort((currentTag, nextTag) => {
  const currentValue = currentTag.label.toLocaleUpperCase();
  const nextValue = nextTag.label.toLocaleUpperCase();
  if (currentValue < nextValue) return -1;
  else if (currentValue > nextValue) return 1;
  else return 0;
});
const sortOptions = [
  {
    value: "time",
    label: "Mới nhất"
  },
  {
    value: "claps",
    label: "Hot nhất"
  }
];
const SearchBar = props => {
  const {onSearch} = props;
  const [keyword, setKeyword] = useState("");
  const [tags, setTags] = useState([]);
  const [sortOption, setSortOption] = useState("claps");
  const addTag = tagName => {
    if (tags.length < 3 && !tags.includes(tagName.value))
      setTags([...tags, tagName.value]);
  };
  const deleteTag = index => {
    const oldTags = [...tags];
    oldTags.splice(index, 1);
    setTags(oldTags);
    // console.log("clicked")
  };
  const changeSortOption = option => {
      // console.log(option.value)
    setSortOption(option.value);
  }
  const search = () => {
    //   console.log({tags,keyword,sortOption})
      onSearch({tags,keyword,sortOption})
  }
  const handleInputChange = (e) => {
      setKeyword(e.target.value)
  }

  return (
    <SearchBarContainer>
      <Title>
        <span>Tìm kiếm</span>
        <i class="fas fa-search"></i>
      </Title>
      <Input placeholder="Từ khóa" onChange={handleInputChange} />
      <SelectStyled
        onChange={addTag}
        options={tagOptions}
        value=""
        placeholder="Thêm thẻ (Tối đa 3)"
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
      <SelectStyled
        onChange={changeSortOption}
        options={sortOptions}
        value= {sortOption}
        placeholder="Sắp xếp theo"
      />
      <Button onClick={() => {search()}}>Tìm kiếm</Button>
    </SearchBarContainer>
  );
};

export default SearchBar;
