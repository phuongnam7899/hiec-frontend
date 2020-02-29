import React from "react";
import styled from "styled-components";
import withNavAndFooter from "../HOC/withNavAndFooter";
import {NavLink} from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutUsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  height: 300vw;
  max-height : 300vw;
  background-image: url(https://i.imgur.com/377jp5o.jpg);
  background-size: 100% 100%;
  padding: 96px 64px;
`;
const OurStory = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content : center;
  align-items: flex-end;
  margin-bottom: 45vh;
  height: 100vh;
`;
const Logo = styled.h1`
  font-size: 8em;
  font-weight: 700;
  margin-bottom: 12vh;
  background: rgb(69, 231, 199);
  background: linear-gradient(
    20deg,
    rgba(69, 231, 199, 1) 0%,
    rgba(177, 249, 235, 1) 10%,
    rgba(52, 171, 147, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Title = styled.h2`
  display: inline-block;
  max-width: 30vw;
  border-bottom: 5px solid #34ab93;
  text-align: justify;
  margin-bottom: 5vh;
  font-size: 2em;
`;
const Content = styled.p`
  width: 40%;
  overflow-wrap: break-word;
  text-align: justify;
  font-size: 1.1em;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  padding: 72px 0px;
  margin-bottom: 40vh;
`;

const Activities = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60vh;
`;

const Activity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 21%;
  height: 50vh;
  background: #fae7e1;
  padding: 30px;
  & h3 {
    font-size: 1.5em;
    margin-bottom: 32px;
  }
`;

const Partners = styled(Activities)`
  padding: 0 64px;
  margin-bottom : 18vh;
`;
const Partner = styled(Activity)`
  width: 18%;
  height: 30vh;
  background-color: #c0ede6;
  border-radius: 50%;
`;
const Footer = styled.div`
  width: 100%;
  color : #ffffff;
  font-size : 1.4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    max-width : 120px;
    margin-bottom : 8vh;
    max-height : 120px;
  }
  & > p {
    margin-bottom : 8vh;
  }
  & ul {
    list-style-type : none;
    text-align : center;
  }
  & a {
    color : #ffffff;
    text-decoration : none;
    &:hover {
      color : #f2f065;
    }
  }
`;
const AboutUsPage = () => {
  return (
    <AboutUsPageContainer>
      <OurStory data-aos="fade-left">
        <Logo>HIEC</Logo>
        <Title>OUR STORY</Title>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          efficitur tristique porttitor. Praesent justo odio, facilisis at
          vulputate quis, scelerisque vitae lectus. Nam mi purus, ornare vitae
          efficitur ac, hendrerit at orci.
        </Content>
      </OurStory>
      <Intro>
        <Title data-aos="fade-up">GIỚI THIỆU CHUNG</Title>
        <Content data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          efficitur tristique porttitor. Praesent justo odio, facilisis at
          vulputate quis, scelerisque vitae lectus. Nam mi purus, ornare vitae
          efficitur ac, hendrerit at orci.
        </Content>
      </Intro>
      <Title data-aos="fade-up" style={{ alignSelf: "center" }}>
        HOẠT ĐỘNG
      </Title>
      <Activities>
        <Activity data-aos="flip-left" data-aos-duration="1000">
          <h3>01 KẾT NỐI</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            efficitur tristique porttitor Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris efficitur tristique porttitor
          </p>
        </Activity>
        <Activity data-aos="flip-left" data-aos-duration="1500">
          <h3>02 ĐÀO TẠO</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            efficitur tristique porttitor Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris efficitur tristique porttitor
          </p>
        </Activity>
        <Activity data-aos="flip-left" data-aos-duration="2000">
          <h3>03 HỖ TRỢ</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            efficitur tristique porttitor Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris efficitur tristique porttitor
          </p>
        </Activity>
        <Activity data-aos="flip-left" data-aos-duration="2500">
          <h3>04 ĐỊNH HƯỚNG</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            efficitur tristique porttitor Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris efficitur tristique porttitor
          </p>
        </Activity>
      </Activities>
      <Title
        data-aos="fade-up"
        style={{ alignSelf: "center", marginBottom: "35vh" }}
      >
        TẦM NHÌN - SỨ MỆNH
      </Title>
      <Content data-aos="fade-right" style={{ marginBottom: "45vh" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        efficitur tristique porttitor. Praesent justo odio, facilisis at
        vulputate quis, scelerisque vitae lectus. Nam mi purus, ornare vitae
        efficitur ac, hendrerit at orci.. Praesent justo odio, facilisis at
        vulputate quis, scelerisque vitae lectus.
      </Content>
      <Title
        data-aos="fade-up"
        style={{ alignSelf: "center", marginBottom: "15vh" }}
      >
        ĐỐI TÁC
      </Title>
      <Partners>
        <Partner data-aos="flip-left" data-aos-duration="1000"></Partner>
        <Partner data-aos="flip-left" data-aos-duration="1500"></Partner>
        <Partner data-aos="flip-left" data-aos-duration="2000"></Partner>
        <Partner data-aos="flip-left" data-aos-duration="2500"></Partner>
      </Partners>
      <Footer>
        <p>HIEC - HUST Inovation & Entrepreneur Club</p>
        <NavLink to="/">
          <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/87460570_497744691125483_1187986171662172160_n.png?_nc_cat=110&_nc_ohc=oY_irOj354gAX8KBPnc&_nc_ht=scontent.fhan2-4.fna&oh=895c58ec753afd651eb7b38c99cfd87a&oe=5F038AAD" />
        </NavLink>
        <h3>Liên hệ:</h3>
        <ul>
          <li>Hotline : (+84)91 4351 643</li>
          <li>Email : clb.hiec@gmail.com</li>
          <li>Page : <a href="https://www.facebook.com/hiec.vn/">https://www.facebook.com/hiec.vn/</a></li>
        </ul>
      </Footer>
    </AboutUsPageContainer>
  );
};

export default withNavAndFooter(AboutUsPage, false);
