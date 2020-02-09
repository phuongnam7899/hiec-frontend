import React, {useState,useEffect} from "react";
import styled from "styled-components";
import ImageWithTitle from "../ImageWithTitle"


const Title = styled.h1`
    font-size : 48px;
    width : 100%;
    margin : 32px 0px 0px 0px;
`
const NewsContainer = styled.div`
    display : flex;
    height : 100vh;
    justify-content : space-between;
    align-items : center;
    flex-wrap : wrap;
`

const BigNews = styled.div`
    width : 55%;
    height : 80%;
`
const SubNews = styled.div`
    display : flex;
    width : 40%;
    height : 80%;
    flex-wrap : wrap;
    justify-content : space-between;
    align-items : space-between;
`
const OneNews = styled.div`
    width : 47%;
    height : 47%;
`



const News = () => {
    useEffect(() => {
        
    },[])
    return(
        <NewsContainer>
            <Title>Tin Tức</Title>
            <BigNews>
                <ImageWithTitle 
                                type="big"
                                date="1/1/2020" 
                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                                imgUrl="https://images.unsplash.com/photo-1581084121296-8b65c4f80452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
            </BigNews>
            <SubNews>
                <OneNews>
                    <ImageWithTitle type="normal"
                                    date="1/1/2020" 
                                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                                    imgUrl="https://images.unsplash.com/photo-1581084121296-8b65c4f80452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>

                </OneNews>
                <OneNews>
                    <ImageWithTitle type="normal"
                                    date="1/1/2020" 
                                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                                    imgUrl="https://images.unsplash.com/photo-1581084121296-8b65c4f80452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>

                </OneNews>
                <OneNews>
                    <ImageWithTitle type="normal"
                                    date="1/1/2020" 
                                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                                    imgUrl="https://images.unsplash.com/photo-1581084121296-8b65c4f80452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>

                </OneNews>
                <OneNews>
                    <ImageWithTitle date="1/1/2020" 
                                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                                    imgUrl="https://images.unsplash.com/photo-1581084121296-8b65c4f80452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>

                </OneNews>
            </SubNews>
        </NewsContainer>
    )
}

export default News