import React from "react";
import styled from "styled-components";
import {breakpoint} from "../../../styles/mixin"
const Icon = styled.i`
  color: ${props  => props.theme.COLOR};
  margin-right: 16px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: flex-end;
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
                        font-weight : bold;
                        // ${breakpoint.ml`
                        //   font-size : 20px;
                        // `}
                        `;
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
  ${breakpoint.ml`
    font-size : 14px;
    width : 150px;
  `}
`;
const TxtBlock = styled.div`
  // width : 80%;
  // display: flex;
  // align-items: center;
  // line-height: 20px;
`
const Span = styled.span`
  ${props => {
    switch (props.size) {
      case "normal":
        return `font-size : 24px;
                            font-weight : bold;
                            ${breakpoint.ml`
                              font-size : 14px;
                            `}
                            `
                            ;
      default:
        return `font-size : 18px;
                            font-weight : 400;
                            ${breakpoint.ml`
                            font-size : 14px;
                          `}`;
    }
  }}
  ${breakpoint.ml`
  font-size : 14px;
  `}
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

      <TxtBlock>{isUpdate}</TxtBlock>
    </Info>
  );
};

export default InputFunc;
