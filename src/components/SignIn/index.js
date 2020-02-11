import React, { useState } from 'react'
import styled, { ThemeProvider } from "styled-components"
import {useSelector,useDispatch} from "react-redux"
import { Link, Redirect } from 'react-router-dom'
import axios from "../../axios"
import {addToken} from "../../actions/token"
import {saveUser} from "../../actions/user"
import user from '../../reducers/user'

const Background = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`
const Form = styled.form`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    
    width:75%;
`
const Email = styled.div`
display: flex;
flex-direction:column;
margin: 10px 0px;
font-size: 24px;
width:100%;
font-weight: 500;
color:${props => props.theme.text};
transition: ${props => props.theme.time};
`
const Password = styled(Email)``
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
    margin-top:12px;
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
    margin-bottom: 50px;
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
    left:10px;
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
    height:100vh;
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
const IMG = styled.img`
    width: 100%;
    height:100vh;
    size:cover;
    transition: ${props => props.theme.time};
`
function HookSignIn(props) {
    const [widthBackground1, setWidthBackground1] = useState(100 / 20 * 13);
    const [isDarkMode, setisDarkMode] = useState(false);
    // const [redirect,setRedirect] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [token, setToken] = useState("");
    const [info, setInfo] = useState({});
    const [isNote,setIsNote] = useState(false);
    const dispatch = useDispatch();

    // dispatch(addToken(token));
    // dispatch(saveUser(info));

    const theme = isDarkMode ? {
        time : "1s all",
        backgroundButton: "#FFD946",
        textButton: "black",
        text: "white",
        backgroundColor: "#494949",
        ImageURL:"https://scontent.fhan3-1.fna.fbcdn.net/v/t1.15752-9/84164546_132935084572581_2080401842293964800_n.png?_nc_cat=109&_nc_oc=AQnhx2E0Q8UGZK_FH8uyi-7d71-KOA1Yjj-kxLOCEcQ7pZOeNRsePy7YNMqvySRG3pk&_nc_ht=scontent.fhan3-1.fna&oh=b46fc187805aa382109de1993bde7857&oe=5EB6C7A7"
    } : {
            time : "2s all",
            textButton: "white",
            text: "black",
            backgroundColor: "white",
            backgroundButton: "#1ABC9C",
            ImageURL:"https://scontent.fhan3-3.fna.fbcdn.net/v/t1.15752-9/85055898_133191184536849_84730002418958336_n.png?_nc_cat=100&_nc_oc=AQnwnWSAzvLc8L7LR8mXIHInGK5jFTL3v_hvHd0yNvF4xjyZTP9nu4HbgOQgBFemcgk&_nc_ht=scontent.fhan3-3.fna&oh=3ee88d558f7ab401687844b396bf88a3&oe=5EB828F4"
        }
    const submit =  (e)=>{        
        e.preventDefault(); 
        if(email && password){
            try{
            axios.post("http://localhost:1234/api/auth/sign-in",{
                email:email,
                password:password,
            }).then((res) =>{
                console.log(res);
                console.log("ĐI qua r")
                const data = res.data;
                // console.log(data)
                console.log(res.status)
                if(res.status === 200){
                    const userToken = data.token;
                    const userInfo = data.userInfo;
                    // setToken(userToken);
                    // setInfo(userInfo);
                    dispatch(addToken(userToken));
                    dispatch(saveUser(userInfo));
                    // setRedirect(true);
                    props.history.push("/")
                    // console.log("THÀNH CÔNG")       
                }
                else{
                    // Wrong email or password
                    // hỏi lại tk loz nam
                    // console.log("SAI")
                }
            })

            }catch(err){console.log(err)}
        }
        else{
            // Missing email or password
            console.log("THIẾU FRONT");
            setIsNote(true);
        }
    }
    // useEffect(() => {
    //     dispatch(getData());
    //   }, []);
    const note = isNote?<div style={{color:"red"}}><span>Bạn nhập thiếu hoặc sai thông tin</span></div>:<></>;
    
    // console.log(useSelector(state=>state.token))
    // console.log(useSelector(state=>state.user))
    return (
        <ThemeProvider theme={theme}>
           
            <div style={{ width: "100%", height: "100%" }}>
                <Background>
                    <Background1 width={widthBackground1 + "%"}>
                        <IMG src= {theme.ImageURL} />
                        <TextOnImg style={{}}>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                        </TextOnImg>
                        <LogoOnImg>HIEC</LogoOnImg>
                        
                    </Background1>
                    <Background2 width={(100 - widthBackground1) + "%"}>
                    
                        <Form onSubmit = {submit}>
                            <Title>Đăng nhập</Title>
                            
                            <Email>
                            <span>Email</span>
                                <Input value = {email} onChange = {(e)=>setEmail(e.target.value)}></Input>
                            </Email>
                            <Password >
                                <span>Password</span>
                                <Input value = {password} onChange={(e)=>setPassword(e.target.value)}type="password" style = {{fontFamily:"pass"}}/>
                            </Password>
                            {note}
                            <Center>
                                <Button>Đăng Nhập</Button>
                                <SignUp>Chưa có tài khoản? <SignUpLink to="/sign-up">Đăng kí ngay</SignUpLink></SignUp>
                            </Center>
                        </Form>
                    </Background2>
                </Background>
            </div>
            {/* <button onClick = {()=>setisDarkMode(!isDarkMode)}>MODE</button> */}
        </ThemeProvider>
    )
}

export default HookSignIn
