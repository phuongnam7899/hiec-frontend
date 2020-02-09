import React, { useState } from 'react'
import styled, { ThemeProvider } from "styled-components"
import "./signUp.css"
import { Link } from 'react-router-dom'


const Background = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`
const Form = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    width:75%;
    margin-bottom: 20px
`
const Email = styled.div`
display: flex;
flex-direction:column;
margin: 7px 0px;
font-size: 20px;
width:100%;
font-weight: 500;
color:${props => props.theme.text};
transition: ${props => props.theme.time};
`
const Password = styled(Email)``
const Name = styled(Email)``
const Year = styled(Email)``
const Button = styled.button`
    border:none;
    border-radius: 6px;
    padding: 12px 12px;
    font-size: 28px;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom:10px;
    background-color:${props => props.theme.backgroundButton};
    color:${props => props.theme.textButton};
    cursor:pointer;
    transition: ${props => props.theme.time};
`
const SignUpLink = styled(Link)`
    text-decoration:underline;
    cursor:pointer;
    transition : 0.3s all;
    color:${props => props.theme.text};
    &:hover{
        color:#1ABC9C;
    }
    transition: ${props => props.theme.time};
`

const Input = styled.input`
    border:none;
    border-bottom:0.5px solid #B6B6B6;
    font-size: 20px;
    padding-bottom:5px;
    width: 100%;
    margin-top:7px;
    color:${props => props.theme.text};
    background-color:${props => props.theme.backgroundColor};
    outline: none;
    &:focus{
        border-bottom:0.7px solid black;
        transition:0.2s all;
    }
    transition: ${props => props.theme.time};
`
const Center = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
`
const SignUp = styled.div`
    font-weight: bold;
    color:${props => props.theme.text};
    transition: ${props => props.theme.time};
`
const Title = styled.span`
    color:${props => props.theme.text};
    margin-bottom: 40px;
    font-weight:bolder;
    font-size:48px;
    transition: ${props => props.theme.time};
`
const TextOnImg = styled.div`
position: absolute;
left:50%;
top:50%; 
transform: translate(-50%, -50%);
width:60%;
font-weight:bold;
font-size:56px;
text-align:center;
transition: ${props => props.theme.time};
color:${props => props.theme.textButton};
`
const LogoOnImg = styled.span`
    position: absolute;
    top:10px;
    right:20px;
    font-weight:bolder;
    color:white;
    font-size: 48px;
`

const Background1 = styled.div.attrs(props => ({
    width: props.width
}))`

    width : ${props => props.width};
    position:relative;
    transition: ${props => props.theme.time};
    height:100%;
    
    `
const Background2 = styled.div.attrs(props => ({
    width: props.width
}))`
transition: ${props => props.theme.time};
    
    width : ${props => props.width};
    height:100vh;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:${props => props.theme.backgroundColor};
    
    `
const Box = styled.input`
    display:none;
`
const IMG = styled.img`
    width: 100%;
    height:100vh;
    size:cover;
    transition: ${props => props.theme.time};
`
const ChooseJob = styled(Email)``
const Job = styled(Email)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

function HookSignIn() {
    const [widthBackground1, setWidthBackground1] = useState(100 / 20 * 13);
    const [isDarkMode, setisDarkMode] = useState(false);
    const theme = isDarkMode ? {
        time: "1s all",
        backgroundButton: "#FFD946",
        textButton: "black",
        text: "white",
        backgroundColor: "#494949",
        ImageURL: "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.15752-9/84164546_132935084572581_2080401842293964800_n.png?_nc_cat=109&_nc_oc=AQnhx2E0Q8UGZK_FH8uyi-7d71-KOA1Yjj-kxLOCEcQ7pZOeNRsePy7YNMqvySRG3pk&_nc_ht=scontent.fhan3-1.fna&oh=b46fc187805aa382109de1993bde7857&oe=5EB6C7A7"
    } : {
            time: "2s all",
            textButton: "white",
            text: "black",
            backgroundColor: "white",
            backgroundButton: "#1ABC9C",
            ImageURL: "https://scontent.fhan3-3.fna.fbcdn.net/v/t1.15752-9/85055898_133191184536849_84730002418958336_n.png?_nc_cat=100&_nc_oc=AQnwnWSAzvLc8L7LR8mXIHInGK5jFTL3v_hvHd0yNvF4xjyZTP9nu4HbgOQgBFemcgk&_nc_ht=scontent.fhan3-3.fna&oh=3ee88d558f7ab401687844b396bf88a3&oe=5EB828F4"
        }
    return (
        <ThemeProvider theme={theme}>
            <div style={{ width: "100%", height: "100%" }}>
                <Background>
                    <Background2 width={(100 - widthBackground1) + "%"}>
                        <Form>
                            <Title>Đăng Ký</Title>
                            <Name>
                                <span>Tên của bạn</span>
                                <Input></Input>
                            </Name>
                            <Email>
                                <span>Email</span>
                                <Input></Input>
                            </Email>
                            <Year>
                                <span>Năm sinh</span>
                                <Input></Input>
                            </Year>
                            <ChooseJob>
                                <span style={{ marginBottom: "7px" }}>Bạn đang?</span>
                                <Job>

                                    <div >
                                        <Box type="radio" className="cbx" id="box1" name="is-working" />
                                        <label for="box1" class="check">
                                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                                                <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                                                <polyline points="1 9 7 14 15 4"></polyline>
                                            </svg>
                                        </label>
                                        <span style={{ marginLeft: "8px" }}>Đi làm</span>
                                    </div>
                                    <div>
                                        <Box type="radio" className="cbx" id="box2" name="is-working" />
                                        <label for="box2" class="check">
                                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                                                <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                                                <polyline points="1 9 7 14 15 4"></polyline>
                                            </svg>
                                        </label>
                                        <span style={{ marginLeft: "8px" }}>Đi học</span>

                                    </div>
                                    <div>
                                        <Box type="radio" className="cbx" id="box3" name="is-working" />
                                        <label for="box3" class="check" style={{ Left: " 10px" }}>
                                            <svg width="18px" height="18px" viewBox="0 0 18 18">
                                                <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                                                <polyline points="1 9 7 14 15 4"></polyline>
                                            </svg>

                                        </label>

                                        <span style={{ marginLeft: "7px" }}>Khác</span>
                                    </div>
                                </Job>
                            </ChooseJob>
                            <Password >
                                <span>Mật khẩu ( Tối thiểu 8 ký tự )</span>
                                <Input type="password" style={{ fontFamily: "pass" }} />
                            </Password>
                            <Password >
                                <span>Nhập lại mật khẩu</span>
                                <Input type="password" style={{ fontFamily: "pass" }} />
                            </Password>
                            <Center>
                                <Button>Đăng Ký</Button>
                                <SignUp>Đã có tài khoản? <SignUpLink to="/sign-in">Đăng nhập</SignUpLink></SignUp>
                            </Center>
                        </Form>
                    </Background2>
                    <Background1 width={widthBackground1 + "%"}>
                        <IMG src={theme.ImageURL} />
                        <TextOnImg style={{}}>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                        </TextOnImg>
                        <LogoOnImg>HIEC</LogoOnImg>

                    </Background1>

                </Background>
            </div>
            <button onClick={() => setisDarkMode(!isDarkMode)}>MODE</button>
        </ThemeProvider>
    )
}

export default HookSignIn
