import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./signUp.css";
import { Link } from "react-router-dom";
import axios from "../../axios";
import { useDispatch } from "react-redux";
import {breakpoint} from '../../styles/mixin'
import { showLoading, hideLoading } from 'react-redux-loading-bar'


const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  max-width: 100vw;
  max-height : 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  margin-bottom: 20px;
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0px;
  font-size: 20px;
  width: 100%;
  font-weight: 500;
  color: ${props => props.theme.text};
  transition: ${props => props.theme.time};
  & span {
    font-size: 16px;
    color :#212121;
  }
  ${breakpoint.ml`
        font-size:18px
    `}
    ${breakpoint.ms`
        font-size:16px
    `}
`;
const Button = styled.button`
  border: none;
  border-radius: 6px;
  padding: 6px 18px;
  font-size: 24px;
  font-weight: 600;
  margin-top: 16px;
  margin-bottom: 10px;
  background-color: ${props => props.theme.backgroundButton};
  color: ${props => props.theme.textButton};
  cursor: pointer;
  &:hover {
    background-color: #3fbfa7;
  }
  ${breakpoint.ml`
        font-size:28px
    `}
    ${breakpoint.ms`
        font-size:26px
    `}
`;
const SignUpLink = styled(Link)`
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.1s;
  color: #5e5e5e;
  &:hover {
    color: #1abc9c;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #b6b6b6;
  font-size: 20px;
  padding-bottom: 4px;
  width: 100%;
  margin-top: 4px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.backgroundColor};
  outline: none;
  &:focus {
    border-bottom: 1px solid #3fbfa7;
    transition: all 0.1s;
  }
  transition: all 0.1s;
`;
const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const SignUp = styled.div`
  font-weight: bold;
  color: #5e5e5e;
  margin-top: 15px;
  font-size: 14px;
  transition: ${props => props.theme.time};
`;
const Title = styled.span`
  color: ${props => props.theme.text};
  margin-bottom: 40px;
  font-weight: bolder;
  font-size: 32px;
  transition: ${props => props.theme.time};
  ${breakpoint.ml`
        font-size:24px
    `}
    ${breakpoint.ms`
        font-size:22px
    `}
`;

const LogoOnImg = styled.img`
  position:absolute;
  top: 10px;
  right: 20px;
  font-weight: bolder;
  color: white;
  font-size: 48px;
  cursor : pointer;
  width:60px;
  height:auto;
  ${breakpoint.tb`
        width:40px
    `}
    ${breakpoint.ml`
        width:30px
    `}
`;


const Background2 = styled.div.attrs(props => ({
  width: props.width
}))`
  transition: ${props => props.theme.time};
  width:30%;
  width: ${props => props.width};
  height: 100vh;
  display: flex;
  position:relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  ${breakpoint.tb`
        width : 60%;
    `}
  ${breakpoint.ml`
        width : 100%;
    `}
    
`;

const IMG = styled.img`
  width: 100%;
  height: 100vh;
  size: cover;
  transition: ${props => props.theme.time};
