import React, { useEffect } from "react";
import styled from "styled-components";
import withNavAndFooter from "../HOC/withNavAndFooter";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import convert2vw from "../../utils/convert2vw";
import { breakpoint } from "../../styles/mixin";
import AboutUsBG from "../../static/images/about-us-bbg.png"

import "aos/dist/aos.css";
AOS.init();

const AboutUsPageContainer = styled.div`
  display: flex;
  font-family: "Montserrat", sans-serif;
  flex-direction: column;
  max-width: 100vw;
  height: 300vw;
  background-image: url(${AboutUsBG});
  background-size: 100% 100%;
  padding: calc(${convert2vw(96)} + (6.56px - 1vh) * 50) ${convert2vw(64)};
  padding-top : 60px;
  ${breakpoint.ml`
  background : #fcfcfc;
  align-items : center;
  height: 835vw;
`}
${breakpoint.mm`
background : #fcfcfc;
align-items : center;
height: 950vw;
`}
  ${breakpoint.ms`
    background : #fcfcfc;
    align-items : center;
    height: 1130vw;
  `}
`;
const OurStory = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content : center;
  align-items: flex-end;
  margin-bottom: ${convert2vw(40, "vh", -10)};
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
    #0853b6 100%
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
  border-bottom: 5px solid #0853b6;
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
  align-self: center;
  margin-bottom: ${convert2vw(25, "vh", -10)};
  ${breakpoint.ml`
    margin-bottom : 10vh;
`}
`;
const Content = styled.p`
  width: 37%;
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
  margin-bottom: 30vh;
  min-height: 50vh;
`}
`;
const IntroContent = styled(Content)`
    width: 50%;
`
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
  padding: ${convert2vw(20)};
  & h3 {
    font-size: ${convert2vw(1.3, "em")};
    margin-bottom: ${convert2vw(90)};
  }
  & p {
    font-size: ${convert2vw(1, "em")};
    height: 60%;
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

const PartnersAndProtecters = styled.div`
    width: 100%;
    display: flex;
    justufy-content: space-between;
    flex-wrap:wrap;
`

const PartnersContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${breakpoint.ml`
    width: 100%
    `}
`

const Partners = styled(Activities)`
  padding: 0 ${convert2vw(64)};
  margin-bottom: ${convert2vw(12, "vh")};
  width : 100%;
  justify-content : space-around;
  ${breakpoint.ml`
  margin-bottom: 15vh;
  width : 100%;
  margin-top : 7vh;
`}
`;
const Protectors = styled(Partners)`
  justify-content : space-around;

`
const ProtectorsContainer = styled(PartnersContainer)`
    width: 40%;
    ${breakpoint.ml`
      width: 100%;
    `}
`
const Partner = styled.img`
  width: ${convert2vw(30, "vh")};
  height: ${convert2vw(30, "vh")};
  object-fit: contain;
  border-radius: 50%;
  ${breakpoint.ml`
  width: 35vw;
  height: calc(35vw + (3.75px - 1vw)*5);
`}
`;
const Protector = styled(Partner)`
border-radius: 0%;
`
const Footer = styled.div`
  width: 100%;
  color: #ffffff;
  font-size: ${convert2vw(1.4, "em")};
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    max-width: ${convert2vw(150)};
    margin-bottom: ${convert2vw(4, "vh")};
    max-height: ${convert2vw(150)};
  }
  & > p {
    margin-bottom: ${convert2vw(8, "vh")};
    ${breakpoint.ml`
      font-size : 0.9em;
      `}
  }
  & ul {
    list-style-type: none;
    text-align: center;
  }
  & a {
    color: #ffffff;
    text-decoration: none;
    &:hover {
      color: #f2f065;
    }
  }
  ${breakpoint.ml`
    color : #222222;
    font-size : 0.9em;
    & a {
      color : #222222;
    }
      & img, & > a {
    max-width: ${convert2vw(150)};
    margin-bottom: ${convert2vw(4, "vh")};
    max-height: ${convert2vw(150)};
    ${breakpoint.ml`
      min-width : 75px;
      min-height : 100px;
      `}
  }
    `}
