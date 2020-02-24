import React, {useState, useEffect} from "react"
import styled from "styled-components"
import Container from "../Container"
import SearchBar from "./SearchBar"
import axios from "../../axios"
import InfiniteScroll from "react-infinite-scroll-component"
import Post from "../ProfilePage/Posts/Post"
import HotRecentForm from "../HotRecentForm"
import News from "./News"
import withNavAndFooter from "../HOC/withNavAndFooter"

const NewsPageContainer = styled(Container)`
    display : flex;
    justify-content : space-between;
    margin-top : 60px;
`
const RightSide = styled.div`
    width : 35%;
`
const NewsList = styled.div`
    width : 60%;
    padding : 32px 0px;
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
    const href = window.location.href
    const splitedHef = href.split("/");
    const currentPath = splitedHef[splitedHef.length - 1];
    const category = currentPath;
    // console.log(category);
    const [listPosts, setListPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [loadMore, setLoadMore] = useState(true);
    const [tags,setTags] = useState([]);
    const [keyword,setKeyword] = useState("");
    const [sortBy,setSortBy] = useState("time")
    const [ hotPosts,setHotPosts ] = useState([]);
    const [ recentPosts,setRecentPosts ] = useState([]);
    const [postsForum,setPostsForum] = useState([]);
    const [filterCd,setFilterCd] = useState({})
    useEffect(()=>{
        window.scrollTo(0,0)
        getRecentPosts()
        getHotPosts()
    },[])
    useEffect(() => {
        more()
    },[filterCd])
    const handleSearch = ({tags,keyword,sortOption}) => {
            setPage(0);
            setListPosts([])
            setLoadMore(true)
            setKeyword(keyword);
            setTags(tags);
            setSortBy(sortOption) 
            setFilterCd({
                tags,keyword,sortOption
            })     
    }
    const getRecentPosts = async ()=>{
        try{
            const res = await axios.post("/api/news/recent",{
                number : 5,
                category : category,
            })
            // console.log(res)
            setRecentPosts(res.data)
        }catch(err){
           console.log(err)
        }   
    }

    const getHotPosts = async ()=>{
        try{
            const res = await axios.post("/api/news/hot",{
                number : 5,
                category : category,
                limit : 30
            })
            // console.log(res)
            setHotPosts(res.data)
        }catch(err){
           console.log(err)
        }    
    }
    const more = () => {
        // console.log(tags)
        // console.log(keyword)
        // console.log(sortBy)
        // console.log(page)

            axios.post("/api/news/search", {
                tags : tags,
                keyword : keyword,
                sortBy : sortBy,
                page : page,
                category : category
            }).then(res => {
                // console.log(res.data)
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
                {listPosts.map(post => <News postInfo = {post}/>)}
        </InfiniteScroll>
            </NewsList>
            <RightSide>
                <SearchBar onSearch = {handleSearch}/>
                <HotRecentForm url ="/news/" title = "Tin tức nổi bật" icon = "fas fa-star" listPost = {hotPosts} />
                <HotRecentForm url ="/news/" title = "Tin tức gần đây" icon = "fas fa-star" listPost = {recentPosts} />
            </RightSide>
        </NewsPageContainer>
    )
}

export default withNavAndFooter(NewsPage)