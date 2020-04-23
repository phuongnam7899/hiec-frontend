import React ,{useState,useEffect, useCallback} from 'react'
import HotRecentForm from "../HotRecentForm"
import axios from '../../axios';
import styled from 'styled-components';
import Container from '../Container';
import Post from "../ProfilePage/Posts/Post"
import InfiniteScroll from "react-infinite-scroll-component"
import SearchBar from "../NewsPage/SearchBar"
import ButtonWrite from '../ButtonWrite';
import { useSelector } from 'react-redux';
import withNavAndFooter from "../HOC/withNavAndFooter"
import { breakpoint } from '../../styles/mixin';

const Page = styled.div`
    padding-top : 88px;
    display : flex;
    justify-content: space-between;
    ${breakpoint.tb`
        flex-direction : column-reverse;
    `}
    
`

const RightContent = styled.div`
     width : 25%;
     ${breakpoint.tb`
        width : 100%
     `}

`
const LeftContent = styled.div`
    width : 70%;
    ${breakpoint.tb`
    width : 100%
    `}

`

const Posts = styled.div`
    width : 100%;
`
const Done = styled.div`
    font-size : 14px;
    font-weight : bold;
    color : #8A8A8A
`
const Loader = styled.img`
    width : 50px;
    height : 50px;
`

function ForumPage(props) {
    const [ hotPosts,setHotPosts ] = useState([]);
    const [ recentPosts,setRecentPosts ] = useState([]);
    const [loadMore, setLoadMore] = useState(true);
    const [postsForum,setPostsForum] = useState([]);
    const [filterCd,setFilterCd] = useState({})
    const [tags,setTags] = useState([]);
    const [keyword,setKeyword] = useState("");
    const [sortBy,setSortBy] = useState("time")
    const [page, setPage] = useState(0);

    const user = useSelector(state=>state.user)
    useEffect(()=>{
        document.title = "HIEC - Diễn đàn";
        window.scrollTo(0,0);        
        if(!localStorage.getItem("hiec_user_id")){
            // console.log(props.history);
            props.history.push("/sign-in");
        }        
        getHotPosts()
        getRecentPosts()
    },[])



    useEffect(() => {
        more()
    },[filterCd])

    const more = () => {
        axios.post("/api/post/search", {
            tags : tags,
            keyword : keyword,
            sortBy : sortBy,
            page : page,
            token : localStorage.getItem("hiec_user_token")
        }).then(res => {
            // console.log(res.data)
            setPostsForum([...postsForum,...res.data])
            setPage(page + 1);
            // console.log(page)
            // console.log(res.data)
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
    const getRecentPosts = async ()=>{
        // console.log("hello");
        try{
            const res = await axios.post("/api/post/recent",{
                number : 5,
                token : localStorage.getItem("hiec_user_token")
            })
            // console.log("RÊCENT")
            // console.log(res.data)
            setRecentPosts(res.data)
        }catch(err){
        //    console.log(err)
        }   
    }

    const getHotPosts = async ()=>{
        try{
            const res = await axios.post("/api/post/hot",{
                number : 5,
                token : localStorage.getItem("hiec_user_token")
            })
            // console.log(res.data)
            // console.log("HOT")
            // console.log(res.data)
            setHotPosts(res.data)
        }catch(err){
        //    console.log(err)
        }  
    }
    const postSuccess = (value) =>{
        if(value){
            window.open("/profile/"+user._id);
        }
    }

    return (
        <Container>

        <Page>
            <LeftContent>
                {window.innerWidth>1000?<ButtonWrite  postSuccess = {postSuccess} />:<></>}
                <p style={{
          margin: "8px 0px"
        }}>Do tình hình server không ổn định nên các bài viết load sẽ lâu hơn so với bình thường. Tuy nhiên các bạn vẫn có thể đăng bài dự thi như bình thường. HIEC rất xin lỗi vì sự bất tiện này và sẽ sớm khắc phục trong thời gian tới.</p>
                <Posts>
                <InfiniteScroll
                dataLength={postsForum.length}
                next={more}
                hasMore={loadMore}
                loader={<Loader src = "https://media3.giphy.com/media/LLd6Ma5vQtXyw/giphy.gif?cid=ecf05e470ef39521fac6b49e298a7daaeb2e484749e314f4&rid=giphy.gif"/>}
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
            {window.innerWidth<1000?<ButtonWrite postSuccess = {postSuccess} />:<></>}
            <SearchBar   onSearch = {handleSearch}/>
            {window.innerWidth>768?
            <>  
            <HotRecentForm url ="/forum/" title = "Bài viết nổi bật" icon = "fas fa-star" listPost = {hotPosts} />
            <HotRecentForm url ="/forum/" title = "Bài viết gần đây" icon = "fas fa-clock" listPost = {recentPosts} />
                </>:null
        }
            </RightContent>
        </Page>
        </Container>
    )
}

export default withNavAndFooter(ForumPage)
