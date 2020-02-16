import React, {useState, useEffect} from "react"
import styled from "styled-components"
import Container from "../Container"
import SearchBar from "./SearchBar"
import axios from "../../axios"
import InfiniteScroll from "react-infinite-scroll-component"
import Post from "../ProfilePage/Posts/Post"

const NewsPageContainer = styled(Container)`
    display : flex;
`
const RightSide = styled.div`
    width : 35%;
`
const NewsList = styled.div`
    width : 50%;
    background :wheat;
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


const NewsPage = (props) => {

    const [listPosts, setListPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [loadMore, setLoadMore] = useState(true);
    const [tags,setTags] = useState([]);
    const [keyword,setKeyword] = useState([]);
    const [sortBy,setSortBy] = useState("clap")
    useEffect(() => {
        more()
    }, [])



    const more = () => {
            axios.post("/api/post/search", {
                tags,
                keyword,
                sortBy,
                page
            }).then(res => {
                setListPosts([...listPosts,...res.data])
                setPage(page + 1);
                if(res.data.length===0){
                    setLoadMore(false);
                }
            }) 
    }

    return(
        <NewsPageContainer>
            <NewsList>
            <InfiniteScroll
                dataLength={listPosts.length}
                next={more}
                hasMore={loadMore}
                loader={<Loader src = "https://i.pinimg.com/originals/3f/2c/97/3f2c979b214d06e9caab8ba8326864f3.gif"/>}
                endMessage={
                    <div style={{ textAlign: "center" }}>
                        <Done>__ Bạn đã xem hết bài __</Done>
                    </div>
                }
                >
                {listPosts.map(post => <Post post={post} linkTo="/forum" ></Post>)}
        </InfiniteScroll>
            </NewsList>
            <RightSide>
                <SearchBar/>
            </RightSide>
        </NewsPageContainer>
    )
}

export default NewsPage