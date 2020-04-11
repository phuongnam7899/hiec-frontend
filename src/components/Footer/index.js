import React from "react";
import styled from "styled-components";
import Container from "../Container";
import { NavLink } from "react-router-dom";
import { breakpoint } from "../../styles/mixin"
import LogoFooter from "../../static/images/logo-footer.png"
const FooterContainer = styled.div`
  width: 100%;
  // height: 33vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap : wrap;
  padding : 30px 0px;
`;

const Logo = styled.img`
  width: 10%;
  height: auto;
  cursor : pointer;
  margin-bottom : 20px;
  ${breakpoint.ls`
    width : 15%;
  `}
  ${breakpoint.tb`
    display : none;
  `}
`;

const FooterLink = styled(NavLink)`
    margin-bottom : 4px;
    text-decoration : none;
    color : black;
    &:hover {
        color: ${props  => props.theme.COLOR};
    }
`;

const Column = styled.div`
  display : flex;
  flex-direction : column;
  height : 75%;
  & > div {
    margin-bottom : 8px;
  }
 
  &  a {
    text-decoration : none;
    color : #1c1c1c;
  }
  & >  a {
    margin-bottom : 4px;
  }
  & a:hover {
    color : ${props  => props.theme.COLOR};
    cursor : pointer;
  }
  & > div > i {
      margin-right : 8px;
  }
  & > div > span {
    color : #1c1c1c;
  
}
${breakpoint.tb`
  margin-bottom : 20px;
`}

${breakpoint.ml`
  & *{
    font-size : 12px;
  }
`}

`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom : 16px;
  ${breakpoint.ml`
    font-size : 16px;
`}
`;

const LinkArea = styled.div`
  display : flex;
  align-items : flex-start;
  justify-content : space-between;
  flex-wrap : wrap;
  width :70%;
  ${breakpoint.tb`
    width : 100%;
   
  `}
  
`

const Footer = props => {

  const goToHomepage = () => {
    window.location.assign("/")
  }
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Container>
        <FooterContainer>
          <Logo onClick={goToHomepage} src={LogoFooter}></Logo>

          <LinkArea>
            <Column>
              <Title>Menu</Title>
              <FooterLink to="/">Trang chủ</FooterLink>
              <FooterLink to="/news">Tin tức</FooterLink>
              <FooterLink to="/project">Cơ hội</FooterLink>
              <FooterLink to="/forum">Diễn đàn</FooterLink>
              <FooterLink to="/about-us">Về chúng tôi</FooterLink>
            </Column>
            <Column>
              <Title>Đối tác</Title>
              <a href="https://www.facebook.com/Dynlab.ITE/">HUST Dynlab</a>
              <a href="https://getinsvn.com/">Get Ins</a>
            </Column>
            <Column>
              <Title>Liên hệ</Title>
              <div>
                <i class="fab fa-facebook"></i>
                <a href="https://www.facebook.com/hiec.vn/">fb.com/hiec.vn</a>
              </div>
              <div>
                <i class="fas fa-envelope"></i>
                <span>clb.hiec@gmail.com</span>
              </div>
              <div>
                <i class="fas fa-phone-alt"></i>
                <span>(+84) 49 867 237</span>
              </div>
            </Column>
          </LinkArea>
        </FooterContainer>
      </Container>
    </div>
  );
};

export default Footer;
