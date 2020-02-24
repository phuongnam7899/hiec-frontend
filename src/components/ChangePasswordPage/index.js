import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import withNavAndFooter from "../HOC/withNavAndFooter";
import axios from "../../axios"

const ChangePassWordPageContainer = styled.form`
  max-width: 25vw;
  margin : 0 auto;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items : center;
  margin-top: 60px;
//   background : #ffffff;
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0px;
  font-size: 20px;
  width: 100%;
  font-weight: 500;
  color: ${props => props.theme.text};
  transition: ${props => props.theme.time};
  & span {
    font-size: 16px;
    color: #212121;
  }
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid #b6b6b6;
  font-size: 20px;
  padding-bottom: 4px;
  width: 100%;
  margin: 4px 0px;
  color: ${props => props.theme.text};
  background-color: #f6f6f6;
  outline: none;
  &:focus {
    border-bottom: 1px solid #3fbfa7;
    transition: all 0.1s;
  }
  transition: all 0.1s;
`;
const Title = styled.span`
  color: #000000;
  width : 100%;
  margin-bottom: 16px;
  font-weight: bolder;
  font-size: 36px;
`;
const ButtomContainer = styled.div`
  width : 100%;
`
const Button = styled.button`
    display : block;
    text-decoration : none;
    min-width : 120px;
    min-height : 30px;
    border-radius : 10px;
    color : #FFFFFF;
    text-align:center;
    line-height : 48px;
    padding : 0px 8px;
    border : none;
    font-size : 20px;
    font-weight : 900;
    &:hover {
        transform : scale(1.02)
    }
`
const ButtonGreen = styled(Button)`
    background-color : #45D0B6;
    &:hover {
        background-color: #3fbfa7;
    }
`
const Err = styled.div`
    width : 100%;
    color : #ff2424;
    font-size : 14px;
    padding-bottom : 16px;
`
const ChangePassWordPage = props => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const [errVisible, setErrVisible] = useState(false);
  const [errContent, setErrContent] = useState("");


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    // console.log(oldPassword, newPassword, cfPassword);
  }, [oldPassword, newPassword, cfPassword]);
  const handleSubmitForm = async (e) => {
    e.preventDefault()
    if (newPassword.length < 8) {
      setErrContent("Mật khẩu phải có ít nhất 8 kí tự")
      setErrVisible(true)
    } else if (newPassword !== cfPassword) {
      setErrContent("Mật khẩu nhập lại chưa đúng")
      setErrVisible(true)
    } else {
      try {
        const changePasswordResponse = await axios.put(`api/user/${localStorage.getItem("hiec_user_id")}/password`, {
          oldPassword,
          newPassword,
        });
        // console.log(changePasswordResponse)

        if (changePasswordResponse.data.success === 0) {
          setErrContent(changePasswordResponse.data.message)
          setErrVisible(true)
        } else {
          // console.log("ok")
          window.history.back()
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (

    <ChangePassWordPageContainer onSubmit={handleSubmitForm}>
      <Title>Đổi mật khẩu</Title>

      <InputGroup>
        <span>Mật khẩu cũ</span>
        <Input
          type="password"
          value={oldPassword}
          onChange={e => setOldPassword(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <span>Mật khẩu mới (Tối thiểu 8 kí tự)</span>
        <Input
          type="password"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <span>Nhập lại mật khẩu</span>
        <Input
          type="password"
          value={cfPassword}
          onChange={e => setCfPassword(e.target.value)}
        />
      </InputGroup>
      {errVisible ? <Err>{errContent}</Err> : null}
      <ButtomContainer>
        <ButtonGreen >Xác nhận</ButtonGreen>
      </ButtomContainer>
    </ChangePassWordPageContainer>

  );
};

export default withNavAndFooter(ChangePassWordPage);
