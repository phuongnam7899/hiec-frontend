import React from "react";
import styled from "styled-components";
import Select from "react-select";
import { breakpoint } from "../../../styles/mixin";
const Icon = styled.i`
  color: ${props  => props.theme.COLOR};
  width: 20px;
  height: 20px;
  display: flex;
  align-items: flex-end;
`;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px 0;
`;
const Input = styled(Select)`
  &:focus {
    outline: none;
  }
  ${breakpoint.ml`
    font-size : 14px;
    width : 150px;
`}
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
  width: 200px;
  transition: 0.1s all;
`;
const Span = styled.span`
${breakpoint.ml`
font-size : 14px;
`}
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
  const { info, options, name, change } = props;
  const changeInfo = newValue => {
    change(newValue.value);
  };
  const isUpdate = props.update ? (
    <Input
      options={options}
      defaultValue={{ value: info, label: info }}
      onChange={changeInfo}
    />
  ) : (
    <Span>{props.info}</Span>
  );
  return (
    <Info>
      <Icon className={name}></Icon>

      <div style={{ marginLeft: "16px" }}>{isUpdate}</div>
    </Info>
  );
};

export default InputFunc;
