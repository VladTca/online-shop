import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";




const MenuItem = styled.li`
    position: relative;
`;


const NavLink = styled(Link)`
    color: ${theme.colors.Neutral60};
   
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    cursor: pointer;
     
    
    &:hover {
        color: ${theme.colors.Primary60};
        svg {
            fill: ${theme.colors.Primary60};
            stroke: ${theme.colors.Neutral10};
        }
    }
`;


const DesktopMenu = styled.nav`
    display: flex;
 
    justify-content: center;
    align-items: center;
   


    ul {
        display: flex;
        gap: 32px;
        margin: 0 32px;
        
    }
`;

const Photo = styled.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
 
`;

export const S = {
    NavLink,
    MenuItem,
    DesktopMenu,
    Photo
};
