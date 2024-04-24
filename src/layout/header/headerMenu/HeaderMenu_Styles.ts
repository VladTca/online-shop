import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";




const MenuItem = styled.li`
    position: relative;
`;


const NavLink = styled(Link)`
    color: ${theme.colors.Neutral60};
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
 

    &:hover {
        color: ${theme.colors.Primary60};

    }
`;


const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
        justify-content: center;
        margin: 0 32px;
`;

const Photo = styled.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
  //margin-right: 24px;
  
`;

export const S = {
    NavLink,
    MenuItem,
    DesktopMenu,
    Photo
};
