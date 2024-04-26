import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Link} from "react-scroll";


const LeftSidebar = styled.aside`

    border-right: 1px solid ${theme.colors.Neutral30};
    background-color: ${theme.colors.Neutral10};
    padding:24px;
    position: fixed;
    top: 78px;
    left: 0;
    bottom: 0;

   
    width: 125px;
   
`;

const MenuItem = styled.li`
    position: relative;
`;


const NavBar = styled(Link)`
    color: ${theme.colors.Neutral60};
padding: 12px 6px;
    font-size: 12px;
    font-weight: 500;
    line-height: 116%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    cursor: pointer;
     margin-bottom: 12px;
    svg{
        fill: ${theme.colors.Neutral60};
        stroke: none;
    }
 
    
    &:hover {
        background-color: ${theme.colors.Primary60};
        border-radius: 8px;
        color: ${theme.colors.Neutral10};
        svg {
            fill: ${theme.colors.Neutral10};
            stroke: ${theme.colors.Neutral10};
        }
    }
`;
const LeftSidebarMenu = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    
`;

export const S = {
    LeftSidebar,
    NavBar,
    MenuItem,
    LeftSidebarMenu

}