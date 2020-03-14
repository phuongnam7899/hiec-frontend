import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";

const SelectStyled = styled(Select)`
  z-index : 22;
`
const SearchBarContainer = styled.div`
 padding : 32px;
 box-shadow: 0px 4px 4px rgba(193, 193, 193, 0.25);
 margin-top : 31px;
 background :#eeeeee;
 margin-bottom : 12px;
`;
const Input = styled.input`
    width : 100%;
    height : 38px;
    padding : 4px 18px;
    border-radius : 6px;
    border : 1px solid #c9c9c9;
    margin-bottom : 16px;
    font-size : 16px;
`;
const Button = styled.button`
  border: none;
  width : 100%;
  height : 30px;
  font-size : 16px;
  color : #eeeeee;
  line-height : 30px;
  text-align : center;
  background : #1ABC9C;
  border-radius : 15px;
  margin-top : 32px;
  &:hover {
    background : #24d4b1;
    transform : scale(1.05);
    cursor : pointer;
  }
`;
const Title = styled.div`
    font-size : 24px;
    font-weight : bold;
    margin-bottom : 32px;
    & i {
        color : #1ABC9C;
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
  background-color: #37a28d;
  color: #eeeeee;
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
