import styled, { ThemeProvider } from "styled-components"

import { NavLink, Link, withRouter, BrowserRouter as Router } from "react-router-dom";
import Container from "../Container"
import {theme} from "../../App"

export const BackgroundNav = styled.div`
    background-color:${props => props.theme.darkMode ? "#494949" : "white"};
    height:60px;
    width: 100vw;
    box-shadow: 0px 4px 4px rgba(193,193,193,0.25);
`;


export const Logo = styled.img`
    display : block;
    width : 40px;
    height : 40px;
    max-height : 40px;
    max-width: 40px;
    margin : auto 0;
    cursor : pointer;
`;
export const MiddleRow = styled(Container)`
    display : flex;
    align-items : center;

    height:100%;
    
`;

export const FlexGrow = styled.div.attrs(props => ({
    grow: props.grow || 1,
}))`
    flex-grow : ${props => props.grow}
  `;

export const Ul = styled.ul`
    display : flex;
    flex-direction : row;
    justify-content : flex-end;
    height: 100%;
`;

export const Li = styled.li`
    display : block;
    margin : auto 16px;
`;

export const Options = styled.div`
    background-color:#3E3E3E;
    position:absolute;
    right: 0px;
    top: 65px;
    width: 180px;
    border-radius : 5px;
   
`;

export const Polygon = styled.div`
    z-index:998;
    position:absolute;
    width:20px;
    height:10px;
    clip-path:polygon(50% 0%, 0% 100%, 100% 100%);
    right:0px;
    top:57px;
    background-color:#3E3E3E;
`

export const LiOptions = styled.div`
    padding : 8px 0px;
    width:100%;
    text-align:center;
    &:hover{
        background-color: ${props => props.theme.HOVER_COLOR};
        transition : 0.2s all;
    }
    
`

export const OptionLink = styled(NavLink)`
    padding : 8px 32px;
    text-decoration: none;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont,'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color  : white;

`
export const NavBarLink = styled(NavLink)`
    text-decoration: none;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont,'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color  : black;
    transition : 0.1s all;
    &:hover{
        color : ${props  => props.theme.HOVER_COLOR}
    }
    

      
`


export const Avatar = styled.img`
  height:40px;
  width: 40px;
  border-radius:999px;
  position : relative;
  object-fit: cover;

  
`;
export const AvatarBackground = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : flex-end;
    align-items:center;
    height: 100%;
    cursor: pointer;
    
`;
export const styleActiveLink = {
    color: "#0853B6",
}

export const ProfilePage = styled.span`
    padding : 8px 32px;
    cursor : pointer;
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont,'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`