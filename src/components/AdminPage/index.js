import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import AdminWritePost from './AdminWritePost';
import Container from "../Container"
import GhimPost from "./GhimPost"
import DeletePost from "./DeletePost"

const Background = styled.div`
    width : 100%;
    height : 1000px;
`

const Button = styled.button`
     margin-bottom : 12px;
     border : none;
     padding : 10px;
     border-radius : 10px;
     background-color : #37A28D;
     color : #fff;
     cursor : pointer;
     font-weight : 600;
     font-size : 20px;
     transition : 0.1s all;
     text-align : center;
     &:hover {
      background-color : #1ABC9C
     }
     & i {
       margin-left : 4px;
     }
`

const TitleFunc = styled.div`
     font-weight : 600;
     font-size : 20px;
`

function AdminPage() {
    const user = useSelector(state => state.user);
    const [buttonVisible, setButtonVisible] = useState(true);
    const [writePostVisible, setWritePostVisible] = useState(false);
    const turnOffWritePost = () => {
        setWritePostVisible(false);
        setButtonVisible(true);
    }
    const turnOnWritePost = () => {
        setWritePostVisible(true);
        setButtonVisible(false);
    }
    useEffect(() => {
        if (!user.isAdmin) {
            return window.location.assign("/404-not-found");
        }
    }, [])


    const click = () => {
        if (!user._id) {
            window.location.assign("/");
        } else {
            turnOnWritePost();
        }
    }
    return (<>
        {user._id?
        <Container>
        <Background>
           <TitleFunc>Tạo Bài Viết Mới</TitleFunc>
            {buttonVisible ? <Button onClick={click}>Thêm bài viết <i class="fas fa-plus"></i></Button> : <></>}
            <AdminWritePost userId={user._id} visible={writePostVisible} onTurnOffWritePost={() => { turnOffWritePost() }} />
            <TitleFunc>Ghim Bài Viết (Lưu ý chỉ một bài)</TitleFunc>
            <GhimPost/>
            <TitleFunc>Xóa Bài Viết</TitleFunc>
            <DeletePost/>
        </Background>
        </Container>:null
        }
    </>
    )
}

export default AdminPage
