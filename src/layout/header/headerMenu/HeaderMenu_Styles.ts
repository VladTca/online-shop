import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";



const MenuItem = styled.li`
    position: relative;
`;


const NavLink = styled(Link)`
    color: ${theme.colors.Neutral60};
    text-align: center;
    font-family: "Josefin Sans", sans-serif;
    font-size: 30px;
    font-weight: 400;

    &:hover {
        color: ${theme.colors.Primary60};

    }
`;


const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`;

const Photo = styled.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
  margin-right: 20px;
  
`;

export const S = {
    NavLink,
    MenuItem,
    DesktopMenu,
    Photo
};
