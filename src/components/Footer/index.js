import React from "react";
import styled from "styled-components";
import Container from "../Container";
import { NavLink } from "react-router-dom";

const FooterContainer = styled.div`
  width: 100%;
  height: 33vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 20%;
  height: 30%;
  cursor : pointer;
`;

const FooterLink = styled(NavLink)`
    margin-bottom : 4px;
    text-decoration : none;
    color : black;
    &:hover {
        color: #37A28D;
    }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 75%;
  &  a {
    text-decoration : none;
    color : #1c1c1c;
  }
  & >  a {
    margin-bottom : 4px;
  }
  & a:hover {
    color : #37A28D;
    cursor : pointer;
  }
  & > div > i {
      margin-right : 4px;
  }
  & > div > span {
    color : #1c1c1c;
}

`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom : 16px;
`;

const Footer = props => {
  
  const goToHomepage = () =>{
    window.location.assign("/")
}
  return (
    <div style={{ backgroundColor: "#ffffff", height: "30vh" }}>
      <Container>
        <FooterContainer>
          <Logo  onClick = {goToHomepage} src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.15752-9/85148177_186802199231222_9143504281012273152_n.png?_nc_cat=111&_nc_ohc=xlhuygYNM1IAX-T1jH0&_nc_ht=scontent.fhan2-2.fna&oh=3354c900d0b0a1950ca16c8008eaf17b&oe=5ED1D97E"></Logo>
          <Column>
            <Title>Menu</Title>
            <FooterLink to="/">Trang chủ</FooterLink>
            <FooterLink to="/news">Tin tức</FooterLink>
            <FooterLink to="/project">Dự án</FooterLink>
            <FooterLink to="/forum">Diễn đàn</FooterLink>
            <FooterLink to="/about-us">Về chúng tôi</FooterLink>
          </Column>
          <Column>
            <Title>Đối tác</Title>
            <a href="https://www.facebook.com/Dynlab.ITE/">Dynlab</a>
            <a href="https://getinsvn.com/">Get Ins</a>
          </Column>
          <Column>
            <Title>Liên hệ</Title>
            <div>
              <i class="fab fa-facebook"></i>
              <a href="https://www.facebook.com/hiec.vn/">https://www.facebook.com/hiec.vn/</a>
            </div>
            <div>
              <i class="fas fa-envelope"></i>
              <span>clb.hiec@gmail.com</span>
            </div>
            <div>
              <i class="fas fa-phone"></i>
              <span>+8449867237</span>
            </div>
          </Column>
        </FooterContainer>
      </Container>
    </div>
  );
};

export default Footer;
