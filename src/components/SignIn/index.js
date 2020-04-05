import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { Link, Redirect } from 'react-router-dom'
import axios from "../../axios"
import { addToken } from "../../actions/token"
import { saveUser } from "../../actions/user"
import user from '../../reducers/user'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { breakpoint } from '../../styles/mixin'



const Background = styled.div`
    width:100vw;
    height : 100vh;
    background-image : url(https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
    background-size : cover;
    display: flex;
    justify-content: center;
    align-items : center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    width:75%;
    margin-bottom: 120px;
`
const Email = styled.div`
display: flex;
flex-direction:column;
margin: 10px 0px;
font-size: 16px;
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
    font-size: 20px;
    font-weight: 600;
    margin-top: 30px;
    margin-bottom:10px;
    background-color:${props => props.theme.backgroundButton};
    color:${props => props.theme.textButton};
    cursor:pointer;
    transition: ${props => props.theme.time};
    ${breakpoint.ml`
        font-size:22px
    `}
    ${breakpoint.ms`
        font-size:20px
    `}
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
    ${breakpoint.ml`
        font-size:16px
    `}
    ${breakpoint.ms`
        font-size:14px
    `}
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
    margin-top:15px;
    font-size:14px;
    color:${props => props.theme.text};
    transition: ${props => props.theme.time};
`
const Title = styled.span`
    color:${props => props.theme.text};
    margin-bottom: 50px;
    font-weight:bolder;
    font-size:32px;
    transition: ${props => props.theme.time};
    ${breakpoint.ml`
        font-size:28px
    `}
    ${breakpoint.ms`
        font-size:24px
    `}
`
// const TextOnImg = styled.div`
// position: absolute;
// left:50%;
// top:50%; 
// transform: translate(-50%, -50%);
// width:60%;
// font-weight:bold;
// font-size:56px;
// text-align:center;
// transition: ${props => props.theme.time};
// color:${props => props.theme.textButton};
// `
const LogoOnImg = styled.img`
// position: absolute;
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
    ${breakpoint.ml`
    
    width : 40px;
`}
 
`

const Background2 = styled.div.attrs(props => ({
    width: props.width,
    urlImage: props.urlImage
}))`
transition: ${props => props.theme.time};
    width:30%;
    // width : ${props => props.width};
    height:90vh;
    display: flex;
    flex-direction:column;
    position:relative;
    justify-content: space-between;
    align-items:center;
    background-color: rgba(255,255,255);
    ${breakpoint.tb`
        width : 60%;
    `}
  ${breakpoint.ml`
        width : 100%;
    `}
    
    
    `

function HookSignIn(props) {

    const [widthBackground1, setWidthBackground1] = useState(100 / 20 * 13);
    const [isDarkMode, setisDarkMode] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [info, setInfo] = useState({});
    const [isNote, setIsNote] = useState(false);
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    useEffect(() => {
        if (user._id) {
            window.history.back()
        }
    }, [])


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
    const submit = async (e) => {

        e.preventDefault();
        dispatch(showLoading())
        if (email && password) {
            try {
                const response = await axios.post("/api/auth/sign-in", {
                    email: email,
                    password: password,
                });
                const data = response.data;
                if (response.status === 200) {
                    setTimeout(() => {
                        dispatch(hideLoading())
                    }, 1000)
                    const userToken = data.token;
                    const userInfo = data.userInfo;
                    localStorage.setItem("hiec_user_id", data.userInfo._id)
                    localStorage.setItem("hiec_user_token", data.token);
                    dispatch(addToken(userToken));
                    dispatch(saveUser(userInfo));
                    dispatch({ type: "SET_VISIBLE_AND_SUCCESS" })
                    setTimeout(() => {
                        dispatch({ type: "SET_NOT_VISIBLE" })
                    }, 10000)
                    window.history.back()
                }
            }
            catch (err) {
                console.log("hello")
                setTimeout(() => {
                    dispatch(hideLoading())
                }, 1000)
                dispatch({ type: "SET_VISIBLE_AND_NOT_SUCCESS" })
                setTimeout(() => {
                    dispatch({ type: "SET_NOT_VISIBLE" })
                }, 10000)
                setIsNote(true)
            }
        }
        else {
            setTimeout(() => {
                dispatch(hideLoading())
            }, 1000)
            // Missing email or password
            dispatch({ type: "SET_VISIBLE_AND_NOT_SUCCESS" })
            setTimeout(() => {
                dispatch({ type: "SET_NOT_VISIBLE" })
            }, 10000)
            console.log("THIẾU FRONT");
            setIsNote(true);
        }
    }
    const goToHomepage = () => {
        window.location.assign("/")
    }
    // useEffect(() => {
    //     dispatch(getData());
    //   }, []);
    const note = isNote ? <div style={{ color: "red" }}><span>Bạn nhập thiếu hoặc sai thông tin</span></div> : <></>;

    // console.log(useSelector(state=>state.token))
    // console.log(useSelector(state=>state.user))
    return (
        <ThemeProvider theme={theme}>

            <div style={{ width: "100%", height: "100%" }}>
                <Background>
                
                    <Background2>
                    
                    <LogoOnImg onClick={goToHomepage} src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/87460570_497744691125483_1187986171662172160_n.png?_nc_cat=110&_nc_ohc=oY_irOj354gAX8KBPnc&_nc_ht=scontent.fhan2-4.fna&oh=895c58ec753afd651eb7b38c99cfd87a&oe=5F038AAD" />
                        <Form onSubmit={submit}>
                        
                            <Title>Đăng nhập</Title>
                            
                            <Email>
                                <span>Email</span>
                                <Input value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                            </Email>
                            <Password >
                                <span>Password</span>
                                <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" style={{ fontFamily: "pass" }} />
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
