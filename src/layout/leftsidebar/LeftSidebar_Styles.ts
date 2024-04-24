import styled from "styled-components";
import {theme} from "../../styles/Theme";

const LeftSidebar = styled.aside`

    border-right: 1px solid ${theme.colors.Neutral30};
    background-color: ${theme.colors.Neutral10};
    padding: 20px 0;
    position: fixed;
    top: 76px;
    left: 0;
    bottom: 0;

   
    width: 125px;
    //margin-top: 76px;
`;


export const S = {
    LeftSidebar,

}