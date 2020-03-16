import React, {useEffect} from "react";
import styled from "styled-components";
import withNavAndFooter from "../HOC/withNavAndFooter";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import convert2vw from "../../utils/convert2vw";
import { breakpoint } from "../../styles/mixin";
import "aos/dist/aos.css";
AOS.init();

const AboutUsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  height: 300vw;
  background-image: url(https://i.imgur.com/377jp5o.jpg);
  background-size: 100% 100%;
  padding: calc(${convert2vw(96)} + (6.56px - 1vh) * 50) ${convert2vw(64)};
  ${breakpoint.ml`
    background : #fcfcfc;
    align-items : center;
    height: 1000vw;
  `}
`;
const OurStory = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content : center;
  align-items: flex-end;
  margin-bottom: ${convert2vw(45, "vh", -10)};
  height: ${convert2vw(100, "vh")};
  ${breakpoint.ml`
  height : 100vh;
  align-items: center;
  margin-bottom: 15vh;
`}
`;
const Logo = styled.h1`
  font-size: ${convert2vw(128)};
  font-weight: 700;
  margin-bottom: ${convert2vw(12, "vh")};
  background: rgb(69, 231, 199);
  background: linear-gradient(
    20deg,
    rgba(69, 231, 199, 1) 0%,
    rgba(177, 249, 235, 1) 10%,
    rgba(52, 171, 147, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${breakpoint.ml`
  font-size: 5em;
  margin-bottom: 10vh;
`}
`;

const Title = styled.h2`
  display: inline-block;
  max-width: 30vw;
  border-bottom: 5px solid #34ab93;
  text-align: justify;
  margin-bottom: ${convert2vw(5, "vh")};
  font-size: ${convert2vw(2, "em")};
  ${breakpoint.ml`
  font-size: 1.6em;
  max-width: 100vw;
  margin-bottom: 10vh;
`}
`;

const VisionTitle = styled(Title)`
  align-self: "center";
  margin-bottom: ${convert2vw(35, "vh", -10)};
${breakpoint.ml`
    margin-bottom : 10vh;
`}
`
const Content = styled.p`
  width: 40%;
  overflow-wrap: break-word;
  text-align: justify;
  font-size: ${convert2vw(1.1, "em", 0.5)};
  ${breakpoint.ml`
  width: 90%;
  font-size: 1.1em;
`}
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: ${convert2vw(100, "vh")};
  padding: ${convert2vw(72)} 0px;
  margin-bottom: ${convert2vw(40, "vh")};
  ${breakpoint.ml`
  margin-bottom: 15vh;
  min-height: 50vh;
`}
`;

const Activities = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: ${convert2vw(60, "vh")};
  ${breakpoint.ml`
  justify-content: center;
  margin-bottom : 15vh;
`};
`;

const Activity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 21.5%;
  height: ${convert2vw(50, "vh")};
  background: #fae7e1;
  padding: ${convert2vw(30)};
  & h3 {
    font-size: ${convert2vw(1.5, "em")};
    margin-bottom: ${convert2vw(90)};
  }
  & p {
    font-size: ${convert2vw(1, "em")};
  }
  ${breakpoint.ml`
    width : 80%;
    height : 40vh;
    margin-bottom : 5vh;
    & p {
      font-size: 1em;
    }
    & h3 {
      font-size: 1.3em;
    }
  `}
`;

const Partners = styled(Activities)`
  padding: 0 ${convert2vw(64)};
  margin-bottom: ${convert2vw(18, "vh")};
  ${breakpoint.ml`
  justify-content : space-between;
  margin-bottom: 15vh;
  width : 100%;
  margin-top : 7vh;
`}
`;
const Partner = styled(Activity)`
  width: 18%;
  height: ${convert2vw(30, "vh")};
  background-color: #c0ede6;
  border-radius: 50%;
  ${breakpoint.ml`
  width: 35vw;
  height: calc(35vw + (3.75px - 1vw)*5);
`}
`;
const Footer = styled.div`
  width: 100%;
  color: #ffffff;
  font-size: ${convert2vw(1.4, "em")};
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    max-width: ${convert2vw(120)};
    margin-bottom: ${convert2vw(8, "vh")};
    max-height: ${convert2vw(120)};
    ${
      breakpoint.ml`
      min-width : 50px;
      min-height : 50px;
      `
    }
  }
  & > p {
    margin-bottom: ${convert2vw(8, "vh")};
    ${
      breakpoint.ml`
      font-size : 0.9em;
      `
    }
  }
  & ul {
    list-style-type: none;
    text-align: center;
  }
  & a {
    color: #222222;
    text-decoration: none;
    &:hover {
      color: #f2f065;
    }
  };
  ${
    breakpoint.ml`
    color : #222222;
    font-size : 0.9em;
    `
  }
`;
const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  })
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
      <VisionTitle
        data-aos="fade-up"
      >
        TẦM NHÌN - SỨ MỆNH
      </VisionTitle>
      <Content
        data-aos="fade-right"
        style={{
          marginBottom: `calc(${convert2vw(45, "vh")} - (6.56px - 1vh) * 20)`
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        efficitur tristique porttitor. Praesent justo odio, facilisis at
        vulputate quis, scelerisque vitae lectus. Nam mi purus, ornare vitae
        efficitur ac, hendrerit at orci.. Praesent justo odio, facilisis at
        vulputate quis, scelerisque vitae lectus.
      </Content>
      <Title
        data-aos="fade-up"
        style={{ alignSelf: "center", marginBottom: `${convert2vw(15, "vh")}` }}
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
          <li>
            Page :{" "}
            <a href="https://www.fb.com/hiec.vn/">
              https://www.fb.com/hiec.vn/
            </a>
          </li>
        </ul>
      </Footer>
    </AboutUsPageContainer>
  );
};

export default withNavAndFooter(AboutUsPage, false);
