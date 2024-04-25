import styled from "styled-components";
import {theme} from "../../styles/Theme";


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




const LeftSidebarMenu = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: 24px;
`;

export const S = {
    LeftSidebar,

    MenuItem,
    LeftSidebarMenu

}