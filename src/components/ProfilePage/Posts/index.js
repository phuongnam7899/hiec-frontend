import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Post from "./Post"
import axios from "../../../axios"
import InfiniteScroll from "react-infinite-scroll-component";
import { breakpoint } from '../../../styles/mixin';
const Posts = styled.div`
   width : 60%;
   ${breakpoint.ls`
    width :100%
   `}
`
const Done = styled.div`
    font-size : 14px;
    font-weight : bold;
    color : #8A8A8A
`
const Loader = styled.img`
    width : auto;
    height : 100px;
`

function MyPosts() {
    const [listPosts, setListPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [loadMore, setLoadMore] = useState(true);

    useEffect(() => {
        more();
    }, [])



    const more = () => {
        const regex = /profile/gi
        const idUser = window.location.pathname.replace(regex, "").split("/").join("");
        axios.post("/api/post/by-user/", {
            page: page,
            id: idUser,
            token : localStorage.getItem("hiec_user_token")
        }).then(res => {
            setPage(page + 1);
            setListPosts([...listPosts, ...res.data])
            if (res.data.length === 0) {
                setLoadMore(false);
            }
        })
    }
    return (
        <Posts id="list"  >
            <InfiniteScroll
                dataLength={listPosts.length}
                next={more}
                hasMore={loadMore}
                loader={<Loader src="https://media3.giphy.com/media/LLd6Ma5vQtXyw/giphy.gif?cid=ecf05e470ef39521fac6b49e298a7daaeb2e484749e314f4&rid=giphy.gif" />}
                endMessage={
                    <div style={{ textAlign: "center" }}>
                        <Done>__ Bạn đã xem hết bài __</Done>
                    </div>
                }
            >
                {listPosts.map(post => <Post post={post} linkTo="/forum" ></Post>)}
            </InfiniteScroll>
        </Posts>
    )
}

export default MyPosts;
