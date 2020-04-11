import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "./signUp.css";
import { Link } from "react-router-dom";
import axios from "../../axios";
import { useDispatch } from "react-redux";
import { breakpoint } from '../../styles/mixin'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import convert2vw from "../../utils/convert2vw"
const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  max-width: 100vw;
  align-items:center;
  height : 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-image: url(https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.15752-9/90562646_1075816319441988_977627847554236416_n.png?_nc_cat=100&_nc_sid=b96e70&_nc_eui2=AeGKhol9vjQ0JdXo919JEjxgJv-Ros0l63xNJC4tNCzePOm1CtTDXrLEjBOeieYFOs37On4OmshHP0w0x_6nf3H0cnCIgtzYrE_cprmU_KceQw&_nc_ohc=e6PE5cLz_skAX-94E5d&_nc_ht=scontent.fsgn2-2.fna&oh=94f8d9960434a4d55f2e76dd52cd452b&oe=5E9DE67E);
  background-size: cover;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  margin-bottom: 110px;
  margin-top: ${convert2vw(40 )}; 
  ${breakpoint.tb`
  margin-bottom: 70px;
    `}
    ${breakpoint.ml`
    margin-bottom: 40px;
    `}
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px 0px;
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
  font-size: 20px;
  font-weight: 600;
  margin-top: 12px;
  margin-bottom: 18px;
  background-color: ${props => props.theme.COLOR};
  color: ${props => props.theme.textButton};
  transition : ${props => props.theme.time};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.HOVER_COLOR};
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
  color: #5E5E5E;
  &:hover {
    color: ${props => props.theme.COLOR};
  }
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid #B6B6B6;
  font-size: 20px;
  padding-bottom: 4px;
  width: 100%;
  margin-top: 4px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.backgroundColor};
  outline: none;
  &:focus {
    bor3fofa7ttom: 1px solid #41B2EB;
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
  color: #5E5E5E;
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
height:auto;
top:10px;
left:10px;
margin: 15px 0px 0px 6px; 
font-weight:bolder;
color:white;
font-size: 48px;
cursor : pointer;
width: 60px;
align-self:flex-start;
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
  height: 90vh;
  display: flex;
  flex-direction:column;
    position:relative;
    justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  ${breakpoint.tb`
        width : 60%;
    `}
  ${breakpoint.ml`
        width : 100%;
        height:100vh;
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
      name
    ) {
      // TODO : xử lí thông tin và gửi api
      const res = await axios.post("/api/auth/register", {
        name,
        email,
        password,
        isWorking
      });
      if (res.status === 200) {
        setTimeout(() => {
          dispatch(hideLoading())
        }, 1000)
        dispatch({ type: "SET_VISIBLE_AND_SUCCESS" })
        setTimeout(() => {
          dispatch({ type: "SET_NOT_VISIBLE" })
        }, 10000)
        props.history.push("/");
      } else {
        setTimeout(() => {
          dispatch(hideLoading())
        }, 1000)
        setEnoughInfo(false);
        dispatch({ type: "SET_VISIBLE_AND_NOT_SUCCESS" })
        setTimeout(() => {
          dispatch({ type: "SET_NOT_VISIBLE" })
        }, 10000)
      }
    } else {
      setTimeout(() => {
        dispatch(hideLoading())
      }, 1000)
      dispatch({ type: "SET_VISIBLE_AND_NOT_SUCCESS" })
      setTimeout(() => {
        dispatch({ type: "SET_NOT_VISIBLE" })
      }, 10000)
      setEnoughInfo(false);
      // console.log("THIẾU HOẶC SAI FORMAT")
    }
  };
  const goToHomepage = () => {
    window.location.assign("/")
  }
  const enough = enoughInfo ? (
    <></>
  ) : (
      <div style={{ color: "red" }}>Mời nhập đầy đủ thông tin</div>
    );
  return (
      <Background>
        <Background2>
          <LogoOnImg onClick={goToHomepage} src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/87460570_497744691125483_1187986171662172160_n.png?_nc_cat=110&_nc_ohc=oY_irOj354gAX8KBPnc&_nc_ht=scontent.fhan2-4.fna&oh=895c58ec753afd651eb7b38c99cfd87a&oe=5F038AAD" ></LogoOnImg>
          <Form onSubmit={submit}>
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
  );
}
export default HookSignIn;