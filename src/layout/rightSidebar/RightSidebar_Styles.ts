import styled from "styled-components";
import {theme} from "../../styles/Theme";

const RightSidebar = styled.aside`

    border-right: 1px solid ${theme.colors.Neutral30};
    background-color: ${theme.colors.Neutral10};
    padding: 25px 25px 0 25px;
    position: fixed;
    top: 78px;
    left: 0;
    bottom: 0;

   
    width: 125px;
    //margin-top: 76px;
`;


export const S = {
    RightSidebar,

}