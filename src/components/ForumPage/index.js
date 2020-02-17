import React ,{useState,useEffect, useCallback} from 'react'
import HotRecentForm from "../HotRecentForm"
import axios from '../../axios';
import styled from 'styled-components';
import Container from '../Container';
import Post from "../ProfilePage/Posts/Post"
import InfiniteScroll from "react-infinite-scroll-component"
import SearchBar from "../NewsPage/SearchBar"
import ButtonWrite from '../ButtonWrite';

const Page = styled.div`
    padding-top : 88px;
    display : flex;
    justify-content : space-around;
`

const RightContent = styled.div`
    // width:30%;

`
const LeftContent = styled.div`
    // width:70%;
    // display : flex;
    // flex-direction : column;
`

const Posts = styled.div`

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

function ForumPage() {
    const [loadMore, setLoadMore] = useState(true);
    const [ hotPosts,setHotPosts ] = useState([]);
    const [ recentPosts,setRecentPosts ] = useState([]);
    const [postsForum,setPostsForum] = useState([]);
    const [filterCd,setFilterCd] = useState({})
    const [tags,setTags] = useState([]);
    const [keyword,setKeyword] = useState("");
    const [sortBy,setSortBy] = useState("claps")
    const [page, setPage] = useState(0);


    useEffect(()=>{
        getHotPosts()
        getRecentPosts()
        // getForumPosts()
    },[])



    useEffect(() => {
        more()
    },[filterCd])

    const more = () => {
        axios.post("/api/post/search", {
            tags : tags,
            keyword : keyword,
            sortBy : sortBy,
            page : page
        }).then(res => {
            console.log(res.data)
            setPostsForum([...postsForum,...res.data])
            setPage(page + 1);
            if(res.data.length===0){
                setLoadMore(false);
            }
        })
}

    const handleSearch = ({tags,keyword,sortOption}) => {
        setPage(0);
        setPostsForum([])
        setLoadMore(true)
        setKeyword(keyword);
        setTags(tags);
        setSortBy(sortOption) 
        setFilterCd({
            tags,keyword,sortOption
        })     
        
    }   
    // const getForumPosts = async() =>{
    //     try{
    //         const res = await axios.post("/api/post/hot",{
    //             number : 50,
    //         })
    //         setPostsForum([...postsForum,...res.data]);
    //     }catch(err){
    //        console.log(err)
    //     }   
    // }


    const getRecentPosts = async ()=>{
        // console.log("hello");
        try{
            const res = await axios.post("/api/post/recent",{
                number : 5,
            })
            setRecentPosts(res.data)
        }catch(err){
           console.log(err)
        }   
    }

    const getHotPosts = async ()=>{
        // console.log("hello");
        try{
            const res = await axios.post("/api/post/hot",{
                number : 5,
            })
            console.log(res.data)
            setHotPosts(res.data)
        }catch(err){
           console.log(err)
        }

        
    }
    // console.log(hotPosts);
    return (
        <Container>

        <Page>
            
            <LeftContent>
                <ButtonWrite/>
                <Posts>
                <InfiniteScroll
                dataLength={postsForum.length}
                next={more}
                hasMore={loadMore}
                loader={<Loader src = "https://i.pinimg.com/originals/3f/2c/97/3f2c979b214d06e9caab8ba8326864f3.gif"/>}
                endMessage={
                    <div style={{ textAlign: "center" }}>
                        <Done>__ Bạn đã xem hết bài __</Done>
                    </div>
                }
                >
                {postsForum.map(post => <Post post={post} linkTo="/forum" ></Post>)}
        </InfiniteScroll>
                </Posts>
            </LeftContent>
            <RightContent>
            <SearchBar onSearch = {handleSearch}/>
            <HotRecentForm url ="/forum/" title = "Tin tức nổi bật" icon = "fas fa-star" listPost = {hotPosts} />
            <HotRecentForm url ="/forum/" title = "Tin tức gần đây" icon = "fas fa-clock" listPost = {recentPosts} />
            </RightContent>
        </Page>
        </Container>
    )
}

export default ForumPage