`;

function HookSignIn(props) {
  const dispatch = useDispatch()
  const [widthBackground1, setWidthBackground1] = useState((100 / 20) * 13);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [isWorking, setIsWorking] = useState(false);
  const [enoughInfo, setEnoughInfo] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDarkMode, setisDarkMode] = useState(false);
  const submit = async e => {
    dispatch(showLoading())
    e.preventDefault();
    if (
      password === confirmPassword &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
      password.length >= 8 &&
      name &&
      dob
    ) {
      // TODO : xử lí thông tin và gửi api

      const res = await axios.post("/api/auth/register", {
        name,
        dob,
        email,
        password,
        isWorking
      });
      if (res.status === 200) {
        setTimeout(()=>{
          dispatch(hideLoading())
        },1000)
        dispatch({type : "SET_VISIBLE_AND_SUCCESS"})
        setTimeout(()=>{
          dispatch({type : "SET_NOT_VISIBLE"})
        },10000)
        props.history.push("/");
     

      } else {
        setTimeout(()=>{
          dispatch(hideLoading())
        },1000)
        setEnoughInfo(false);
        dispatch({type : "SET_VISIBLE_AND_NOT_SUCCESS"})
        setTimeout(()=>{
          dispatch({type : "SET_NOT_VISIBLE"})
        },10000)
      }
    } else {
      setTimeout(()=>{
        dispatch(hideLoading())
      },1000)
      dispatch({type : "SET_VISIBLE_AND_NOT_SUCCESS"})
      setTimeout(()=>{
        dispatch({type : "SET_NOT_VISIBLE"})
      },10000)
      setEnoughInfo(false);
      // console.log("THIẾU HOẶC SAI FORMAT")
    }
  };
  const theme = isDarkMode
    ? {
        time: "1s all",
        backgroundButton: "#FFD946",
        textButton: "black",
        text: "white",
        backgroundColor: "#494949",
        ImageURL:
          "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.15752-9/84164546_132935084572581_2080401842293964800_n.png?_nc_cat=109&_nc_oc=AQnhx2E0Q8UGZK_FH8uyi-7d71-KOA1Yjj-kxLOCEcQ7pZOeNRsePy7YNMqvySRG3pk&_nc_ht=scontent.fhan3-1.fna&oh=b46fc187805aa382109de1993bde7857&oe=5EB6C7A7"
      }
    : {
        time: "2s all",
        textButton: "white",
        text: "black",
        backgroundColor: "white",
        backgroundButton: "#1ABC9C",
        ImageURL:
          "https://scontent.fhan3-3.fna.fbcdn.net/v/t1.15752-9/85055898_133191184536849_84730002418958336_n.png?_nc_cat=100&_nc_oc=AQnwnWSAzvLc8L7LR8mXIHInGK5jFTL3v_hvHd0yNvF4xjyZTP9nu4HbgOQgBFemcgk&_nc_ht=scontent.fhan3-3.fna&oh=3ee88d558f7ab401687844b396bf88a3&oe=5EB828F4"
      };
  const goToHomepage = () =>{
    window.location.assign("/")
  }
  const enough = enoughInfo ? (
    <></>
  ) : (
    <div style={{ color: "red" }}>Mời nhập đầy đủ thông tin</div>
  );

  return (
    <ThemeProvider theme={theme}>
      {/* <div style={{ width: "100%", height: "100%" }}> */}
        <Background>
          <Background2 >
            <Form onSubmit={submit}>
            <LogoOnImg onClick = {goToHomepage}  src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/87460570_497744691125483_1187986171662172160_n.png?_nc_cat=110&_nc_ohc=oY_irOj354gAX8KBPnc&_nc_ht=scontent.fhan2-4.fna&oh=895c58ec753afd651eb7b38c99cfd87a&oe=5F038AAD" ></LogoOnImg>
              <Title>Đăng Ký</Title>
              <InputGroup>
                <span>Tên của bạn</span>
                <Input
                  value={name}
                  onChange={e => setName(e.target.value)}
                ></Input>
              </InputGroup>
              <InputGroup>
                <span>Email</span>
                <Input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                ></Input>
              </InputGroup>
              <InputGroup>
                <span>Ngày sinh</span>
                <Input
                  type="date"
                  value={dob}
                  onChange={e => setDob(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <span>Mật khẩu ( Tối thiểu 8 ký tự )</span>
                <Input
                  type="password"
                  style={{ fontFamily: "pass" }}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <span>Nhập lại mật khẩu</span>
                <Input
                  type="password"
                  style={{ fontFamily: "pass" }}
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </InputGroup>
              {enough}
              <Center>
                <Button>Đăng Ký</Button>
                <SignUp>
                  Đã có tài khoản?{" "}
                  <SignUpLink to="/sign-in">Đăng nhập</SignUpLink>
                </SignUp>
              </Center>
            </Form>
          </Background2>
         
            
            
           
         
        </Background>
      {/* </div> */}
      {/* <button onClick={() => setisDarkMode(!isDarkMode)}>MODE</button> */}
    </ThemeProvider>
  );
}

export default HookSignIn;
