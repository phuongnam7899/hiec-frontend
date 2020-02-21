import React from "react";
import styled from "styled-components";
const Icon = styled.i`
  color: #37a28d;
  margin-right: 16px;
  width: 20px;
  height: 20px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 16px 0;
`;
const Input = styled.input`
  &:focus {
    outline: none;
  }
  ${props => {
    switch (props.size) {
      case "normal":
        return `font-size : 24px;
                        font-weight : bold;`;
      default:
        return `font-size : 18px;
                        font-weight : 400;
        `;
    }
  }}
  border : none;
  border-bottom: 1px solid #808080;
  width: 200px;
  transition: 0.1s all;
`;
const Span = styled.span`
  ${props => {
    switch (props.size) {
      case "normal":
        return `font-size : 24px;
                            font-weight : bold`;
      default:
        return `font-size : 18px;
                            font-weight : 400`;
    }
  }}
`;

const InputFunc = props => {
  const { size, type, info, change, name } = props;
  const changeInfo = e => {
    change(e.target.value);
  };
  const isUpdate = props.update ? (
    <Input size={size} type={type} value={info} onChange={changeInfo} />
  ) : (
    <Span size={props.size}>{props.info}</Span>
  );
  return (
    <Info>
      {name ? <Icon className={name}></Icon> : null}

      <div>{isUpdate}</div>
    </Info>
  );
};

export default InputFunc;