`;
const AboutUsPage = () => {
  useEffect(() => {
    document.title = "HIEC - Về chúng tôi";
    window.scrollTo(0, 0);
  });
  return (
    <AboutUsPageContainer>
      <OurStory data-aos="fade-left">
        <Logo>HIEC</Logo>
        <Title>GIỚI THIỆU CHUNG</Title>
        <Content>
          Câu lạc bộ Sáng tạo & Khởi nghiệp (HUST Innovation &
          Entrepreneurship Club - HIEC) trực thuộc Ban Học tập - Nghiên cứu Khoa
          học của Đoàn thanh niên trường Đại học Bách Khoa Hà Nội với đội ngũ
          thành viên bao gồm Ban cố vấn - những giảng viên giàu kinh nghiệm từ
          trường Đại học Bách Khoa Hà Nội và các bạn sinh viên giàu tiềm năng và có đam mê Sáng tạo - Khởi nghiệp.
        </Content>
      </OurStory>
      <Intro>
        <Title data-aos="fade-up">SỨ MỆNH</Title>
        <IntroContent data-aos="fade-up">
          HIEC ra đời với sứ mệnh xây dựng một cộng đồng ứng dụng khoa học sáng
          tạo và Kinh doanh - Khởi nghiệp hướng đến các bạn sinh viên Việt Nam.
          Từ đó, thế hệ trẻ có đủ tự tin và hành trang để biến ý tưởng trở thành
          hiện thực, xây dựng một doanh nghiệp bền vững hàng đầu bằng chính tài
          năng, sự trân trọng, trách nhiệm cao của mình và góp phần vào nền kinh
          tế hội nhập.
        </IntroContent>
      </Intro>
      <Title data-aos="fade-up" style={{ alignSelf: "center" }}>
        HOẠT ĐỘNG
      </Title>
      <Activities>
        <Activity data-aos="flip-left" data-aos-duration="1000">
          <h3>01 - KẾT NỐI <i className ="fas fa-network-wired"></i></h3>
          <p>
            Là cầu nối những bạn trẻ có cùng đam mê, sở thích về kinh doanh - khởi
            nghiệp - công nghệ, mang những ý tưởng sáng tạo đến gần hơn với
            những tổ chức, doanh nghiệp.
          </p>
        </Activity>
        <Activity data-aos="flip-left" data-aos-duration="1500">
          <h3>02 - ĐÀO TẠO <i className ="fas fa-graduation-cap"></i></h3>
          <p>
            Xây dựng những khóa học ngắn hạn bồi dưỡng kiến thức, kĩ năng về
            nghiên cứu khoa học và kinh doanh.
          </p>
        </Activity>
        <Activity data-aos="flip-left" data-aos-duration="2000">
          <h3>03 - HỖ TRỢ <i className ="fas fa-hands-helping"></i></h3>
          <p>
            Cung cấp thiết bị, không gian sinh hoạt. Truyền cảm hứng sáng tạo,
            thảo luận về những ý tưởng khoa học, kinh doanh.
          </p>
        </Activity>
        <Activity data-aos="flip-left" data-aos-duration="2500">
          <h3>04 - ĐỊNH HƯỚNG <i className ="fas fa-compass"></i></h3>
          <p>
            Thành lập và hỗ trợ nhóm nghiên cứu, mô hình hóa ý tưởng và tham gia
            thi đấu, giới thiệu đến các doanh nghiệp trong và ngoài trường.
          </p>
        </Activity>
      </Activities>
      <VisionTitle data-aos="fade-up">TẦM NHÌN</VisionTitle>
      <Content
        data-aos="fade-right"
        style={{
          marginBottom: `calc(${convert2vw(47, "vh")} - (6.56px - 1vh) * 60)`
        }}
      >
        HIEC mong muốn trở thành một tổ chức kiểu mới bằng sự sáng tạo và đổi
        mới trong lĩnh vực Kinh doanh - Công nghệ, góp phần lan toả giá trị và
        định hướng cho các bạn sinh viên Việt Nam nâng cao kỹ năng và kiến thức
        chuyên môn để họ có thể phát triển bản thân tối đa, thành công trên lối
        đi riêng và hiện thực hóa ý tưởng về khoa học - kinh doanh của mình.
      </Content>
      <PartnersAndProtecters>
        <PartnersContainer>
        <Title
        data-aos="fade-up"
        style={{ alignSelf: "center", marginBottom: `${convert2vw(15, "vh")}` }}
      >
        ĐỐI TÁC
      </Title>
      <Partners>
        <Partner src="https://i.imgur.com/Ytu67Jv.png" data-aos="flip-left" data-aos-duration="1000"></Partner>
        <Partner src="https://i.imgur.com/gM2SMqL.png" data-aos="flip-left" data-aos-duration="1500"></Partner>
        {/* <Partner data-aos="flip-left" data-aos-duration="2000"></Partner>
        <Partner data-aos="flip-left" data-aos-duration="2500"></Partner> */}
      </Partners>
        </PartnersContainer>
        <ProtectorsContainer>
        <Title
        data-aos="fade-up"
        style={{ alignSelf: "center", marginBottom: `${convert2vw(15, "vh")}` }}
      >
        BẢO TRỢ
      </Title>
      <Protectors>
        <Protector src="https://rubee.com.vn/admin/webroot/upload/image//images/tin-tuc/logo-bach-khoa-ha-noi.jpg" data-aos="flip-left" data-aos-duration="1000"></Protector>
        {/* <Partner data-aos="flip-left" data-aos-duration="2000"></Partner>
        <Partner data-aos="flip-left" data-aos-duration="2500"></Partner> */}
      </Protectors>
        </ProtectorsContainer>

      </PartnersAndProtecters>
      <Footer>
        <p>HIEC - HUST Innovation & Entrepreneurship Club</p>
        <NavLink to="/">
          {window.innerWidth > 425 ?  <img src="https://i.imgur.com/sQW0ygd.png?1" /> : <img src="https://i.imgur.com/woAmhAq.png?1" />}
        </NavLink>
        <h3>Liên hệ:</h3>
        <ul>
          <li>Hotline: (+84) 91 4351 643</li>
          <li>Email: clb.hiec@gmail.com</li>
          <li>
            Fanpage:{" "}
            <a href="https://www.fb.com/hiec.vn">
              https://www.fb.com/hiec.vn
            </a>
          </li>
        </ul>
      </Footer>
    </AboutUsPageContainer>
  );
};

export default withNavAndFooter(AboutUsPage, false);
